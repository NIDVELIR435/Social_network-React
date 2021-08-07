let a = {
   name: 'kostya',
   lastName: 'Mishin',
   education: [1, 4, 3, 4, 5, 6, 7, 6],
   lamp: {
      elements: {
         1: 1,
         2: 2,
         3: 3
      }
   }
};
let b = { ...a };

console.log(b);