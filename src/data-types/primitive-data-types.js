console.log ("Bài này học về Data Types (DT)")
// JS không cần định nghĩa DT, dựa vào giá trị gán sẽ biết DT

// 1. Number
const myAge = 20;
const myScore = 9.1;

console.log("1. Number")
console.log("myAge: ", myAge,"Data type:", typeof(myAge));
console.log("myScore: ", myScore, "Data type:", typeof(myScore));

// 2. string

// hỗ trợ nhiều loại "", '', `` đều được.
const name = "Lê Huy Hoàn"; //recommended
const address = 'Ninh Bình';
const language = `JavaScript`;

console.log("2. String");
console.log("Name: " ,name, "Data type:", typeof(name));

// 3. Boolean: true/false
const isActive = true;

console.log("3. Boolean");
console.log("isActive: ", isActive, "Data type:", typeof(isActive) );

// 4. Undefined
let hide;

console.log("4. Undefined");
console.log("Undefined: ", hide, "Data type:", typeof(hide));

// 5. Null
let testNull = null;

console.log("5. Null");
console.log("Null: ", testNull, "Data type:", typeof(testNull));

// 6. BigInt - số cực lớn 2^53 - 1

console.log("6. BigInt");
console.log(9007199254740991 + 1);  // 9007199254740992  ✅ đúng
console.log(9007199254740991 + 2);  // 9007199254740992  ❌ sai! (phải là ...993)

const big1 = 9007199254740991n;      // thêm 'n' ở cuối
const big2 = BigInt("9007199254740991"); // hoặc dùng hàm BigInt()

console.log(big1 + 2n);              // 9007199254740993n  ✅ đúng
console.log(big2 * 1000000n, "Data Type: ", typeof(big2));        // 9007199254740991000000n

// Không trộn BigInt với Number
//console.log(1n + 2); // ❌ TypeError: Cannot mix BigInt and other types

// Phải chuyển đổi
console.log(1n + BigInt(2));  // ✅ 3n
console.log(Number(1n) + 2);  // ✅ 3

// So sánh thì OK
console.log(1n == 1);   // true  (so sánh lỏng)
console.log(1n === 1);  // false (khác type)

// 7.Symbol - định danh duy nhất

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log("7. Symbol")
console.log(sym1 === sym2);  // false  ← luôn khác nhau!
console.log(sym1.toString()); // "Symbol(id)"
console.log(typeof sym1);     // "symbol"