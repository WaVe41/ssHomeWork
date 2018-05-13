abstract class Employee {
    name: string;
    secondName: string;
    salary: number;
    protected experience: number;
    protected manager: Manager;
    protected constructor(name: string, secondName: string, experience: number) {
        this.name = name;
        this.secondName = secondName;
        this.experience = experience;
    }
    abstract giveSalary(salary: number): void;

    public toString():string {
        if (this instanceof Manager) return `Manager ${this.name} ${this.secondName}, experience:${this.experience}`;
        return `${this.name} ${this.secondName}, manager: ${this.manager.name} ${this.manager.secondName}, experience: ${this.experience}`
    }
}

class Developer extends Employee {
    constructor(name:string, secondName:string, experience:number, manager:Manager) {
        super(name, secondName, experience);
        this.manager = manager;
    }

    public giveSalary(salary: number): void {
        this.salary = salary;
        if (this.experience > 2 && this.experience <= 5) this.salary += 200;
        else if (this.experience > 5)  this.salary = this.salary * 1.2 + 500;
    }
}

class Designer extends Employee{
    protected effectivnessCoefficient:number;
    constructor(name: string, secondName: string,  experience: number, manager: Manager, effectivnessCoef:number) {
        super(name, secondName,  experience);
        this.manager = manager;
        this.effectivnessCoefficient = effectivnessCoef;
    }
    public giveSalary(salary: number): void {
        this.salary = salary;
        this.salary *= this.effectivnessCoefficient;
    }
}

class Manager extends Employee {
    public team:(Developer|Designer)[] = [];
    constructor(name: string, secondName: string,  experience: number) {
        super(name, secondName,  experience);
    }
    public giveSalary(salary: number): void {
        this.salary = salary;
        let devs:Developer[] = this.team.filter(val =>  val instanceof Developer);
        if (2 * devs.length > this.team.length) this.salary *= 1.1;
        if (this.team.length > 5 && this.team.length <= 10) this.salary += 200;
        else if (this.team.length > 10) this.salary += 300;
    }

    public addToTeam(ent:(Developer|Designer)):void {
        this.team.push(ent);
    }

}

class Departament {
    private listOfManagers:Manager[] = [];
    public giveSalary(name:string, secondName:string):void {
        let emp: (Developer | Designer | Manager);
        this.listOfManagers.forEach(val => {
            if (val.name === name && val.secondName == secondName) {
                emp = val;
            }
            else {
                emp = val.team.filter(e => e.name === name && e.secondName === secondName)[0];
            }
        });
        console.log(`${emp.name}, ${emp.secondName}: got salary: ${emp.salary} `);

    }
    public addManager(manager:Manager):void {
        this.listOfManagers.push(manager);
    }
}

let dep : Departament = new Departament();
let man : Manager = new Manager("Scott", "Siver", 3);
dep.addManager(man);
let dev1 : Developer = new Developer("Ann", "Air", 10, man);
let dev2: Developer = new Developer("Tom", "Cruew",  2, man);
let des1: Designer = new Designer("Liza", "Drow",  7, man, 0.9);
//let des2: Designer = new Designer('Lara', "Nite", 5, man, 0.8);
man.addToTeam(dev1);
man.addToTeam(dev2);
man.addToTeam(des1);
//man.addToTeam(des2);
dev1.giveSalary(500);
dev2.giveSalary(500);
des1.giveSalary(400);
//des2.giveSalary(400);
man.giveSalary(600);
dep.giveSalary("Ann", "Air");
dep.giveSalary("Liza", "Drow");
dep.giveSalary("Tom", "Cruew");
dep.giveSalary("Scott", "Siver");
//dep.giveSalary("Lara", "Nite");
console.log('' + dev1);
console.log('' + man);
//console.log(dev1);
//console.log(dev2);
//console.log(des1);