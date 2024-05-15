import React, { useState } from 'react';

export default function Bt5() {
  const [item, setItem] = useState<boolean>(true);
  const [button, setButton] = useState<string>('Hiện');

  const changeItem = () => {
    if (item === true) {
      setItem(false);
      setButton('Ẩn');
    } else {
      setItem(true);
      setButton('Hiện');
    }
  };

  return (
    <div>
        <h4>Bt 5</h4>
      <button onClick={changeItem}>{button}</button>
    </div>
  );
}

