
let initialState = {
   Suggestions: [
      { name: 'Yaroslav' },
      { name: 'Victor' },
      { name: 'Lesya' },
      { name: 'Dima' },
      { name: 'Masha' },
   ]
};

let listSuggestionForPeople = (State = initialState, action) => {
   return State;
   }

export default listSuggestionForPeople;