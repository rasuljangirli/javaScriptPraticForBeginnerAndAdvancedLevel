let product1 = { 
    productName: "Lenova S340",
    productCategory: "Technology",
    price: "1200"
};

let product2 = {
    productName: "Lenova S40",
    productCategory: "Technology",
    price: "1200"
};

let product3 = {
    productName: "Acer S340",
    productCategory: "Technology",
    price: "1400"
};

let product4 = {
    productName: "Acer 40",
    productCategory: "Technology",
    price: "1200"
};

let product5 = {
    productName: "HP 40",
    productCategory: "Technology",
    price: "1200"
};

let product6 = {
    productName: "HP 0",
    productCategory: "Technology",
    price: "1700"
};

let product7 = {
    productName: "Lenova hfgf ultra",
    productCategory: "Technology",
    price: "2000"
};

let product8 = {
    productName: "Lenova 111",
    productCategory: "Technology",
    price: "1200"
};

let product9 = {
    productName: "Lenova 123",
    productCategory: "Technology",
    price: "1200"
};

let product10 = {
    productName: "Lenova 3232",
    productCategory: "Technology",
    price: "1600"
};

let productList = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

let filteredProductList = [];
let nameProductUser = prompt("Enter a product name");

fillFilteredProductList(productList);
writeFilteredProductList(filteredProductList);

function fillFilteredProductList(productList) {
    productList.forEach(function (product) {
        if (product.productName.toUpperCase().includes(nameProductUser.toUpperCase(), 0)) {
            filteredProductList.push(product);
        }
    });
};

function writeFilteredProductList(productList) {
    productList.forEach(function (product) {
        console.log("-----------------");
        console.log(" | " + product.productName + " | " + product.productCategory + " | " + product.price);
        console.log("-----------------");
    });
}


