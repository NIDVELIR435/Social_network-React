import { combineReducers, createStore } from 'redux'
import HomeBlockReducer from './reducer/HomeBlock-reducer';
import MessageBlockReducer from './reducer/MessageBlock-reducer';
import listSuggestionForPeopleJSX from './reducer/SuggestionsBlock-reducer';
import listTitlesName_forMessages from './reducer/TitlesName_MessagesBlock-reducer';


let _reducers = combineReducers({ //combine ours redusers from redux store
   listTitlesName_forMessages: listTitlesName_forMessages,
   listSuggestionForPeopleJSX: listSuggestionForPeopleJSX,
   MessageBlockReducer: MessageBlockReducer,
   HomeBlockReducer: HomeBlockReducer
});
let Store = createStore(_reducers); //create redux Store and pass him combined reducer

export default Store;