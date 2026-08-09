import { Component, lazy, Suspense, useEffect, useMemo, useState } from 'react';

// Each concept is a folder under ./concepts whose entry point is index.jsx.
// Only index.jsx is discovered here - a concept folder can freely import
// its own helper components (e.g. Display.jsx) from that index.jsx, but
// those helpers are never listed or rendered directly by the launcher.
const modules = import.meta.glob('./concepts/**/index.jsx');
// Concept folder path relative to ./concepts, e.g. 'counter-with-child'
// or, for nested groups, 'refs/forwarding-refs'.
const conceptPaths = Object.keys(modules)
  .map((path) => path.replace('./concepts/', '').replace('/index.jsx', ''))
  .sort();

function toModulePath(relPath) {
  return `./concepts/${relPath}/index.jsx`;
}

// Builds a one-level-deep tree: top-level folders that directly contain an
// index.jsx become standalone leaf entries; top-level folders that only
// group nested concept folders become a header with indented children.
function buildTree(relPaths) {
  const tree = {};
  relPaths.forEach((relPath) => {
    const parts = relPath.split('/');
    const top = parts[0];
    if (parts.length === 1) {
      tree[top] = { type: 'leaf', relPath, label: top };
    } else {
      if (!tree[top] || tree[top].type !== 'group') {
        tree[top] = { type: 'group', children: [] };
      }
      tree[top].children.push({ relPath, label: parts.slice(1).join('/') });
    }
  });
  return tree;
}

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 16, color: 'crimson' }}>
          <h3>Failed to render this component</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const tree = useMemo(() => buildTree(conceptPaths), []);
  const [selected, setSelected] = useState(
    () => window.location.hash.slice(1) || null,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.location.hash = selected || '';
  }, [selected]);

  const LazyComponent = useMemo(() => {
    if (!selected || !modules[selected]) return null;
    return lazy(() =>
      modules[selected]().then((mod) => ({
        default:
          mod.default ||
          (() => <p>This concept&apos;s index.jsx has no default export.</p>),
      })),
    );
  }, [selected]);

  const filteredTree = useMemo(() => {
    if (!filter) return tree;
    const lower = filter.toLowerCase();
    const result = {};
    Object.entries(tree).forEach(([top, entry]) => {
      if (entry.type === 'leaf') {
        if (entry.label.toLowerCase().includes(lower)) result[top] = entry;
        return;
      }
      const children = entry.children.filter((child) =>
        `${top}/${child.label}`.toLowerCase().includes(lower),
      );
      if (top.toLowerCase().includes(lower) || children.length) {
        result[top] = {
          ...entry,
          children: children.length ? children : entry.children,
        };
      }
    });
    return result;
  }, [tree, filter]);
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside
        style={{
          width: 280,
          flexShrink: 0,
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          padding: 12,
          boxSizing: 'border-box',
        }}
      >
        <input
          type="text"
          placeholder="Filter concepts..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '100%',
            padding: 6,
            marginBottom: 12,
            boxSizing: 'border-box',
          }}
        />
        {Object.entries(filteredTree).map(([top, entry]) => {
          if (entry.type === 'leaf') {
            const modulePath = toModulePath(entry.relPath);
            return (
              <div
                key={top}
                onClick={() => setSelected(modulePath)}
                style={{
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: 4,
                  marginBottom: 4,
                  fontWeight: 'bold',
                  background:
                    selected === modulePath ? '#e0ecff' : 'transparent',
                  fontSize: 13,
                }}
              >
                {entry.label}
              </div>
            );
          }
          return (
            <div key={top} style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 'bold', fontSize: 13, color: '#555' }}>
                {top}
              </div>
              {entry.children.map((child) => {
                const modulePath = toModulePath(child.relPath);
                return (
                  <div
                    key={child.relPath}
                    onClick={() => setSelected(modulePath)}
                    style={{
                      cursor: 'pointer',
                      padding: '4px 8px 4px 16px',
                      borderRadius: 4,
                      background:
                        selected === modulePath ? '#e0ecff' : 'transparent',
                      fontSize: 13,
                    }}
                  >
                    {child.label}
                  </div>
                );
              })}
            </div>
          );
        })}
      </aside>

      <main style={{ flex: 1, overflow: 'auto', padding: 20 }}>
        {!selected && (
          <p>Select a concept from the sidebar to render it here.</p>
        )}
        {LazyComponent && (
          <ErrorBoundary selected={selected}>
            <Suspense fallback={<p>Loading {selected}...</p>}>
              <LazyComponent />
            </Suspense>
          </ErrorBoundary>
        )}
      </main>
    </div>
  );
}

export default App;
