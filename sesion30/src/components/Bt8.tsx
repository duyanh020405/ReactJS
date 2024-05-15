import React, { useState } from 'react';
export default function Bt8() {
    const [count, setCount] = useState<number>(0);
    const changeCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h4>Bai 8</h4>
            <button onClick={changeCount}>Click {count} lan</button>
        </div>
    );
}

