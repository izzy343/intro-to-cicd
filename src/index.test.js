const sayHi = require('./index.js')
const sayBye = require('./index.js')

test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})

test("Says 'Bye Mike' when 'Mike' is passed", () => {
   expect(sayBye('Mike')).toBe('Bye Mike')
})