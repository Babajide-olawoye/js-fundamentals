//Student class 
class Student {
    
    //Defining constructor for student obj
    constructor(name) {
        this.name = name;
    }

    //Function capitalize the first letter of variable name 
    capitalisedName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}

// Example usage:
let student = new Student("asia");
console.log(student.capitalisedName()); // Outputs: "Asia"
