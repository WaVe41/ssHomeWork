"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Employee = Employee;
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
exports.Developer = Developer;
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
exports.Designer = Designer;
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
exports.Manager = Manager;
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
        return emp.name + " " + emp.secondName + ": got salary:" + emp.salary;
    };
    Departament.prototype.addManager = function (manager) {
        this.listOfManagers.push(manager);
    };
    return Departament;
}());
exports.Departament = Departament;
