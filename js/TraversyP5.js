// ==================
// Loops
// ==================

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Dentist appt",
    isCompleted: false,
  },
];

// ==================
// For Loop
// ==================

for (let i = 0; i < 10; i++) {
  //   console.log(`For loop number ${i}`);
}

// ==================
// While Loop
// ==================

let i = 0;

while (i < 10) {
  //   console.log(`While loop number ${i}`);
  i++;
}

// ==================
// Loop through the array
// ==================

// Not the best way to loop through an array
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// This is a better way to loop through an array - Let of
for (let todo of todos) {
  console.log(todo.text);
}

// ==================
// High order array methods
// ==================

// -- For Each
todos.forEach(function (todo) {
  console.log(todo.text);
});

// -- Map
// todos.map(function (todo) {
//   console.log(todo.text);
// });

// This is best case when you want to loop through an array and return an array as well.
const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText); // Returns an array of just the Todo Text

// -- Filter
const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted); // Returns an array of objects with only isCompleted equal to true.

// ==================
// Chain on other array methods
// ==================
const todoChain = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoChain); // Returns an array of objects with only isCOmpleted equal to true AND will onyl display the Text.
