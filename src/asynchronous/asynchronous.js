console.log("%c=== ASYNCHRONOUS DEMO ===", "color:#00c6ff;font-weight:bold;font-size:14px");

/* ============ DEMO 1: setTimeout cơ bản ============ */
console.log("\n--- DEMO 1: setTimeout ---");
console.log("1");
setTimeout(() => console.log("2 (sau 2 giây)"), 2000);
console.log("3");
// Output: 1, 3, 2

/* ============ DEMO 2: Bằng chứng rõ nhất ============ */
console.log("\n--- DEMO 2: setTimeout 0ms ---");
console.log("Start");
setTimeout(() => console.log("A - 0ms"), 0);
setTimeout(() => console.log("B - 1000ms"), 1000);
setTimeout(() => console.log("C - 500ms"), 500);
console.log("End");
// Output: Start, End, A, C, B

/* ============ DEMO 3: Promise 3 trạng thái ============ */
console.log("\n--- DEMO 3: Promise ---");

const myPromise = new Promise((resolve, reject) => {
    console.log("1. Executor chạy ngay (sync)");
    setTimeout(() => {
        console.log("3. Trong setTimeout (async)");
        resolve("Hoane");
    }, 2000);
    console.log("2. Executor kết thúc (sync)");
});

console.log("Promise hiện tại:", myPromise); // Promise {<pending>}

myPromise.then(data => {
    console.log("4. .then nhận data:", data);
    console.log("Promise sau khi resolve:", myPromise); // Promise {<fulfilled>}
});

console.log("Code sync kết thúc");
// Output: 1, 2, Promise{pending}, Code sync kết thúc, (2s) 3, 4, Promise{fulfilled}

/* ============ DEMO 4: Microtask vs Macrotask ============ */
console.log("\n--- DEMO 4: Promise vs setTimeout ---");
console.log("X");
setTimeout(() => console.log("Y - setTimeout"), 0);       // macrotask
Promise.resolve().then(() => console.log("Z - Promise")); // microtask
console.log("W");
// Output: X, W, Z, Y (vì microtask ưu tiên hơn macrotask)