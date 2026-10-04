console.log("Events");

const element = document.getElementById("btn");
console.log(element);

function handleClick(){
    console.log("CLick!!!");
}

// addEventListener;
const click = document.getElementById("btnClick");
//cách 1: viết function trực tiếp
// click.addEventListener("click", function(){
//     console.log("Click with addEventListener");
// })

// cách 2: tách function
const handleClickBtn = () => {
    console.log("Click with addEventListener");
}

click.addEventListener("click", handleClickBtn);
// Không dùng dấu () sau function trong event này
// handleClickBtn() thực thi ngay
// handleClickBtn khi nào gọi thì thực thi
