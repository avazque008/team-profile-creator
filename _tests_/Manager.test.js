const Manager = require('../lib/Manager');

const manager = new Manager ('Daisy', '4', 'example@gmail.com', '10');

test("creates manager's object", () => {
    expect(manager.name).toBe('Daisy');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('example@gmail.com');
    expect(manager.officeNumber).toBe('10');
});

test("gets manager's name", () => {
    expect(manager.getName()).toBe('Daisy');
});

test("gets manager's id", () => {
    expect(manager.getId()).toBe('4');
});

test("gets manager's email", () => {
    expect(manager.getEmail()).toBe('example@gmail.com');
});

test("gets manager's role", () => {
    expect(manager.getRole()).toBe('Manager');
});