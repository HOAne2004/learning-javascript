console.log("If Condition");

// 1. if - else - else if
const age = 12

if (age > 18) {
    console.log('Tuổi của bạn là', age, 'Được phép truy cập.');
} else {
    console.log('Tuổi của bạn là', age, 'Chưa đủ tuổi.')
}

// 2.switch case

//score: Gioi, Kha, Trung binh, Yeu
const score = 6;

switch (true) {
    case (score >= 8 && score <= 10): // true - false
        console.log("Gioi");
        break;
    case (score >= 6 && score < 8): 
        console.log("Kha");
        break;
    case (score >= 4 && score < 6):
        console.log("Trung binh");
        break;
    default:
        console.log("Yeu");
}