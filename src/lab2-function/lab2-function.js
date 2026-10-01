console.log("Lab 2 - Function");

// 1. Tạo hàm tính điểm trung bình

function calculateAverage(Math, Literature, English){
    return (Math + Literature + English) / 3;
}

// 2. Tạo hàm xếp loại điểm trung bình
function classifyAverage(average){
    if (average >= 9) return "Xuất sắc";
    else if(average >= 8 && average < 9) return "Giỏi";
    else if (average >= 6.5 && average < 8) return "Khá";
    else return "Trung bình";
}

const average = calculateAverage(8, 7, 9);

console.log("Điểm trung bình: " + average);
console.log( "Xếp loại: ",classifyAverage(average));