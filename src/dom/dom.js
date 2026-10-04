console.log("DOM - Document object model");

// Lấy phần tử có id cụ thể
// Trả về duy nhất 1 phần tử (hoặc null nếu không tìm thấy)
const element = document.getElementById("username");
console.log(element);

//Dùng để tìm phần tử đầu tiên khớp với CSS selector(id, class, tag,...)
const blog = document.querySelector(".blog");
console.log(blog);

// Dùng để lấy tất cả phần tử khớp với selector, trả về NodeList (giống mảng)
const blogs = document.querySelectorAll(".blog");
console.log(blogs);
