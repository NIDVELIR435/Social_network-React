import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import HomeBlockReducer from './reducer/HomeBlock-reducer';
import MessageBlockReducer from './reducer/MessageBlock-reducer';
import listSuggestionForPeople from './reducer/SuggestionsBlock-reducer';
import listTitlesName_forMessages from './reducer/TitlesName_MessagesBlock-reducer';
import UsersList from './reducer/UsersList-reducer';
import thunkMiddleware from 'redux-thunk' //* промежуточный уровень


let _reducers = combineReducers({ //combine ours redusers from redux store
   listTitlesName_forMessages: listTitlesName_forMessages,
   listSuggestionForPeople: listSuggestionForPeople,
   MessageBlockReducer: MessageBlockReducer,
   HomeBlockReducer: HomeBlockReducer,
   UsersListReducer: UsersList,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(_reducers,composeEnhancers(compose(applyMiddleware(thunkMiddleware)))); 
window.__Store = Store;               //даёт возможность посмотреть через браузер, что есть в сторе

export default Store;