// window.addEventListener("load", function() {
//     console.log("Az oldal betöltődött.")
// })

// var myFirstString = 'Ez egy string.';
// var mySecondString = "Ez is egy string."
// var myThirdString = `
// Ez 
// pedig 
// egy 
// többsoros 
// string
// .
// `;

// var myFirstNumber = 0;
// var mySecondNumber = 15;
// var myThirdNumber = 6518000;

// var myFirstBoolean = true;
// var mySecondBoolean = false;

// var myFirstArray = ["1984", "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo sapiens"];

// var mySecondArray = [1984, "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo sapiens"];

// var myFirstObject = {
//     title: "Mester és Margarita",
//     year: 1966,
//     author: "Mikhail Bulgakov",
//     translations: ["hu", "en", "de", "fr"]
// };

// console.log(myFirstArray[0]);
// console.log(myFirstObject.title);
// console.log(myFirstObject["title"]);

// var a = 1;
// var b = 2;
// var c = a + b;
// console.log(c);

// function add(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// add(1, 2);

// add(17948, 679);

// function extraction(firstNr, secNr) {
//     if (firstNr >= secNr) {
//         console.log(firstNr - secNr);
//     } else {
//         console.log(secNr - firstNr);
//     }
// }

// extraction(5, 7);

// extraction(8, 7);

// extraction(8, 8);

// function ifElseCheck(text) {
//     if (text === "Hello") {
//         console.log("A text az volt, hogy Hello.");
//     } else if (text === "Hello") {
//         console.log("Második if else ág.")
//     }

//     if (text === "Hello") {
//         console.log("Ez egy másik if vizsgálat.");
//     }
// }

// ifElseCheck("Hello");

// function compare(a, b) {
//     console.log("== ", a == b);
//     console.log("=== ", a === b);
//     var c = b + a;
//     console.log(typeof c);
//     console.log(c);
// }

// compare("1984", 1984);

// compare("Nyitva", "tartás");

// compare(7, 7);

// compare(myFirstArray[0], mySecondArray[0]);

// var myFirstFunctionVariable = function () {
//     console.log("Ez egy fgv, amit egy változóban tároltunk el.")
// }

// myFirstFunctionVariable();

// (function (text) {
//     console.log("Ezt a fgv-t azonnal meghívtuk, amikor leírtuk.")
//     console.log(text)
// }("Hello Uram"));

// var mySecondFunctionVariable = function () {
//     console.log("Ez vajon mikor fut le?");
// }

// var anotherVar = mySecondFunctionVariable;

// anotherVar();

// var theLastFunction = function (text) {
//     console.log(typeof text);
//     console.log(text);
//     console.log(text());
// }

// theLastFunction(function () {
//     return "I'm calling the last function."
// })

// /*
// var window = {
//     addEventListener: function (eventName, eventFunction) {

//     }
// }
// */

window.addEventListener("load", function() {
    console.log("Az oldal betöltődött.")
})

// IFFE - azonnal meghívot fgv

console.log(myFirstGlobalVar); // nem azt írja, hogy nem létezik, mert felülre rendezi változókat, undefined lesz, mert értéket viszont még nem kapott tőlünk
var myFirstGlobalVar = 0;

// console.log(mySecondGlobalVar);
let mySecondGlobalVar = 1; // let esetén hibát dob ha előbb a console.log, mint létrehozás. A let-et is felülre rendezi, viszont nem inicializálja (de létezik), ezért hibát dob.

// console.log(myThirdGlobalVar);
const myThirdGlobalVar = 2; // ua, mint let-nél

(function() {

    (function() {
        (function() {
            var a = 3;
            // console.log(myFirstGlobalVar);
            // console.log(mySecondGlobalVar);
            // console.log(myThirdGlobalVar);
            console.log(a);
        }())
        // console.log(a);
        // undefined a errort ad. Kifelé lát a fgv, befelé nem. A functionból nincs kiszabadulási lehetőség.
    }())
}())
console.log(myFirstGlobalVar);
console.log(mySecondGlobalVar);
console.log(myThirdGlobalVar);

var a = 6;

function f1() {
    var a = "undefined"; 
    console.log(a);  // undefined a-t ad... mielőtt js feldolgozza, változókat felrendezi felülre, var a-t function 1. sorába hozza, létrehozza, "undefined" értéket ad neki. 1el feljebb sor lesz.
    a = 4;
    console.log(a);
    // console.log(myFirstGlobalVar);
    // console.log(mySecondGlobalVar);
    // console.log(myThirdGlobalVar);
}
f1();

function f2() {
    console.log(a);
    var a = 5;
    console.log(a);
    // console.log(myFirstGlobalVar);
    // console.log(mySecondGlobalVar);
    // console.log(myThirdGlobalVar);
}
f2();

console.log(a);

function f3() {
    console.log(b);
    var b;
    console.log(b);
    b = 7;
    console.log(b);
}
f3();

function f4() {
    // console.log(b);
    let b;
    console.log(b);
    b = 7;
    console.log(b);
}
f4();

function f5() {
    // console.log(b);
    const b = 7;
    console.log(b);
    // b = 7;
    // console.log(b);
}
f5();

function f6() {
    let c = "";
    console.log(c);
    console.log(typeof c);
    console.log("valami" + c);
    if (true) {
        let d = 9;
        const e = 10;
        console.log(d, e);
    }
}
f6();

function f7() {
    // console.log(i);
    let ls = ["a", "b", "c", "d", "e", "f", true];
    console.log(ls[0]);
    console.log(ls[4]);

    for (let i = 0; i < ls.length; i++) {
        const item = ls[i];
        console.log(item);
    }
    // console.log(i);

    for (const item of ls) {
        console.log(item);
    } // a 2 for ciklus ugyanazt adja, de for of áttekinthetőbb

    for (const key in ls) {
        console.log(key); // a key gyakorlatilag az index lesz
        const item = ls[key];
        console.log(item);
    }
    f8(ls);
}
f7();

function f8(arrayFromParam) {
    let abc = "";
    for (const item of arrayFromParam) {
        if (item !== true) {
            abc += item;
        }
    }
    console.log(abc);
    return abc; // a fgv így a return típusával lesz egyenlő
}

// const f9 = (text) => {
//     return `<div>${text}</div>`;
// }

// console.log(f9("hello")); // így ellenőrizzük, hogy var/const/let... ha a f9 = ... arrow alá mozgatom, működik... vagyis vagy const, vagy let

const f9 = text => `<div>${text}</div>`; // Ha 1 sor az arrowfunction, automatikusan return-el, ha csak 1 paramétert adok át, nem kell zárójel text köré. Ha kiszedjük const-ot, var-t ad neki automatikusan.
console.log(f9("hello"));

window.addEventListener("load", function () {
    let f8Result = f8(["10", "17", "38", "11"]);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f8Result);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f9("tuesday"));
})