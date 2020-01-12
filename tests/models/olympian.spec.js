// var app = require("../../app");
// const Olympian = require("../../models/olympian");
//
// describe("Olympian model", ()=> {
//   beforeEach(async () => {
//     await database.raw('TRUNCATE TABLE olympians CASCADE');
//   //
//   //   let olympian1 = await database('olympians')
//   //     .insert({id: 1, name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'})
//   //     .returning(['id', 'name', 'sex', 'age', 'height', 'weight','sport', 'team'])
//   //
//   //   let olympian2 = await database('olympians')
//   //   .insert({id: 1, name:'Tamille Cerry', sex: 'F', age: 32, height: 179, weight: 180, sport: 'skiing', team: 'Colorado'})
//   //   .returning(['id', 'name', 'sex', 'age', 'height', 'weight','sport', 'team'])
//   // });
//   //
//   // afterEach(async () => {
//   //   await database.raw('TRUNCATE TABLE olympians CASCADE');
//   // })
//
//   it('exists', ()=> {
//     var athlete = new Olympian({id: 1, name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'});
//     expect(athlete).toBeInstanceOf(Olympian);
//   })
//
//   it("attributes", ()=> {
//     var athlete = new Olympian({id: 1, name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'});
//
//     expect(athlete.name).toBe('Tathan Nhomas');
//     expect(athlete.sex).toBe('M');
//     expect(athlete.age).toBe(33);
//     expect(athlete.height).toBe(180);
//     expect(athlete.weight).toBe(145);
//     expect(athlete.sport).toBe('climbing');
//     expect(athlete.team).toBe('Colorado');
//   })
// })
