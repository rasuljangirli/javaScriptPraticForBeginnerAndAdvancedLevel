
let sonuc;
let gorevListesi = [
  { id: 1, gorevAdi: "Gorev 1" },
  { id: 2, gorevAdi: "Gorev 2" },
  { id: 3, gorevAdi: "Gorev 3" },
  { id: 4, gorevAdi: "Gorev 4" },
];
let ul = document.getElementById("task-list");

for (let gorev of gorevListesi) {
  let li = `
    <li class="task list-group-item">
        <div class="form-check">
            <input type="checkbox" id="${gorev.id}" 
            class="form-check-input" />
            <label for="${gorev.id}" 
            class="form-check-label">${gorev.gorevAdi}<label> 
        </div>
    </li>    
`;
  ul.insertAdjacentHTML("beforeend", li);
}

//! updateing-elements dersine aid olanlar buradan asaqidakilardir. yuxaridakilar sadece asaqidakilari tetbiq ede bilmek ucun qeyd edilmisdir.

/*
/// document.querySelector("#task-list").parentElement.remove(); //TODO burada istifade etdiyimiz .remove() elementi ile biz secdiyimiz elemani silmis oluruq ve html sehivesinde hemen eleman tag gorsenmir.
/// document.querySelector("#task-list").children[0].remove(); //TODO burada bir ferqli formada .remove()-ni istifade etdik. yani butun hammisin deil elelemtin sadece 0-ci indexde duran elemanini silmis olduq.
/// document.querySelector("#task-list").children[1].remove(); //TODO burada bir ferqli formada .remove()-ni istifade etdik. yani butun hammisin deil elelemtin sadece 1-ci indexde duran elemanini silmis olduq.
*/

// document.querySelector("#task-list").removeAttribute("class"); //TODO burada ise biz Attribute silmis olduq bunu ise .removeAttribute(""); ile etmis olduq. secilen elementin hansi attributunu silmek istediyimizi ise burda oldugu kimi " " icerisidne yaziriq. id olsun class type v.s
// document.querySelector("#task-list").removeAttribute("id"); //TODO burada meselen id atributunu silmis olduq.

// asaqida
// document.querySelector("#task-list").children[0].removeAttribute("class"); //TODO burada biz removeAttribute(""); ile her hansi secilen elementin elemanin attributunu deyisdire bilirik. bu attribut hem class hem id  hem type ola biler.
// document.querySelector("#task-list").children[1].removeAttribute("class"); //TODO burada biz removeAttribute(""); ile her hansi secilen elementin elemanin attributunu deyisdire bilirik. bu attribut hem class hem id  hem type ola biler.
// sonuc = document.querySelector("#task-list").children[1].getAttribute("class"); //TODO her hansi attributun icerisinde ne varsa onu consolda yazdirmaq ucun istifade edilir getAttribute(""); burada mesele nbiz class icerisinde olanlari yazdirmis olduq
// sonuc = document.querySelector("#task-list").children[1].setAttribute("class","aaa"); //TODO burada ise setAttribute(""); ile biz movcud attributu silerek yerine ne yazilmasini isteyirik. meselen burada class bilgisi ne idise o silinecek yerine aaa yazilmis olacaq.
// sonuc = document.querySelector("#task-list").children[1].classList; //TODO onceki derslerden bilirik ki .classList; elementin class bilgisi nedirse onu consola yazmis olur.
document.querySelector("#task-list").children[1].classList.add("bg-danger"); //TODO  burada ise .add("");  ile biz movcud classi yerinde saxlayaraq hemen class icerisine elave bir classda yazmis olduq. yani attributun iceriyini silmeden ora elaveler etmek ucun istifade edilir.
// document.querySelector("#task-list").children[1].classList.remove("bg-danger"); //TODO burada ise elave edilen bilgini biz remove(""); ile silmis olduq.
sonuc = document
  .querySelector("#task-list")
  .children[1].classList.contains("bg-danger"); //TODO .contains(""); ise her hansi bir yazinin mueyyen yerde olub olmamasini yoxlayir. yani bize ya true yada false deyer geri dondurur. burada meselen classList icerisinde bg-danger classinin olub olmamasini yoxlayiriq. bize ise true deyer donusdurdu cunki var(elave olaraq qeyd edim ki yuxarida biz bg-danger classini elave etdik .add(""); metodu ile ona gore true cixir consolda eger onu yorum setri etmis olsaq bu zaman false yazisi consolde yazilacaq)

console.log(sonuc);
