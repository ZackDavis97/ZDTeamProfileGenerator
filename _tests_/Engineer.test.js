const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer ('Spider Parker', '321', 'spider@web.com', 'spidermangit')
    expect(engineer.name).toBe('Spider Parker');
    expect(engineer.id).toBe('321');
    expect(engineer.email).toBe('spider@web.com');
    expect(engineer.github).toBe('spidermangit');
});

test ("Get enineer github", () => {
    const engineer = new Engineer('Spider Parker', '321', 'spider@web.com', 'spidermangit')
    expect(engineer.getGithub()).toEqual(expect.stringContaining('spidermangit'));
});

test("get engineer position", () => {
    const engineer = new Engineer('Spider Parker', '321', 'spider@web.com', 'spidermangit')
    expect(engineer.getPosition()).toEqual(expect.stringContaining('Engineer'));
});