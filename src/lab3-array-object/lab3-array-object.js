console.log("Lap 3: Array + Object");

const product1 = {
    name: "Áo dài tay",
    price: 200,
    inStock: true
};
const product2 = {
    name: "Áo ba lỗ",
    price: 50,
    inStock: false
};
const product3 = {
    name: "Áo cộc tay cổ lọ",
    price: 400,
    inStock: true
};
const product4 = {
    name: "Áo sơ mi",
    price: 100,
    inStock: true
};
const product5 = {
    name: "Áo khoác",
    price: 200,
    inStock: false
};

const products = [product1, product2, product3, product4, product5];

// 1. In tên sản phẩm đầu tiên
console.log(">>> Tên sản phẩm đầu tiên: ", products[0].name);

// 2. Thay đổi giá sản phẩm thứ 2 và in ra danh sách sản phẩm.
console.log(">>> Giá sản phẩm 2 ban đầu: ", products[1].price);
products[1].price = 1000;
console.log(">>> Giá sản phẩm 2 sau khi sửa: ", products[1].price);

products.forEach(element => {
    console.log("Sản phẩm:", element);
});

/// 3. Thêm 1 sản phẩm mới vào cuối mảng và in danh sách.
const product6 = {
    name: "Áo cổ tim",
    price: 120,
    inStock: true
};
products.push(product6);
products.forEach(element => {
    console.log("Sản phẩm:", element);
});

// 4, Xóa sản phẩm cuối và in danh sách
products.pop();
products.forEach(element => {
    console.log("Sản phẩm:", element);
});

// 5. Dùng forEach() để in tất cả tên sản phẩm
products.forEach(element => {
    console.log("Tên sản phẩm: ", element.name);
})

// 6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm
const priceArray = products.map((value, index) => {
    return value.price;
});
console.log("Danh sách giá sản phẩm", priceArray);

// 7. Dùng filter() để lấy các sản phẩm còn hàng
const isStockProduct = products.filter((value, index) => {
    return value.inStock === true;
})
console.log("Sản phẩm còn hàng: ", isStockProduct);

// 8. Dùng for .. in để duyệt qua thuộc tính của sản phẩm đầu tiên.
for(let element in products[0]){
    console.log( element, products[0][element])
}