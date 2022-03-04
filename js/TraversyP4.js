// ==================
// Arrays and Objects
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

console.log(todos);
console.log(todos[1].text); // Output: Meeting with boss

// ==================
// Convert to JSON
// ==================

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
