const Engineer = require('../lib/Engineer');

const engineer = new Engineer ('Alex', '3', 'example@gmail.com', 'alexgithub');

test("creates engineer's object", () => {
    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('example@gmail.com');
    expect(engineer.github).toBe('alexgithub')
});

test("gets engineer's name", () => {
    expect(engineer.getName()).toBe('Alex');
});

test("gets engineer's id", () => {
    expect(engineer.getId()).toBe('3');
});

test("gets engineer's email", () => {
    expect(engineer.getEmail()).toBe('example@gmail.com');
});

test("gets engineer's github", () => {
    expect(engineer.getGithub()).toBe('alexgithub');
});

test("gets engineer's role", () => {
    expect(engineer.getRole()).toBe('Engineer');
});


