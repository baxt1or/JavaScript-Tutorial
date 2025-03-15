let person = {
    "id":1, 
    "name":"Alex Smith",
    sayHello: function(){
        console.log(`${this.name} says Hello`)
    },
    getId:function(){
        console.log(`My id is: ${this.id}`)
    },
    drinkCoffee: function(){
        console.log('I like to drink a coffee while coding!')
    }
}

console.log("Just Simple Object")
person.sayHello()
person.getId()
person.drinkCoffee()
console.log("\n")


const programmer = {
    "id":1, 
    "name":"Baxtiyor Bekmurodov",
    display(){
        console.log(`My name is ${this.name} and my id number is: ${this.id}`)
    }
}

console.log("Just Programmer")
programmer.display()
console.log("\n")

function createNewProgrammer(name, preferedLanguage){
    return {
        name, 
        preferedLanguage, 
        writCode(){
            console.log(`My prefered language: ${preferedLanguage}`)
        },
        drinkCoffee(){
            console.log('I like to drink a coffee wheling coding!')
        }
    }
}

const newProgrammer = createNewProgrammer("Rustam", "C++")

console.log("New Programmer as Factorized")
newProgrammer.writCode()
newProgrammer.drinkCoffee()
console.log("\n")