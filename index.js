// 1
// dati primitivi: boolean, string, number, null, undefined, any
// 2
var myName = "Chiara";
var myAge = 27;
var studyingTS = true;
// 3 
var greet = function (name) {
    return "Ciao " + name;
};
// 4 
var sum = function (a, b) {
    return a + b;
};
// 5 
var calculatePrice = function (price, iva) {
    if (iva === void 0) { iva = 0.22; }
    var finalPrice = price + (price * iva);
    return finalPrice;
};
var addIVA = calculatePrice(100);
console.log(addIVA);
// 6
var uniteString = function (stringa1, stringa2) {
    var result = stringa1 + stringa2;
    return result.length;
};
console.log(uniteString("Ciao", "Papera"));
// 7 
// un Type Union è una variabile a cui possiamo assegnare diversi tipi di dato.
var typeUnion = "Chiara";
var typeUnion1 = 27;
// 8 
var variable;
// 10
var numbers = [1, 2, 3];
var numbers1 = [1, 2, 3];
// 11
var tuple = ["a", "b", "c", 1, 2];
var students = [
    { nome: "Chiara", voto: 28 },
    { nome: "Francesca", voto: 30 },
    { nome: "Federico", voto: 25 },
];
// 17 
var myCar = {
    brand: "Fiat",
    model: "Punto",
    year: 2021,
    doors: 5,
    fuel: "Benzina"
};
console.log(myCar);
var responseString = {
    success: true,
    data: "Finale buono :)"
};
console.log(responseString);
