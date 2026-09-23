// Dữ liệu KHÔNG được lưu trực tiếp trong biến
// mà chỉ lưu ở 1 địa chỉ tham chiếu trong bộ nhớ

console.log("Object Data Type");

// 1. Object: key-value
// Lưu 1 biến số có nhiều thông tin
const person = {
    name: "Lê Huy Hoàn",
    age: 20,
    address: "Ninh Bình"
}

console.log("1. Object")
console.log("Person: ", person)

// 2. Array
const scores = [10, 9, 9, 7]

console.log("2. Array")
console.log("Scores: ", scores)

// 3. Function
// Function declaration
console.log("3. Function")
function greet(name) {
  return `Xin chào, ${name}!`;
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const multiply = (a,b) => a*b

// Hàm là object → có thuộc tính & method
console.log(greet.name);    // "greet"
console.log(greet.length);  // 1 (số tham số)

// Truyền hàm làm tham số
function run(fn, value) {
  return fn(value);
}
console.log(run(greet, "An"));  // "Xin chào, An!"

// 4. Date - lưu dạng số mili giây
console.log("4. Date");

const now = new Date()
console.log("Thời gian hiện tại: ",now);

const birthday = new Date(2004, 9, 11);
console.log("Năm: ", birthday.getFullYear());
console.log("Tháng: ", birthday.getMonth());
console.log("Ngày: ", birthday.getDate());

const d = new Date("2025-12-25T00:00:00");
console.log("Thứ: ", d.getDay()); // thứ trong tuần (0 = Chủ nhật)

// Lấy timestamp
console.log(Date.now()); // ví dụ: 1736938200000

// Định dạng
console.log(now.toISOString());    // "2025-01-15T10:30:00.000Z"
console.log(now.toLocaleDateString("vi-VN")); // "15/1/2025"

// 5. RegExp - biểu thức chính quy
// Dùng để mô tả một mẫu (pattern) ký tự, 
// phục vụ việc tìm kiếm, so khớp, thay thế chuỗi.

console.log("5. RegExp")
// Tạo bằng literal (khuyến khích)
const regex1 = /hello/i;      // i = không phân biệt hoa thường

// Tạo bằng constructor
const regex2 = new RegExp("hello", "i");

// test() — kiểm tra có khớp không
console.log(/^\d{3}$/.test("123"));   // true  (đúng 3 chữ số)
console.log(/^\d{3}$/.test("12a"));   // false

// match() — tìm chuỗi khớp
const text = "SĐT: 0912345678 và 0987654321";
console.log(text.match(/\d{10}/g));   // ["0912345678", "0987654321"]

// replace() — thay thế
const email = "user@example.com";
console.log(email.replace(/(\w+)@(\w+)\.com/, "$1 AT $2"));
// "user AT example"

// Kiểm tra email đơn giản
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailRegex.test("an@test.com"));  // true
console.log(emailRegex.test("an@test"));      // false

// 6. Map
// lưu cặp key-value, trong đó key có thể là bất kỳ 
// kiểu dữ liệu nào (kể cả object, function), và giữ nguyên thứ tự chèn.
console.log("6. Map")
const map = new Map();

// 1. Thêm cặp key-value
map.set("name", "An");
map.set(1, "một");
map.set(true, "đúng");

const objKey = { id: 1 };
map.set(objKey, "giá trị với key là object"); // ✅ object làm key được!

// 2. Lấy giá trị
console.log(map.get("name"));    // "An"
console.log(map.get(objKey));    // "giá trị với key là object"

// 3. Kiểm tra & xóa
console.log(map.has("name"));    // true
map.delete("name");

// 4. Kích thước
console.log(map.size);           // 3

// 5. Duyệt
for (const [key, value] of map) {
  console.log(key, "=>", value);
}

// 6. Khởi tạo từ mảng
const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map2.get("a")); // 1

// 7. Set
// collection lưu các giá trị duy nhất (không trùng lặp), giữ nguyên thứ tự chèn.
console.log("7. Set")
const set = new Set();

// 1. Thêm giá trị
set.add(1);
set.add(2);
set.add(2);        // ⚠️ trùng → bị bỏ qua
set.add("hello");

console.log("Size",set.size);           // 3 (không phải 4)

// 2. Kiểm tra
console.log(set.has(1));         // true
console.log(set.has(99));        // false

// 3. Xóa
set.delete(1);
console.log(set.has(1));         // false

// 4. Duyệt
for (const value of set) {
  console.log(value);            // 2, "hello"
}

// 5. Ứng dụng: loại bỏ phần tử trùng trong mảng
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);             // [1, 2, 3, 4]

// 6. Khởi tạo từ mảng
const set2 = new Set(["a", "b", "a"]);
console.log(set2);               // Set(2) { "a", "b" }