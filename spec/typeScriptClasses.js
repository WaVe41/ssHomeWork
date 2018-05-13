var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, secondName, experience) {
        this.name = name;
        this.secondName = secondName;
        this.experience = experience;
    }
    Employee.prototype.toString = function () {
        if (this instanceof Manager)
            return "Manager " + this.name + " " + this.secondName + ", experience:" + this.experience;
        return this.name + " " + this.secondName + ", manager: " + this.manager.name + " " + this.manager.secondName + ", experience: " + this.experience;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, secondName, experience, manager) {
        var _this = _super.call(this, name, secondName, experience) || this;
        _this.manager = manager;
        return _this;
    }
    Developer.prototype.giveSalary = function (salary) {
        this.salary = salary;
        if (this.experience > 2 && this.experience <= 5)
            this.salary += 200;
        else if (this.experience > 5)
            this.salary = this.salary * 1.2 + 500;
    };
    return Developer;
}(Employee));
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer(name, secondName, experience, manager, effectivnessCoef) {
        var _this = _super.call(this, name, secondName, experience) || this;
        _this.manager = manager;
        _this.effectivnessCoefficient = effectivnessCoef;
        return _this;
    }
    Designer.prototype.giveSalary = function (salary) {
        this.salary = salary;
        this.salary *= this.effectivnessCoefficient;
    };
    return Designer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, secondName, experience) {
        var _this = _super.call(this, name, secondName, experience) || this;
        _this.team = [];
        return _this;
    }
    Manager.prototype.giveSalary = function (salary) {
        this.salary = salary;
        var devs = this.team.filter(function (val) { return val instanceof Developer; });
        if (2 * devs.length > this.team.length)
            this.salary *= 1.1;
        if (this.team.length > 5 && this.team.length <= 10)
            this.salary += 200;
        else if (this.team.length > 10)
            this.salary += 300;
    };
    Manager.prototype.addToTeam = function (ent) {
        this.team.push(ent);
    };
    return Manager;
}(Employee));
var Departament = /** @class */ (function () {
    function Departament() {
        this.listOfManagers = [];
    }
    Departament.prototype.giveSalary = function (name, secondName) {
        var emp;
        this.listOfManagers.forEach(function (val) {
            if (val.name === name && val.secondName == secondName) {
                emp = val;
            }
            else {
                emp = val.team.filter(function (e) { return e.name === name && e.secondName === secondName; })[0];
            }
        });
        console.log(emp.name + ", " + emp.secondName + ": got salary: " + emp.salary + " ");
    };
    Departament.prototype.addManager = function (manager) {
        this.listOfManagers.push(manager);
    };
    return Departament;
}());
var dep = new Departament();
var man = new Manager("Scott", "Siver", 3);
dep.addManager(man);
var dev1 = new Developer("Ann", "Air", 10, man);
var dev2 = new Developer("Tom", "Cruew", 2, man);
var des1 = new Designer("Liza", "Drow", 7, man, 0.9);
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
