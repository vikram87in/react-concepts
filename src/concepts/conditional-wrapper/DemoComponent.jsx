import React from 'react'
import ConditionalWrapper from './ConditionalWrapper'

const DemoComponent = () => {
  return (
    <>
      <div>DemoComponent</div>
      <ConditionalWrapper condition={true} wrapper={(content) => <div className='wrapper-parent'>{content}</div>}>
        <div>Wrapped in div</div>
        <div>Wrapped in div too</div>
      </ConditionalWrapper>
    </>)
}

export default DemoComponent