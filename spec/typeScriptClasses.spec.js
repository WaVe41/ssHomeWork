"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeScriptClasses_1 = require("./typeScriptClasses");
var typeScriptClasses_2 = require("./typeScriptClasses");
var typeScriptClasses_3 = require("./typeScriptClasses");
var typeScriptClasses_4 = require("./typeScriptClasses");
describe("Testing department features", function () {
    var dep;
    var man;
    var dev1;
    var dev2;
    var des1;
    beforeEach(function () {
        dep = new typeScriptClasses_1.Departament();
        man = new typeScriptClasses_3.Manager("Scott", "Siver", 3);
        dep.addManager(man);
        dev1 = new typeScriptClasses_4.Developer("Ann", "Air", 10, man);
        dev2 = new typeScriptClasses_4.Developer("Tom", "Cruew", 3, man);
        des1 = new typeScriptClasses_2.Designer("Liza", "Drow", 7, man, 0.9);
        man.addToTeam(dev1);
        man.addToTeam(dev2);
        man.addToTeam(des1);
    });
    it("Testing toString function", function () {
        expect(dev1 + '').toContain('Ann Air, manager: Scott Siver');
    });
    it("Testing addManager function", function () {
        var man1 = new typeScriptClasses_3.Manager("Sara", "Tankrady", 2);
        dep.addManager(man1);
        expect(dep.listOfManagers.length).toEqual(2);
    });
    it("Testing addManager function", function () {
        var des2 = new typeScriptClasses_2.Designer('Akbar', 'Butaev', 3, man, 0.8);
        man.addToTeam(des2);
        expect(man.team[man.team.length - 1] + '').toContain("Akbar Butaev");
    });
    it("Testing giveSalary function for Developer", function () {
        dev1.giveSalary(500);
        expect(dev1.salary).toEqual(1100); // exp > 5 base = base * 1.2 + 500
    });
    it("Testing giveSalary function for Designer", function () {
        des1.giveSalary(400);
        expect(des1.salary).toEqual(360); // -10% coeff = 0.9
    });
    it("Testing giveSalary function for Manager", function () {
        man.giveSalary(500);
        expect(man.salary).toEqual(550); // +10% devs > des
    });
    it("Testing giveSalary function for Departament", function () {
        // it should returns the string with calculated salary for any employee;
        dev2.giveSalary(500);
        expect(dep.giveSalary('Tom', 'Cruew').indexOf('Tom Cruew') >= 0 &&
            dep.giveSalary('Tom', 'Cruew').indexOf('700') >= 0).toBeTruthy();
    });
});
