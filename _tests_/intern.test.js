const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Zack Davis', '012', 'me@email.com', 'College');
    expect(intern.name).toBe('Zack Davis');
    expect(intern.id).toBe('012');
    expect(intern.email).toBe('me@email.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Zack Davis', '012', 'me@email.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's position", () => {
    const intern = new Intern('Zack Davis', '012', 'me@email.com', 'College');

    expect(intern.getPosition()).toEqual(expect.stringContaining('Intern'));
});