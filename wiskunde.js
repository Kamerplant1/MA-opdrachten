function langzijdedriehoek(a,b){
    let aKwadraat = Math.pow(a,2);
    let bKwadraat = Math.pow(b,2);
    let cKwadraat = aKwadraat + bKwadraat;
    let wortel = Math.sqrt(cKwadraat);
    return wortel
}console.log(langzijdedriehoek(6,6))

function gemiddelde(num1,num2,num3,num4,num5,num6,num7){
    let som = num1+num2+num3+num4+num5+num6+num7;
    return som / 7;
}console.log(gemiddelde(1,2,3,4,5,6,7))
