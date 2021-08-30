const Manager = require('../lib/Manager.js');

test('create manager object', () => {
    const manager = new Manager('Ashley Busnuk', '021', 'ashley@email.com', 'Z6');
    
    expect(manager.name).toBe('Ashley Busnuk');
    expect(manager.id).toBe('021');
    expect(manager.email).toBe('ashley@email.com');
    expect(manager.office).toBe('Z6');
});

test("gets employee's position", () => {
    const manager = new Manager('Ashley Busnuk', '021', 'ashley@email.com', 'Z6');

    expect(manager.getPosition()).toEqual(expect.stringContaining('Manager'));
});