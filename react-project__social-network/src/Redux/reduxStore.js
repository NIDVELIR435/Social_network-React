import { combineReducers, createStore } from 'redux'
import HomeBlockReducer from './reducer/HomeBlock-reducer';
import MessageBlockReducer from './reducer/MessageBlock-reducer';
import listSuggestionForPeople from './reducer/SuggestionsBlock-reducer';
import listTitlesName_forMessages from './reducer/TitlesName_MessagesBlock-reducer';
import UsersForFindUsersPage from './reducer/UsersForFindUsersPage-reducer';


let _reducers = combineReducers({ //combine ours redusers from redux store
   listTitlesName_forMessages: listTitlesName_forMessages,
   listSuggestionForPeople: listSuggestionForPeople,
   MessageBlockReducer: MessageBlockReducer,
   HomeBlockReducer: HomeBlockReducer,
   UsersPageReducer: UsersForFindUsersPage,
});
let Store = createStore(_reducers); //create redux Store and pass him combined reducer

export default Store;