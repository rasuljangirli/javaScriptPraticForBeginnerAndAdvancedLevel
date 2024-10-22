//? Sadə ədəd tapmağ ( Prime number finding )

//TODO 15 ededini əsas götürərək biz bunu yazağ 
//! DIQQƏT  burada yazılan 15 ədədi sadəcə olarağ ilkin olarağ özümüzü çaşdırmamağ üçündür. yəni aşağıda biz prompt olarağ bizə 15 gəldiyini təsəvvür edərək aşağıdakı for loopunu yazırığ yəni özümüzü çaşdırmamağ üçün bunu edirik. zatən kodu yazıb bitirdikdən sonra bizim kod promptdan gələn dəyər əsasənda nəticə cıxardacaq. yəni qısacası aşağıda yazılan kodu yazanda örnəyin if içində bilirik ki true dəyər olarsa yəni gələn cavab true olarsa result-a false mənimsədiləcək və buna əsasən aşağıda ona uygun cavab çıxacaq. 15 ədədi işin bax burasındadır. başqa ədəddə seçə bilərsiz mən sadəcə 15 deyirəm)). Burada hər yerdə number yerində 15 ədədini təsəvvür edib kodu yazmağ sizi çaşdırmayacaq yəni bunu təsəvvür etmədəndə bir başa yaza bilərsiz sadəcə bu yol başlanğıc üçün məsləhət görülür.

//? Son olarağ isə burada Math.floor() 2-ə böldük və for-un bura qədər dövr etməsini istədik. Bunu onun üçün etdik ki məsələn 15 ədədi üçün for 7ə qədər dönməlidir. yəni 7-dən yuxarıdakə ədədə zatən bölünməyəcək. Əgər bölünmürsə yarısından yuxarıdakı ədədlərə bu zaman for-un əlavə dövr edərək vaxt itirməsini performansı aşağı salmasının qarşısını alırığ. Bu bütün ədədələr üçün geçərlidir məsələn 20000 ədədi üçün biz 10000-ə qədər dövr etməyimiz bəs edir. birdə progrmı yorarağ 10000 ilə 20000 arası ədədləri boş boşuna yoxlamırığ zatən orada işimizə yarayacaq bir şeyin olmayacağını bilirik ))

let number = Number(prompt("Ədəd və ya Rəqəm daxil edin"));
let result = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) {
        result = false;
        break;
    }
}
if (result) {
    alert(number + " Sadə Ədəddir ");
} else {
    alert(number + " Sadə Ədəd deil ");
}