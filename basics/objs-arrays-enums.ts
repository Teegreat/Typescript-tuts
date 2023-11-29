// objects

// explicit type assignment 
// const person: {
//     name: string, 
//     age: number
// } = {

// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Toyin",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// } 

// enum
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: "Toyin",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
} 


// person.role.push('admin')
// person.role[1] = 10 

// any >> supports any datatype or value
let favoriteActivities: string[]
favoriteActivities =['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}