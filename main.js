//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let fav_foods = (person) =>{
    console.log("This person's favorite foods are:\n\n")
    for (let [food, types] of Object.entries(person)){
        console.log(`${food}:`)
        if (Array.isArray(types)){
            for (const type of types){
                console.log(type)
            }
        } else {
            console.log(types)
        }
        console.log('\n')
    }
}

fav_foods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one person's
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    printInfo = () => {
        console.log(`${this.name}'s age is ${this.age}`)
        return 'Deez nuts'
    }
    makeOldReallyFast = () =>{
        this.age++
        return 'Ha, Got Eem'
    }
}

let mike = new Person('Mike','29')
let matt = new Person('Matt', '30')
mike.printInfo()
matt.printInfo()
for (let i = 0; i<3; i++){
    mike.makeOldReallyFast()
}
mike.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongBoy = (str) => {
    return new Promise((resolve,reject)=>{
        if (str.length >10) {
            resolve(str)
        } else {
            reject(str)
        }
    })
}

isLongBoy('We Like To Party')
    .then((result) => {
        console.log('Big Word')
    })
    .catch((reject)=> {
        console.log('Small Number')
    })