/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

// define here the common functions calculateHedgeRow and getMeters

function calculateHedgeRow(plant, distance){
    return plant * distance;

}

function getMeters (distance){
    return distance / 100;
}

let length_cm1_total = 0;
let length_m1_total = 0;
let plants1_total = 0;


function lt01() {

    let p = Number(document.getElementById("plants1").value); 
    let d = Number(document.getElementById("distance1").value);

    let lenght_cm1 = calculateHedgeRow(p, d)
    let length_m = getMeters(lenght_cm1)

    length_cm1_total += lenght_cm1;
    length_m1_total += length_m;
    plants1_total += p;


    document.getElementById("length_cm1").innerHTML = lenght_cm1;
    document.getElementById("length_m1").innerHTML = length_m;

    document.getElementById("length_cm1_total").innerHTML = length_cm1_total
    document.getElementById("length_m1_total").innerHTML = length_m1_total
    document.getElementById("plants1_total").innerHTML = plants1_total




}

let length_cm2_total = 0;
let length_m2_total = 0;
let plants2_total = 0;
let family_total = 4;

function lt02() {
    if (family_total > 0){
        let p = Number(document.getElementById("plants2").value)
        let d = Number(document.getElementById("distance2").value)

        let length_cm2 =calculateHedgeRow(p,d);
        let distance2 = getMeters(length_cm2);

        length_cm2_total += length_cm2;
        length_m2_total += distance2;
        plants2_total += p;

        document.getElementById("length_cm2").innerHTML = length_cm2;
        document.getElementById("length_m2").innerHTML = distance2

        document.getElementById("length_cm2_total").innerHTML = length_cm2_total;
        document.getElementById("length_m2_total").innerHTML = length_m2_total;
        document.getElementById("plants2_total").innerHTML = plants2_total;

        family_total--;
    
    } else {
        document.getElementById("finish").innerHTML = "All data entered."
    }


}

function lt03() {    
    let p = Number(document.getElementById("plants3").value)
    let d = Number(document.getElementById("distance3").value)


    let length_cm3 =calculateHedgeRow(p, d);
    let distance3 = getMeters(length_cm3);


    length_cm2_total = 4 * length_cm3;
    length_m2_total = 4 * distance3;
    plants2_total = 4 * p;


    document.getElementById("length_cm3").innerHTML = length_cm3;
    document.getElementById("length_m3").innerHTML = distance3;

    document.getElementById("length_cm3_total").innerHTML = length_cm2_total;
    document.getElementById("length_m3_total").innerHTML = length_m2_total;
    document.getElementById("plants3_total").innerHTML = plants2_total;

}
