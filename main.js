//Snack 1
//1-Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.         //FATTO
const bicycles = [
    {
        bike_name: "scott",
        bike_weight: 10
    },

    {
        bike_name: "ktm",
        bike_weight: 20
    },

    {
        bike_name: "ducati",
        bike_weight: 30
    },
]

//2-Stampare a schermo la bici con peso minore.
bike_light_weight = []
name_bike_light_weight = []

if (bicycles[0]["bike_weight"] < bicycles[1]["bike_weight"] && bicycles[0]["bike_weight"] < bicycles[2]["bike_weight"]){
    bike_light_weight.push((bicycles[0]["bike_weight"]));
    name_bike_light_weight.push((bicycles[0]["bike_name"]));
} else if (bicycles[1]["bike_weight"] < bicycles[0]["bike_weight"] && bicycles[1]["bike_weight"] < bicycles[2]["bike_weight"]) {
    bike_light_weight.push((bicycles[1]["bike_weight"]));
    name_bike_light_weight.push((bicycles[1]["bike_name"]));
} else {
    bike_light_weight.push((bicycles[2]["bike_weight"]));
    name_bike_light_weight.push((bicycles[2]["bike_name"]));
}

console.log(bike_light_weight);
console.log(name_bike_light_weight);

const bike = document.getElementById("bike");
bike.innerHTML = `La bici più leggera è del marchio ${name_bike_light_weight} e pesa ${bike_light_weight} kg`

/* il metodo scelto è il peggiore perche se ci fossero 100 bici, è infattibile */















//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
