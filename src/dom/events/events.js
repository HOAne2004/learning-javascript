console.log("Events");

const element = document.getElementById("btn");
console.log(element);

function handleClick(){
    console.log("CLick!!!");
}

// addEventListener;
const click = document.getElementById("btnClick");
const spText = document.getElementById("spText");

//cách 1: viết function trực tiếp
click.addEventListener("click", function(){
    console.log("Click with addEventListener");
    // truyền vào Text
    //spText.innerText="Thay đổi với innerText";

    // truyền vào HTML
    spText.innerHTML = "<strong>HOAn</strong>, chào bạn!!!"
})

// cách 2: tách function
// const handleClickBtn = () => {
//     console.log("Click with addEventListener");
// }

// click.addEventListener("click", handleClickBtn);
// Không dùng dấu () sau function trong event này
// handleClickBtn() thực thi ngay
// handleClickBtn khi nào gọi thì thực thi

