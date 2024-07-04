
class Person {
    constructor(firstName, lastName, salary) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    };


    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    };
};

class Student extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);
    };

    writeInfo() {
        super.writeInfo();
    }

};

class Enginer extends Person {

    constructor(firstName, lastName, salary) {
        super(lastName, firstName, salary);
    }

    writeInfo() {
        super.writeInfo();
    }
}

const person1 = new Person("Rasul", "jangirli", 30000);
person1.writeInfo();

const student1 = new Student("Arzu", "Ceferli", 20000);
student1.writeInfo();

const enginer1 = new Enginer("Mark", "Mask", 10000);
enginer1.writeInfo();

