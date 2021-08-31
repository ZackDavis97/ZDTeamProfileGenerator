const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Bill Nye', '123', 'Bill@Nye.com');

    expect(employee.name).toBe('Bill Nye');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('Bill@Nye.com');
});

test("fetches employee name", () => {
    const employee = new Employee('Bill Nye', '123', 'Bill@Nye.com');
    expect(employee.getName()).toEqual(expect.stringContaining('Bill Nye'));
});

test("fetches employee's ID", () => {
    const employee = new Employee('Bill Nye', '123', 'Bill@Nye.com');
    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test("fetches employee's email", () => {
    const employee = new Employee('Bill Nye', '123', 'Bill@Nye.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('Bill@Nye.com'));
});

test("fetches employee's position", () => {
    const employee = new Employee('Bill Nye', '123', 'Bill@Nye.com');
    expect(employee.getPosition()).toEqual(expect.stringContaining('Employee'));
});