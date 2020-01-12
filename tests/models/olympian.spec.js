var app = require("../../app");
const Olympian = require("../../models/olympian");

describe("Olympian model", ()=> {
  
  it('exists', ()=> {
    var athlete = new Olympian({name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'});
    expect(athlete).toBeInstanceOf(Olympian);
  })

  it("attributes", ()=> {
    var athlete = new Olympian({name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'});

    expect(athlete.name).toBe('Tathan Nhomas');
    expect(athlete.sex).toBe('M');
    expect(athlete.age).toBe(33);
    expect(athlete.height).toBe(180);
    expect(athlete.weight).toBe(145);
    expect(athlete.sport).toBe('climbing');
    expect(athlete.team).toBe('Colorado');
  })
})
