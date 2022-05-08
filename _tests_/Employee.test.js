const Employee = require('../lib/Employee');

const employee = new Employee ('Mike', '2', 'example@gmail.com');

test("creates employee's object", () => {
    expect(employee.name).toBe('Mike');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('example@gmail.com');
});

test("gets employee's name", () => {
    expect(employee.getName()).toBe('Mike');
});

test("gets employee's id", () => {
    expect(employee.getId()).toBe('2');
});

test("gets employee's email", () => {
    expect(employee.getEmail()).toBe('example@gmail.com');
});

test("gets employee's role", () => {
    expect(employee.getRole()).toBe('Employee');
});

