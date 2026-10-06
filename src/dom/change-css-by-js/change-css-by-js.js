console.log("Change CSS by JS");

const textChange = document.getElementById("textChange");
const btnYellow = document.getElementById("btnYellow");
const btnViolet = document.getElementById("btnViolet");

console.log(textChange, btnYellow, btnViolet);

// Nút Vàng → dùng class style1 (Hoàng Kim)
btnYellow.addEventListener("click", () => {
    console.log("click vàng");
    // Reset inline style cũ (nếu có)
    textChange.style.color = "";
    textChange.style.background = "";

    // Đổi class
    textChange.classList.remove("style2");
    textChange.classList.add("style1");
});

// Nút Tím → dùng class style2 (Tím Huyền Bí)
btnViolet.addEventListener("click", () => {
    console.log("click tím");
    textChange.style.color = "";
    textChange.style.background = "";

    textChange.classList.remove("style1");
    textChange.classList.add("style2");
});