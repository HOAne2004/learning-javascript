console.log("Template Strings")

const name = "Le Huy Hoan";
const age = 23;
const intro1 = "My name is" + name + " \nI'm " + age;

console.log("Cách thông thường: ",intro1)

const intro2 = `My name is ${name} and I'm ${age}. 
I was born in 'Nam Dinh'. `
console.log("Cách dùng backtick (`): ", intro2)