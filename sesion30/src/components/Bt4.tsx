import React, { useState } from 'react';

const Exercise04 = () => {
  const [city, choseCity] = useState('');

  const handleCityChange = (event:any) => {
    choseCity(event.target.value);
  };

  return (
    <div>
    <h4>Bai 4</h4>
      <p>Chọn tỉnh/thành phố:</p>
      <select value={city} onChange={handleCityChange}>
        <option value="">Chọn</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Cần Thơ">Cần Thơ</option>
      </select>
      <p>Bạn đã chọn: {city}</p>
    </div>
  );
};

export default Exercise04;
