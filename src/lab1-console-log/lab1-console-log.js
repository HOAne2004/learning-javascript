console.log("Console.log");

const name = "Le Huy Hoan";
const birthYear = 2004;
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear; 
const isStudent = true

console.log(`Tên: ${name}
Tuổi: ${age}
Sinh viên: ${isStudent} `);