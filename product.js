// CÂU 1: Constructor Product
// ==========================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;                 // mã sản phẩm
  this.name = name;             // tên sản phẩm
  this.price = price;           // giá sản phẩm
  this.quantity = quantity;     // số lượng tồn kho
  this.category = category;     // danh mục
  this.isAvailable = isAvailable; // trạng thái bán
}

// CÂU 2: Tạo mảng products
let products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phones", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 0, "Phones", true),
  new Product(3, "MacBook Air M2", 32000000, 3, "Laptops", true),
  new Product(4, "Dell XPS 13", 27000000, 2, "Laptops", false),
  new Product(5, "AirPods Pro", 6000000, 10, "Accessories", true),
  new Product(6, "Apple Watch", 12000000, 0, "Accessories", true),
];

console.log("\n===== DANH SÁCH SẢN PHẨM BAN ĐẦU =====");
console.log(products);

// CÂU 3: Chỉ lấy name và price
let namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));

console.log("\n===== CÂU 3: MẢNG CHỈ CÓ name + price =====");
console.log(namePriceList);

// CÂU 4: Lọc sản phẩm còn hàng trong kho (quantity > 0)
let inStockProducts = products.filter((p) => p.quantity > 0);

console.log("\n===== CÂU 4: SẢN PHẨM CÒN HÀNG =====");
console.log(inStockProducts);

// CÂU 5: Kiểm tra có sản phẩm giá trên 30 triệu không?
let hasExpensiveProduct = products.some((p) => p.price > 30000000);

console.log("\n===== CÂU 5: CÓ SẢN PHẨM GIÁ > 30 TRIỆU? =====");
console.log(hasExpensiveProduct);

// CÂU 6: Kiểm tra tất cả sản phẩm Accessories có đang bán không
let allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);

console.log("\n===== CÂU 6: TẤT CẢ Accessories ĐANG BÁN? =====");
console.log(allAccessoriesAvailable);

// CÂU 7: Tính tổng giá trị kho hàng (price * quantity)
let totalStockValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);

console.log("\n===== CÂU 7: TỔNG GIÁ TRỊ KHO =====");
console.log(totalStockValue.toLocaleString() + " VND");

// CÂU 8: Dùng for...of in ra Tên - Danh mục - Trạng thái
console.log("\n===== CÂU 8: DUYỆT for...of =====");

for (let p of products) {
  console.log(
    `${p.name} - ${p.category} - ${
      p.isAvailable ? "Đang bán" : "Ngừng bán"
    }`
  );
}

// CÂU 9: Dùng for...in in ra thuộc tính và giá trị
console.log("\n===== CÂU 9: DUYỆT for...in =====");

for (let p of products) {
  console.log(`\n--- Thông tin sản phẩm: ${p.name} ---`);

  for (let key in p) {
    console.log(`${key}: ${p[key]}`);
  }
}

// CÂU 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
let sellingAndInStockNames = products
  .filter((p) => p.isAvailable === true && p.quantity > 0)
  .map((p) => p.name);

console.log("\n===== CÂU 10: ĐANG BÁN & CÒN HÀNG =====");
console.log(sellingAndInStockNames);