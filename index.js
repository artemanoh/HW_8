// Завдання 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i += 1){
  string += `${friends[i]},  `;
}
console.log(string);

string = friends.join(",  ");
console.log(string);
// Завдання 2

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);

// Завдання 3

const cardToRemove = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards);

// Завдання 4

const cardToInsert = cards.push("Карточка-6");
console.log(cards);

// Завдання 5

const cardToUpdate = cards.splice(2, 1, "Картка-4");
console.log(cards);