
let initialState = {
   Titles: [
      { path: 1, name: 'Yaroslav' },
      { path: 2, name: 'Victor' },
      { path: 3, name: 'Lesya' },
      { path: 4, name: 'Dima' },
      { path: 5, name: 'Masha' },
   ]
};

let listTitlesName_forMessages = (State = initialState, action) => {
   return State;
   }

export default listTitlesName_forMessages;