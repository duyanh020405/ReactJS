"use strict";
function xemHoaDon(bill) {
    const [tien, ngayTao, sum] = bill;
    return `Hóa đơn  ${tien} được tạo vào ngày ${ngayTao} có tổng tiền là ${sum} đồng.`;
}
const billInfo = [1234, "2024-04-15", 500000];
console.log(xemHoaDon(billInfo));
