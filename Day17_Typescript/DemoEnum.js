// Step 1: Declaring a Enum Which will work as a type with fix values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Step 2: Using Enum in a function
function move(direction) {
    console.log("Moving: ".concat(Direction[direction]));
}
move(Direction.Left); // Output: Moving: Left
var randomValue;
// Any disables all type checking
// ex: we can use it when we are not sure about the type, during migration or dynamic JSON handling.
randomValue = "Hello";
console.log(randomValue); // hello
randomValue = 42;
randomValue = { key: "value" };
// Tuple implementation
var user;
user = ["Anshika", 22];
console.log("User: ".concat(user[0], ", Age: ").concat(user[1]));
