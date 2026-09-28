console.log('Loops');

// 1. For
// for(khoi_tao; dieu_kien; cap_nhat) {}
console.log("1. For");
for (let i = 0; i <= 5; i++) {
    console.log("i =", i);
}

// 2. While
console.log("2. While");
let score = 8;
while (score > 5) {
    console.log(">>> check score: ", score);
    score--;
}

// 3. Do While
// Chạy tối thiểu 1 lần vòng Do sau đó mới check điều kiện
console.log("3. Do while")
let age = 10
do {
    console.log(">>> check 18 age: ", age);
    age++;
} while (age <= 18);

// 4. break: thoát khỏi vòng lặp.
console.log("4. Break")
for (let i = 1; i < 10; i++) {
    console.log("i =", i);
    if (i === 5) {
        break;
    }
}

// 5. continue : bỏ qua vòng hiện tại và tiếp tục vòng sau.
console.log("5. Continue")
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("i =", i);
    
}