import { useEffect } from 'react';

function VanillaJSInReact() {
  useEffect(() => {
    const elemButton = document.getElementById('addOne');
    const elemCounter = document.getElementById('counter');
    let count = 0;

    function callbackFunction(){
      count++;
      elemCounter.innerText = `Count is ${count}`;
    }
    elemButton.addEventListener('click', callbackFunction);
  }, []);

  return (
    <div>
      <div id="counter">Count is 0</div>
      <div>
        <button id="addOne">
          Add One
        </button>
      </div>
    </div>
  );
}

export default VanillaJSInReact;