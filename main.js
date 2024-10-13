//Snack 1
//1-Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.         //FATTO
const bicycles = [
    {
        bike_name: "scott",
        bike_weight: 5
    },

    {
        bike_name: "ktm",
        bike_weight: 20
    },

    {
        bike_name: "ducati",
        bike_weight: 10
    },
]

//2-Stampare a schermo la bici con peso minore.

/* SOLUZIONE SBAGLIATA */
/* bike_light_weight = []
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
bike.innerHTML = `La bici più leggera è del marchio ${name_bike_light_weight} e pesa ${bike_light_weight} kg` */

/* il metodo scelto è il peggiore perche se ci fossero 100 bici, è infattibile */

/* SOLUZIONE CORRETTA */
let bikes_weight = []
for (let i=0; i<bicycles.length; i++){
    bikes_weight.push(bicycles[i]["bike_weight"])
}
console.log(bikes_weight);

let bike_min_weigth = Math.min(...bikes_weight);
console.log(bike_min_weigth);

let bike_min_weight_name = []
for (let i=0; i<bicycles.length; i++){
    if(bicycles[i]["bike_weight"] == bike_min_weigth) {
        bike_min_weight_name.push(bicycles[i]["bike_name"])
        break;
    }
}
/* console.log(bike_min_weight); */
const bike = document.getElementById("bike");
bike.innerHTML = `La bici più leggera è del marchio ${bike_min_weight_name} e pesa ${bike_min_weigth} kg`



//Snack2
//1-Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.         //FATTO
const football_teams = [
    {
        team_name: "inter",
        points_scored: 0,
        fouls_suffered: 0
    },

    {
        team_name: "milan",
        points_scored: 0,
        fouls_suffered: 0
    },

    {
        team_name: "juve",
        points_scored: 0,
        fouls_suffered: 0
    },
]
/* console.log(football_teams); */


//2-Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.         //FATTO
for (let i=0; i<football_teams.length; i++){
    football_teams[i]["points_scored"] = Math.floor(Math.random() * 10);
    football_teams[i]["fouls_suffered"] = Math.floor(Math.random() * 10);
}
console.log(football_teams);

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.           //FATTO
//SOLUZIONE CHE NON FUNZIONA
/* const football_teams2 = []
for (let i=0; i<football_teams.length; i++){
    football_teams2.push(football_teams[i]);
    delete football_teams2[i]["points_scored"];
}
console.log(football_teams2); */
const football_teams2 = [];
for (let i=0; i<football_teams.length; i++){
    const team_info = { 
        team_name: football_teams[i]["team_name"], 
        fouls_suffered: football_teams[i]["fouls_suffered"]
    }; 
    football_teams2.push(team_info);
}
console.log(football_teams2);




//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).          //FATTO
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.           //FATTO


function my_function_num_between (my_numbers_array, a, b) {
    let between_numbers = [];    
    for (let i = 0; i < my_numbers_array.length; i++){
        if (my_numbers_array[i] > a && my_numbers_array[i] < b) {
            between_numbers.push(my_numbers_array[i]);
        }
    }
    console.log(between_numbers);
};
let my_numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = 2;
let b = 8;
my_function_num_between (my_numbers_array, a, b)





