console.log("Arithmetic Operators");

const a = 24;
const b = 4, c = 13;
let d = 10;

console.log("Các số a, b, c, d: ", a, b, c, d);
console.log("Cộng: a + b =", a + b);
console.log("Trừ: a - b = ", a - b)
console.log("Nhân: b * c = ", b * c);
console.log("Chia: a / b = ", a / b);
console.log("Chia lấy dư: a % c = ", a % c);
console.log("Quy tắc toán học: a + b * c = ", a + b * c);
console.log("Lũy thừa: b ** 2  = ", b ** 2);

const e = d++;
console.log("Khai báo: const e = d ++")
console.log("Khi đó: e = ", e);
console.log("Và: d = ", d); // do a, b, c khai báo const nên sẽ không thể gán giá trị ++ hay --
// với d++ sẽ được hiểu in ra d trước rồi mới tăng 1 đơn vị
// nên khi in d vẫn = 10, sau đó tăng thêm 1 => 11

const f = ++d; // Cộng ngay lập tức
console.log("Khai báo: const f = ++ d")
console.log("Khi đó: f = ", f);
console.log("Và: d = ", d);

console.log("Giảm 1: d-- =", d--);
console.log("Giảm 1: --d-- =", --d);