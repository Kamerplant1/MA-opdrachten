function kubus(lengte, hoogte, diepte){
    let kubusInhoud = lengte * hoogte * diepte;
    return kubusInhoud;
}
console.log (kubus(4,3,2));

function cilinder(radius, hoogte){
    let kwadraat = Math.pow(radius, 2);
    let cilinderInhoud = Math.PI * kwadraat * hoogte
    return cilinderInhoud;
}
console.log (cilinder(8,20));

function rechtehoek(a, b){
    let aKwadraat = Math.pow(a,2);
    let bKwadraat = Math.pow(b,2);
    let cKwadraat = aKwadraat + bKwadraat;
    let wortel = Math.sqrt(cKwadraat);
    return wortel;
}
console.log (rechtehoek(8,8));

function getallen7(getal1, getal2, getal3, getal4, getal5, getal6, getal7){
    let som = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;
    return som / 7;
}
console.log (getallen7(1,2,3,4,5,6,7))
