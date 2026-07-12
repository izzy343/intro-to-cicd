const sayHi = require('./index.js')
test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})

const sayBye = require('./index.js')
test("Says 'Bye Mike' when 'Mike' is passed", () => {
   expect(sayBye('Mike')).toBe('Bye Mike')
})