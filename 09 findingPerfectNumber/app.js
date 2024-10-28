// 6 28 ededleri mukemmel ədəddir
// 1 2 3 6  ededleri 6 ededini tam bolur və cəmi 6-ya bərabərdir

//todo Mükəmməl ədəd özü xaric bölənlərinin cəminə bərabər olan ədədə deyilir. 

//? Burada function yazdığ və ona parametr verdik. gələn parametr əsasında hesablama edib bizə consol vasitəsi ilə return edəcək
isPerfectNumber(28);

function isPerfectNumber(number) {

    let total = 0;
    for (let i = 2; i <= number / 2; i++) {  //? Burada biz verilən ədədin yarısına qədər bölmə edirik çünki zatən heç bir ədəd özü xaric yarısından böyük ədədə tam bölünmür Bizədə bölən olarağ ədədə özü lazım deil. Bunu edərək əlavə işin qarşısını alırığ. Məsələn 6 ədədi üçün 3-ə və ya 1000 ədədi üçün 500-ə qədər bölmə həyata keçiriləcək. Son olarağ isə i-ni 1-dən başlatdığ çünki 1-i zatən totalda  öncədən vermişiy 18-ci sətrdə.
        if (number % i == 0) {
            total += i;
        }
    }

    total += 1 + number;
    if (number * 2 == total) {
        console.log(" is a perfect number... ")
    } else {
        console.log(" It is not a perfect number.... ")
    }
}