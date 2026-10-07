console.log("Local Storage");

/* ============================================================
   1. LẤY DOM
   ============================================================ */
const ipPhone = document.getElementById("ipPhone");
const ipPassword = document.getElementById("ipPassword");
const btnSubmit = document.getElementById("btnSubmit");
const status = document.getElementById("status");
const phoneHistoryEl = document.getElementById("phoneHistory");
const passwordHistoryEl = document.getElementById("passwordHistory");
const removePhoneHistory = document.getElementById("removePhoneHistory");
const removePasswordHistory = document.getElementById("removePasswordHistory");
const clearHistory = document.getElementById("clearHistory");

/* ============================================================
   2. HẰNG SỐ KEY — tách riêng để tránh nhầm với DOM id
   ============================================================ */
const KEY_PHONE = "historyPhone";
const KEY_PASSWORD = "historyPassword";

/* ============================================================
   3. CÁC HÀM XỬ LÝ LOCAL STORAGE
   ============================================================ */

/**
 * Lấy mảng history từ LS. Nếu chưa có → trả về [].
 * Dùng JSON.parse để convert string → array.
 */
function getHistory(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
        console.warn(`Dữ liệu key "${key}" không phải JSON hợp lệ:`, err);
        return [];
    }
}

/**
 * Thêm 1 giá trị mới vào history (mảng) và lưu lại LS.
 * Dùng JSON.stringify để convert array → string.
 */
function pushHistory(key, value) {
    const history = getHistory(key);
    history.push(value);
    localStorage.setItem(key, JSON.stringify(history));
    return history;
}

/**
 * Xóa 1 key khỏi LS.
 */
function removeKey(key) {
    localStorage.removeItem(key);
}

/**
 * Render 1 mảng ra DOM dưới dạng các badge.
 */
function renderList(el, arr) {
    if (arr.length === 0) {
        el.innerHTML = `<span class="empty">(trống)</span>`;
        return;
    }
    el.innerHTML = arr
        .map(item => `<span class="badge">${item}</span>`)
        .join("");
}

/**
 * Render toàn bộ history ra UI.
 */
function renderHistory() {
    renderList(phoneHistoryEl, getHistory(KEY_PHONE));
    renderList(passwordHistoryEl, getHistory(KEY_PASSWORD));
}

/**
 * Cập nhật trạng thái status.
 */
function setStatus(message, type) {
    status.textContent = `Status: ${message}`;
    status.classList.remove("success", "fail");
    if (type) status.classList.add(type);
}

/* ============================================================
   4. GẮN SỰ KIỆN
   ============================================================ */

// --- Submit ---
btnSubmit.addEventListener("click", () => {
    const phone = ipPhone.value.trim();
    const password = ipPassword.value.trim();

    if (!phone || !password) {
        setStatus("Vui lòng nhập đầy đủ Phone và Password!", "fail");
        return;
    }

    // Lưu vào history (mảng JSON trong LS)
    pushHistory(KEY_PHONE, phone);
    pushHistory(KEY_PASSWORD, password);

    // Kiểm tra điều kiện "đăng nhập"
    if (phone === "0123456789" && password === "12345") {
        setStatus("Success", "success");
        alert("Đăng nhập thành công!");
        window.location.href = "success.html"
    } else {
        setStatus("Fail", "fail");
        alert("Sai tài khoản hoặc mật khẩu.");
    }

    // Cập nhật UI ngay, không cần F5
    renderHistory();

    // Xóa input cho tiện nhập tiếp
    ipPhone.value = "";
    ipPassword.value = "";
    ipPhone.focus();
});

// --- Xóa Phone history ---
removePhoneHistory.addEventListener("click", () => {
    removeKey(KEY_PHONE);
    renderHistory();
    console.log(`Đã xóa key "${KEY_PHONE}" trong Local Storage.`);
});

// --- Xóa Password history ---
removePasswordHistory.addEventListener("click", () => {
    removeKey(KEY_PASSWORD);
    renderHistory();
    console.log(`Đã xóa key "${KEY_PASSWORD}" trong Local Storage.`);
});

// --- Clear toàn bộ ---
clearHistory.addEventListener("click", () => {
    localStorage.clear();
    renderHistory();
    setStatus("—", null);
    console.log("Đã xóa toàn bộ dữ liệu trong Local Storage.");
});

/* ============================================================
   5. KHỞI TẠO — render lần đầu khi tải trang
   ============================================================ */
renderHistory();