//bai 2
// Tạo class Product (name, price, description, quantity), có các methods:
// a. getDiscountedPrice(percent) – tính giá sau giảm X%

class Product {
  constructor(name, price, description, quantity) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }

  getDiscountedPrice(percent) {
    return this.price * (percent / 100);
  }

  // b. updateQuantity(amount) – tăng/giảm số lượng sản phẩm
  updateQuantity(amount) {
    return (this.quantity = this.quantity + amount);
  }

  // c. isInStock() – kiểm tra còn hàng hay không
  isInStock() {
    if (this.quantity > 0) {
      return true;
    } else {
      return false;
    }
  }
  // d. getInfo() – thông tin chi tiết sản phẩm
  getInfo() {
    return `name is ${this.name}, price is ${this.price}, description is ${this.description}, amount is ${this.quantity}`;
  }

  // e. totalValue() – tổng giá trị tồn kho: price × quantity
  totalValue() {
    return this.price * this.quantity;
  }
}

let newProd = new Product("phone", 12, "phoney", 34);
// console.log(newProd);

// console.log(newProd.getDiscountedPrice(50));

// console.log(newProd.updateQuantity(2));

// console.log(newPro.totalValue())

// console.log(newProd.quantity)

// console.log(newProd.isInStock())

// console.log(newProd.getInfo())

//bai 3
// Tạo class Cart để lưu lại sản phẩm và số lượng người dùng đã chọn
// Methods cần có:




class Cart {
  static BoughtProduct = class BoughtProduct {
  constructor(qty, productBought) {
    this.qty = qty;
    this.productBought = productBought;
  }
  updateBoughtQuantity(amount){
    return this.qty=this.qty+amount
  }
  getInfo(){
    return this.productBought
  }
  getPrice(){
    return this.productBought.price
  }
};

  constructor(quant, product) {
    let bought = new Cart.BoughtProduct(quant, product)
    this.products = [bought];
  }
  // a. addProduct(product, qty) – thêm sản phẩm vào giỏ
  addProduct(quant, product){
    this.products.push(new Cart.BoughtProduct(quant, product));
    return null
  }
  // b. removeProduct(productName) – xóa sản phẩm theo tên
  removeProductByName(productDelete){
    let prodToDelete = productDelete.trim()
    this.products = this.products.filter((product)=> !product.productBought.name.match(prodToDelete))
    return null
  }
  // c. updateProductQuantity(productName, qty) – cập nhật số lượng mua
  updateProductQuantity(productName, amount) {
    this.products.forEach((product)=> {
      if(product.productBought.name.match(productName)){
        product.updateBoughtQuantity(amount)
      }
    })
  }
  // d. getTotal() – tổng tiền
  getTotal(){
    let result = 0
        this.products.forEach((product)=> {
        result = result + product.getPrice()
    })
    return result
  }
  // e. getCartInfo() – trả về danh sách giỏ hàng
    getCartInfo(){
    let result = []
        this.products.forEach((product)=> {
        result.push(product.getInfo())
    })
    return result
  }
}


let shoppingCart = new Cart(2, newProd);

console.log("init",shoppingCart)

let newProd2 = new Product("something else", 212, "phondfsfdsey", 34)

shoppingCart.addProduct(5, newProd2) 


shoppingCart.updateProductQuantity("something else", 2)
console.log("after updating quantity",shoppingCart)


console.log("total is",shoppingCart.getTotal())

console.log("cart info is ", shoppingCart.getCartInfo())


shoppingCart.removeProductByName("something else")

console.log("after removing",shoppingCart)














