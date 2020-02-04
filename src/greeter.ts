interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Mary", lastName: "Jane" };
let student = new Student("Cheech", "And", "Chong");

document.body.textContent = greeter(user);
document.body.textContent = greeter(student);
