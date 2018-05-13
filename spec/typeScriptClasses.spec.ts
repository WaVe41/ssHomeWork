import {Departament} from "./typeScriptClasses";
import {Designer} from "./typeScriptClasses";
import {Manager} from "./typeScriptClasses";
import {Developer} from "./typeScriptClasses";

describe("Testing department features", function() {

    let dep : Departament;
    let man : Manager;
    let dev1 : Developer;
    let dev2 : Developer;
    let des1 : Designer;

    beforeEach(function () {
        dep = new Departament();
        man = new Manager("Scott", "Siver", 3);
        dep.addManager(man);
        dev1  = new Developer("Ann", "Air", 10, man);
        dev2 = new Developer("Tom", "Cruew",  3, man);
        des1 = new Designer("Liza", "Drow",  7, man, 0.9);
        man.addToTeam(dev1);
        man.addToTeam(dev2);
        man.addToTeam(des1);
    });

    it("Testing toString function", function () {
        expect(dev1 + '').toContain('Ann Air, manager: Scott Siver');
    });

    it("Testing addManager function", function () {
       let man1 : Manager = new Manager("Sara","Tankrady", 2);
       dep.addManager(man1);
       expect(dep.listOfManagers.length).toEqual(2);
    });

    it("Testing addManager function", function () {
        let des2 : Designer = new Designer('Akbar', 'Butaev', 3, man, 0.8);
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