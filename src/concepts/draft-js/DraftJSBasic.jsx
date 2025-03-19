import { Editor, EditorState, KeyBindingUtil, RichUtils, convertFromRaw, getDefaultKeyBinding } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { useRef, useState } from 'react';

export default function DraftJSBasic() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { hasCommandModifier } = KeyBindingUtil;
  const containerRef = useRef(null);

  const customKeyBindingFn = e => {
    console.log('>> setting key binding');
    if (e.keyCode === 81 /* `Q` key */ && hasCommandModifier(e)) {
      return 'bold';
    }
    console.log('>> key: ', getDefaultKeyBinding(e));
    return getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (command, editorState) => {
    console.log('>> handlekeycommand: ', command, editorState);
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const handleConvert = (e) => {
    // const x = convertFromRaw(editorState);
    const y = editorState.getCurrentContent();
    const z = y.getPlainText();
    const zz = 'hahahaha this is convereted';
    const zzz = convertFromRaw(zz);
    setEditorState(EditorState.createWithContent(zzz));
    // const blocksFromHTML = convertFromHTML(sampleMarkup);
    // const state = ContentState.createFromBlockArray(
    //   blocksFromHTML.contentBlocks,
    //   blocksFromHTML.entityMap,
    // );

    // this.state = {
    //   editorState: EditorState.createWithContent(state),
    // };
  };

  // function myBlockStyleFn(contentBlock) {
  //   const type = contentBlock.getType();
  //   console.log('>> type: ', type);
  //   if (type === 'blockquote') {
  //     return 'superFancyBlockquote';
  //   }
  // }

  return (
    <>
      <div className='parent-div' onClick={() => containerRef.current.focus()}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={customKeyBindingFn}
          ref={containerRef}
        // blockStyleFn={myBlockStyleFn}
        />
        <button className='child-button' onClick={() => handleKeyCommand('bullet', editorState)}>Bold</button>
        <button className='' onClick={handleConvert}>Convert</button>
      </div>
    </>
  );
}



// export class DraftJSBasic extends Component {
//   state = { editorState: EditorState.createEmpty() };

//   onChange = editorState => this.setState({ editorState });

//   handleKeyCommand(command, editorState) {
//     console.log('>> handlekeycommand: ', command, editorState);
//     const newState = RichUtils.handleKeyCommand(editorState, command);

//     if (newState) {
//       this.onChange(newState);
//       return 'handled';
//     }

//     return 'not-handled';
//   }


//   render() {
//     return (
//       <Editor
//         editorState={this.state.editorState}
//         handleKeyCommand={this.handleKeyCommand}
//         onChange={this.onChange}
//       />
//     )
//   }
// }

// export default DraftJSBasic