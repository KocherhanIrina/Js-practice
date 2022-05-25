// Рядок з дужками вважається валідним, якщо на кожну дужку,
// що закриває, є раніше відкрита
// і кожну раніше відкриту є закриває.

// Напишіть функцію parentheses(value)
//  перевіряючий рядок з дужками на валідність.
// parentheses('') === false
// parentheses('()()') === true
// parentheses('(()())') === true
// parentheses('(()') === false
// parentheses(')') === false

// function parentheses(value) {
//   value = value.trim();
//   const first = [];
//   const second = [];
//   if (!value) {
//     return false;
//   }
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] === "(") {
//       first.push(value[i]);
//     } else if (value[i] === ")") {
//       second.push(value[i]);
//     }
//   }
//   return first.length === second.length;
// }
// console.log(parentheses(""));
// console.log(parentheses("()()"));
// console.log(parentheses("(()())"));
// console.log(parentheses("(()"));
// console.log(parentheses(")"));

//Напишіть функцію expand(arr),
// яка розгортає вкладений масив будь - якої глибини.

// var arr1 = [1, [2, [3, [4]]]];
// var arr2 = [1, [2], [3, [[4]]], [5, 6]];

// function expand(arr) {
//   return arr.flat(Infinity);
// }
// console.log(expand(arr2));
// function newArray(arr) {
//   let index = 0;

//   while (arr.length > index) {
//     arr = arr.reduce((akk, el) => {
//       return akk.concat(el);
//     }, []);
//     index += 1;
//   }
//   return arr;
// }
// console.log(newArray(arr2));

//Напишіть функцію filterFalse(arr), яка очищає масив
// від помилкових(false)
//Значень: false, null, undefined, 0, -0, NaN і "" (пустий рядок).

// const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// function filterFalse(arr) {
//   return arr.filter((value) => !!value);
// }
// console.log(filterFalse(array));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
