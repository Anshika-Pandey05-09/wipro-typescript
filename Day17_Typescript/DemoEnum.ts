// Step 1: Declaring a Enum Which will work as a type with fix values
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Step 2: Using Enum in a function
function move(direction: Direction) {
  console.log(`Moving: ${Direction[direction]}`);
}

move(Direction.Left); // Output: Moving: Left

let randomValue: any;
// Any disables all type checking
// ex: we can use it when we are not sure about the type, during migration or dynamic JSON handling.

randomValue = "Hello";
console.log(randomValue); // hello

randomValue = 42;

randomValue = { key: "value" };


// Tuple implementation
let user: [string, number];

user = ["Anshika", 22]; 
console.log(`User: ${user[0]}, Age: ${user[1]}`);