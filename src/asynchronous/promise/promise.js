console.log("%c=== PROMISE DEMO ===", "color:#a18cd1;font-weight:bold;font-size:14px");

/* ============================================================
   1. LẤY DOM
   ============================================================ */
const output = document.getElementById("output");
const btnDemo1 = document.getElementById("btnDemo1");
const btnDemo2 = document.getElementById("btnDemo2");
const btnDemo3 = document.getElementById("btnDemo3");

/**
 * Ghi log vừa ra Console vừa ra UI
 */
function log(message) {
    console.log(message);
    output.textContent += "\n" + message;
}

function clearOutput() {
    output.textContent = "→ Output:";
}

/* ============================================================
   2. DEMO 1 — Promise cơ bản: thấy rõ executor chạy SYNC
   ============================================================ */
function runDemo1() {
    clearOutput();
    log("--- DEMO 1: Promise cơ bản ---");

    log("A. Trước khi tạo Promise");

    const p = new Promise((resolve, reject) => {
        log("B. Executor chạy NGAY (sync)");
        setTimeout(() => {
            log("D. Trong setTimeout (async) → gọi resolve");
            resolve("Hoane");
        }, 2000);
        log("C. Executor kết thúc (sync)");
    });

    log("E. Promise hiện tại: " + p);  // Promise {<pending>}

    p.then(data => {
        log("F. .then chạy: " + data);
        log("G. Promise sau resolve: " + p);  // Promise {<fulfilled>: 'Hoane'}
    });

    log("H. Code sync kết thúc");

    // Output dự kiến:
    // A → B → C → E → H → (2s) D → F → G
}

/* ============================================================
   3. DEMO 2 — resolve vs reject
   ============================================================ */
function runDemo2() {
    clearOutput();
    log("--- DEMO 2: resolve vs reject ---");

    // Promise thành công
    const successP = new Promise((resolve) => {
        setTimeout(() => resolve("✅ Thành công!"), 1000);
    });

    // Promise thất bại
    const failP = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("❌ Có lỗi xảy ra!")), 1500);
    });

    log("Bắt đầu 2 Promise...");

    successP
        .then(data => log("successP → " + data))
        .catch(err => log("successP lỗi: " + err.message));

    failP
        .then(data => log("failP → " + data))
        .catch(err => log("failP lỗi: " + err.message))
        .finally(() => log("finally của failP luôn chạy"));

    log("Code sync kết thúc (Promise đang pending)");
}

/* ============================================================
   4. DEMO 3 — Microtask vs Macrotask
   ============================================================ */
function runDemo3() {
    clearOutput();
    log("--- DEMO 3: Microtask vs Macrotask ---");

    log("1");

    setTimeout(() => log("2 - setTimeout (macrotask)"), 0);

    Promise.resolve().then(() => log("3 - Promise.then (microtask)"));

    Promise.resolve().then(() => log("4 - Promise.then khác"));

    log("5");

    // Output: 1 → 5 → 3 → 4 → 2
    // Giải thích: sync (1, 5) → microtask (3, 4) → macrotask (2)
}

/* ============================================================
   5. GẮN SỰ KIỆN
   ============================================================ */
btnDemo1.addEventListener("click", runDemo1);
btnDemo2.addEventListener("click", runDemo2);
btnDemo3.addEventListener("click", runDemo3);

/* ============================================================
   6. CHẠY DEMO 1 TỰ ĐỘNG KHI TẢI TRANG (để thấy kết quả ngay)
   ============================================================ */
console.log("\n=== AUTO RUN DEMO 1 ===");
runDemo1();