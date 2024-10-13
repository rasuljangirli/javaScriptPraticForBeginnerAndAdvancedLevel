let boy = prompt("Boyunuz");
let kilo = prompt("Çəkiniz");
let vct = kilo / ((boy / 100) ** 2);

if (vct < 18.5) {
    console.log(" İdeal kilonun üzərində " + vct);
} else if (18.5 < vct && vct < 24.9) {
    console.log("İdeal kiloda " + vct);
} else if (25 < vct && vct < 29.9) {
    console.log(" İdeal kilonun üzərində " + vct);
} else if (30 < vct && vct < 39.9) {
    console.log("İdeal kilonun çok üstünde (xəstəlik)");
} else if (40 < vct) {
    console.log(" İdeal kilonun çok üstünde (xəstəlik dərin)");
}

