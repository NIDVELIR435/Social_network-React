import { UserAPI } from "../../API/axios_api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_LIST_COUNT = 'SET_TOTAL_LIST_COUNT';
const IS_FETCHING_STATUS = 'IS_FETCHING_STATUS';
const IS_REQUEST_SUBS_BUTTON = 'IS_REQUEST_SUBS_BUTTON';
const SET_CURRENT_USER_TO_OBJ = 'SET_CURRENT_USER_TO_OBJ';


let initialState = {
   UsersList: [],
   pageSize: 10,
   totalListCount: 0,
   currentPage: 1,
   isFetching: true,
   isRequestSubsButton: [],
   VievCurrentUser: [],

};

let UsersList = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            UsersList: state.UsersList.map(u => {
               if (u.id === action.UserId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UN_FOLLOW:
         return {
            ...state,
            UsersList: state.UsersList.map(u => {
               if (u.id === action.UserId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return { ...state, UsersList: action.Users }
      case SET_CURRENT_USER_TO_OBJ:
         return { ...state, VievCurrentUser: action.CurrentUser }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.PageNumb }
      case SET_TOTAL_LIST_COUNT:
         return { ...state, totalListCount: action.TotalNumb }
      case IS_FETCHING_STATUS:
         return { ...state, isFetching: action.isFetching }
      case IS_REQUEST_SUBS_BUTTON:
         return {
            ...state,
            isRequestSubsButton: action.isRequest
               ? [...state.isRequestSubsButton, action.userId]
               : state.isRequestSubsButton.filter(id => id !== action.userId)
         }
      default:
         return state;
   }
};

//* создаем блок с action creator, что через себя буду передавать параметры в reducer

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });                                                      //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UN_FOLLOW, UserId });                                                 //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });                                                   //set new user from server action creator
export const VievCurrentUserAC = (CurrentUser) => ({ type: SET_CURRENT_USER_TO_OBJ, CurrentUser });                  //set new temporary user from member block action creator
export const SetCurrentPageAC = (PageNumb) => ({ type: SET_CURRENT_PAGE, PageNumb });                                //set Current page action creator
export const SetTotalListCountAC = (TotalNumb) => ({ type: SET_TOTAL_LIST_COUNT, TotalNumb });                       //set x-total-count action creator
export const IsFetchingStatusAC = (isFetching) => ({ type: IS_FETCHING_STATUS, isFetching });                        //set status response action creator
export const isRequestSubsButtonAC = (isRequest, userId) => ({ type: IS_REQUEST_SUBS_BUTTON, isRequest, userId });   //set disabled button if fetching request to server action creator

//* создаем Thunk, что будут выполнять асинхронные операции, вызывать dispatch и их передавать на выполнение в редюсер

export const getUsersTC = (currentPage, pageSize) => {              //это функция, что может принимать в себя параментры и создавать санку
   return (dispatch) => {                                                  //это санка(thunk)
      dispatch(IsFetchingStatusAC(true));
      UserAPI.getUsersList(currentPage, pageSize).then(response => {
         dispatch(IsFetchingStatusAC(false))
         dispatch(SetUsersAC(response.data))
         dispatch(SetTotalListCountAC(response.headers["x-total-count"]))   //? что бы найти целое число json списка, нужно найти свойство  header и обратиться к нему, как к елементу массива
      })
   }
};
export const onChangeTC = (PageNumber, pageSize) => {              //это функция, что может принимать в себя параментры и создавать санку
   return (dispatch) => {
      dispatch(SetCurrentPageAC(PageNumber));                                               //это санка(thunk)
      dispatch(IsFetchingStatusAC(true));
      UserAPI.getUsersList(PageNumber, pageSize).then(response => {
         dispatch(IsFetchingStatusAC(false))
         dispatch(SetUsersAC(response.data))
      })
   }
};

export const followTC = (Userid) => {                              //это функция, что может принимать в себя параментры и создавать санку
   debugger;
   return (dispatch) => {
      dispatch(isRequestSubsButtonAC(true, Userid))
      UserAPI.followStatus(Userid, true)
         .then(() => {
            dispatch(FollowAC(Userid))
            dispatch(isRequestSubsButtonAC(false, Userid))
         })
   }
};

export const unfollowTC = (Userid) => {                            //это функция, что может принимать в себя параментры и создавать санку
   debugger;
   return (dispatch) => {
      dispatch(isRequestSubsButtonAC(true, Userid))
      UserAPI.followStatus(Userid, false)
         .then(() => {
            dispatch(UnFollowAC(Userid))
            dispatch(isRequestSubsButtonAC(false, Userid))
         })
   }
};

export default UsersList;

