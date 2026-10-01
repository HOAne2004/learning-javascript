console.log("Arrays");

// 1. Tạo mảng
console.log("1. Tạo mảng");
// sử dụng [] để tạo mảng
const names = ["Alice", "Bob", "Charlie", "David"];
const ages = [25, 30, 35, 40];

console.log("Mảng names:", names);
console.log("Mảng ages:", ages);

// mảng vẫn có thể khai báo các phần tử khác kiểu dữ liệu, 
// tuy nhiên trong thực tế việc này không mang ý nghĩa gì.
const mixedArray = ["Alice", 25, true, null, [1, 2, 3]];
console.log("Mảng mixedArray:", mixedArray);

// 2. Truy cập phần tử trong mảng
console.log("2. Truy cập phần tử trong mảng");
console.log("Phần tử đầu tiên của mảng names:", names[0]);
console.log("Phần tử thứ hai của mảng ages:", ages[1]);

// Nếu phần tử không tồn tại, kết quả trả về là undefined
console.log(`Mảng names đang có ${names.length} phần tử`);
console.log("Phần tử thứ năm của mảng names:", names[4]);
console.log(`Mảng ages đang có ${ages.length} phần tử`);
console.log("Phần tử thứ năm của mảng ages:", ages[4]);

// 3. Chỉnh sửa phần tử trong mảng
console.log("3. Chỉnh sửa phần tử trong mảng");

console.log("Phần tử đầu tiên của mảng names trước khi chỉnh sửa:", names[0]);
names[0] = "Eve";
console.log("Phần tử đầu tiên của mảng names sau khi chỉnh sửa:", names[0]);

//4. Thêm phần tử vào mảng
console.log("4. Thêm phần tử vào mảng");

// Thêm phần tử vào cuối mảng sử dụng push()
console.log("Mảng names trước khi thêm phần tử:", names);
names.push("Frank");
console.log("Mảng names sau khi thêm phần tử:", names);

// Thêm phần tử vào đầu mảng sử dụng unshift()
console.log("Mảng ages trước khi thêm phần tử:", ages);
ages.unshift(20);
console.log("Mảng ages sau khi thêm phần tử:", ages);

// 5. Xóa phần tử khỏi mảng
console.log("5. Xóa phần tử khỏi mảng");

// Xóa phần tử cuối cùng của mảng sử dụng pop()
console.log("Mảng names trước khi xóa phần tử:", names);
names.pop();
console.log("Mảng names sau khi xóa phần tử:", names);

// Xóa phần tử đầu tiên của mảng sử dụng shift()
console.log("Mảng ages trước khi xóa phần tử:", ages);
ages.shift();
console.log("Mảng ages sau khi xóa phần tử:", ages);

// 6. Duyệt mảng
console.log("6. Duyệt mảng");

// Duyệt mảng sử dụng vòng lặp for
console.log("Duyệt mảng names sử dụng vòng lặp for:");
for(let i = 0; i < names.length; i ++)
{
    console.log(`Phần tử thứ ${i} của mảng names:`, names[i]);
}

// Duyệt mảng sử dụng vòng lặp forEarch
console.log("Duyệt mảng ages sử dụng vòng lặp forEach:");
ages.forEach((age, index) => {
    console.log(`Phần tử thứ ${index} của mảng ages:`, age);
});

// Duyệt mảng sử dụng vòng lặp for...of
console.log("Duyệt mảng mixedArray sử dụng vòng lặp for...of:");
for(const element of mixedArray){
    console.log("Phần tử của mảng mixedArray:", element);
}
