//window.console.log("loglama")
// console.log("Loglama")
// console.warn("Warn log")
// console.error("Error log")

// //Variable
// var global = 44;
// console.log(global);

// var global = 44;
// console.log(global);

// var global = 44;
// console.log(global);

// //ES(2016)
// //let
// let localVariable=23;
// console.log(localVariable);

// localVariable=42;
// console.log(localVariable);

// //const
// const localVariable2 = "Merhaba";
// console.log(localVariable2);

// //Common Rules
// //üşğçö
// let dataVariable44 = 44;
// console.log(dataVariable44);

// let $_dataVariable55 = 55;
// console.log($_dataVariable55)
// //--------------------------------
// // + - * / %
// //x++ ++x
// //x-- --x
// // &&=ve ||=veya  !
// let data10 = "Merhabalar";
// console.log(typeof data10)

// //hoisting
// data11 = 1>2;
// var data11;
// console.log(data11)

//let data12 = prompt("Lütfen kullanıcı adını giriniz: ");
//console.log(data12)

// console.log(Math.min(2,1,-100,500));
// console.log(Math.max(2,1,-100,500));
// console.log(Math.sin(-1));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));
// console.log(Math.floor(2.9));
// console.log(Math.floor(2.9));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.5));

//let data12 = Math.abs(Number(prompt("Lütfen bbir sayı giriniz")));
//let data12 = Number(prompt("Lütfen bbir sayı giriniz"));
//let data13 = Math.floor((Math.random()*data12+1).toFixed(2));
//console.log(data13)

//----------------------------
let data14 = " js ÖğrEniyorum js";
console.log(data14);
console.log(data14.length);
console.log(data14.trim.length);
console.log(data14.startsWith(" "));
console.log(data14.endsWith("s"));
console.log(data14.toLowerCase());
console.log(data14.toUpperCase());

data14 = data14.concat(" -inc");
console.log(data14);

let data = " js ÖğrEniyorum js";
data14 = data14.replace(data14, data);
console.log(data14);

console.log(data14.charAt(1));
console.log(data14.substring(0, 4));

console.log(data14.indexOf("js"));
console.log(data14.lastIndexOf("js"));

/////////////////////////////////////////////////////////////////////
// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase());
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

// Örnek
// 1.YOL normal diziyle yapalım.
// 2.YOL map,filter, forEach ile yapalım.
// rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
// bu sayılardan tek olanları bulalım.          ==> (filter)
// bu tek sayıların sonuna 5 ekleyelim          ==> (map)
// buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
// bu şarta uyan kaç tane sayı vardır ?         ==> (counter)

//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32
//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/////////////////////////////////////////////////////////////////////////////
// Function
//1
function returnsuzParametresiz() {
  console.log("Returnsüz ve parametresiz");
}
returnsuzParametresiz();
//2
function returnsuzParametreli(uname, username) {
  console.log("Returnsüz ve parametreli" + uname + " " + username);
}
returnsuzParametreli("ÖMER", "GÜNDOĞDU");
//3
function returnluParametresiz() {
  return "Selam returnlu parametresiz";
}
let data15 = returnluParametresiz();
console.log(data15);
//4
function returnluParametreli(uname, username) {
  return "Selam returnlu parametreli " + uname + " " + username;
}
let data16 = returnluParametreli("OMER", "GUNDOGDU");
console.log(data16);

// normal Function
function normalFunction() {
  console.log("Normaly funciton");
}
normalFunction();

// anonymous function
const anonymous = function () {
  console.log("anonymous funciton");
};
anonymous();

// arrow function
const arrow = () => {
  console.log("arrow funciton");
};
arrow();

// immedia function (()=>{})()
(()=>{
    console.log("immedia function")
})()

/////////////////////////////////////////////////////////////////////////////

// conditional
/////////////////////////////////////////////////////////////////////////////

// ternary
/////////////////////////////////////////////////////////////////////////////

// switch case
/////////////////////////////////////////////////////////////////////////////

// Loop
/////////////////////////////////////////////////////////////////////////////

// Array
/////////////////////////////////////////////////////////////////////////////

// Object
/////////////////////////////////////////////////////////////////////////////

// DOM
/////////////////////////////////////////////////////////////////////////////

// Event Listener
/////////////////////////////////////////////////////////////////////////////

// Local Storage

//////////////////////////////////////////////////////////////////
// Form örneğine devam
