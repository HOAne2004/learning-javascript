console.log("Here is console.log");

var name = 'hoandz';
console.log(name)
const name1 = 'hoandz1';

let age = 20;
age = 30
console.log(age)

// Không thể gán giá trị cho hằng số
//const myAge = 30
//myAge = 35 // báo lỗi
//console.log(myAge)

//Phạm vi sử dụng
function run(){
    var x = 10;
    let y =12;
    const z = 15;
    console.log("day la log trong Function:", x, y, z)
    {
        var xx= 100;
        let yy = 120;
        const zz = 150;
        console.log("day la log trong {} cua Function:", xx, yy, zz)
    }
    console.log("Két quả của var khi ra ngoài {}:")
    console.log(xx);
    console.log("Kết quả của let khi ra ngoài {}: ")
    console.log(yy); // báo lỗi yy not defined
    console.log("Kết quả của const khi ra ngoài {}");
    console.log(zz); // báo lỗi zz not defined
}
run()
// ưu tiên dùng let và const sẽ an toàn hơn