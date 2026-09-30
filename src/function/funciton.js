// 1. Function
console.log("Function");

function greeting() {
    console.log("Xin chào");
}

// Nếu chỉ "greeting" => mang ý nghĩa tham chiếu
// Thực thi:
greeting();

function sum(a, b) {
    return a + b;
}
// function trong js không check kiểu data type
console.log(sum(6, 9));
console.log(sum("Anh trai HOAne ", "Say hi"));
//Tham số (parameters): a, b
// Đối số (arguments): 6, 9 


// 2. Arrow Function
console.log("Arrow Function");

//unknown function
(a, b) => {
    return a + b;
};

// gán 1 tham số cho unknown function.
const sum1 = (a, b) => {
    return a + b;
};

console.log(sum1(10, 7));

// (function (){
//     console.log("HOAe chay ngay di.");
// })();


// 3. keyword return

const sum2 = (a, b, c) => {
    console.log("truoc khi return");
    if(!typeof a !== 'number')
        return; //thoat function neu khong dung, khong tra ra ket qua (undefined)
    return a + b + c;
    console.log("sau khi return");
}

console.log(sum2(1,3,7))