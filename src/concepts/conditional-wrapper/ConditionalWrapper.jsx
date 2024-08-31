
const ConditionalWrapper = ({ children, wrapper, condition }) => {
  return condition ? wrapper(children) : children;
}

export default ConditionalWrapper