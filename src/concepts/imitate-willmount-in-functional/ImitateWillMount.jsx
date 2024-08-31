import { useEffect, useRef } from 'react';

export default function ImitateWillMount() {
  if (typeof myRef == 'undefined') {
    console.log('willmount', myRef);
  }
  var myRef = useRef(2);

  useEffect(() => {
    console.log('didmount');
  }, []);

  console.log('render');
  return (
    <div>ImitateWillMount</div>
  );
}