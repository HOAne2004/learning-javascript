console.log("Objects");

console.log("1. Khởi tạo Object")
// Object dùng {} để bọc
// Thuộc tính định nghĩa theo key: value 
// name : 25

const student1 = {
    name: "HOAn",
    address: "Nam Dinh",
    age: 24,
    scores:{
        math: 9,
        english: 9
    }
};

const student2 = {
    name: "HOAn",
    address: "Nam Dinh",
    age: 24,
    scores: {
        math: 9,
        english: 9
    }
};

const students = [student1, student2];

console.log(">>> Students: ", students);

console.log("2. Thao tác với Object");
// Get data
// [object].[attribute]
console.log("Tên của sinh viên 1:", student1.name);

// Set data
student1.university = "HAUI";
console.log(">>> Student 1 after add university: ", student1)

// Delete data
delete student1.university
console.log(">>> Student 1 after delete university: ", student1)