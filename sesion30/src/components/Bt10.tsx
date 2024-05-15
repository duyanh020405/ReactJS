import React, { useState } from 'react';

const RandomGender = () => {
    const genders = ["Nam", "Nữ", "Khác"];
    const [gender, setGender] = useState("Nam");

    const inRa = () => {
        const randomIndex = Math.floor(Math.random() * genders.length);
        setGender(genders[randomIndex]);
    };

    return (
        <div>
            <h4>Bai 10</h4>
            <p>Giới tính : {gender}</p>
            <button onClick={inRa}>Random gender</button>
        </div>
    );
}
export default RandomGender;
