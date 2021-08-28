
let initialState = {
   Suggestions: [
      { id: 1, name: 'Yaroslav' },
      { id: 2, name: 'Victor' },
      { id: 3, name: 'Lesya' },
      { id: 4, name: 'Dima' },
      { id: 5, name: 'Masha' },
   ]
};

let listSuggestionForPeople = (State = initialState, action) => {
   return State;
}

export default listSuggestionForPeople;