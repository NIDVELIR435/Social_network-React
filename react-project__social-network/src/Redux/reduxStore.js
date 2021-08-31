import { combineReducers, createStore } from 'redux'
import HomeBlockReducer from './reducer/HomeBlock-reducer';
import MessageBlockReducer from './reducer/MessageBlock-reducer';
import listSuggestionForPeople from './reducer/SuggestionsBlock-reducer';
import listTitlesName_forMessages from './reducer/TitlesName_MessagesBlock-reducer';
import UsersList from './reducer/UsersList-reducer';


let _reducers = combineReducers({ //combine ours redusers from redux store
   listTitlesName_forMessages: listTitlesName_forMessages,
   listSuggestionForPeople: listSuggestionForPeople,
   MessageBlockReducer: MessageBlockReducer,
   HomeBlockReducer: HomeBlockReducer,
   UsersListReducer: UsersList,
});
let Store = createStore(_reducers); //create redux Store and pass him combined reducer
window.Store = Store;               //даёт возможность посмотреть через браузер, что есть в сторе
export default Store;