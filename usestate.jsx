import React, { useState } from 'react';
import './styles.css';

export default function App() {
    const [amount, setAmount] = React.useState("$100");

    const clickHandler = () => {
        setAmount("$75");
    }

    return (
        <div>
            <p>${amount}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
