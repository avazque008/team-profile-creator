const Intern = require('../lib/Intern');

const intern = new Intern ('Josh', '1', 'example@gmail.com','UASDC');

test("creates intern's object", () => {
    expect(intern.name).toBe('Josh');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('example@gmail.com');
    expect(intern.school).toBe('UASDC');
});

test("gets intern's name", () => {
    expect(intern.getName()).toBe('Josh');
});

test("gets intern's id", () => {
    expect(intern.getId()).toBe('1');
});

test("gets intern's email", () => {
    expect(intern.getEmail()).toBe('example@gmail.com');
});

test("gets intern's school", () => {
    expect(intern.getSchool()).toBe('UASDC');
});

test("gets intern's role", () => {
    expect(intern.getRole()).toBe('Intern');
});