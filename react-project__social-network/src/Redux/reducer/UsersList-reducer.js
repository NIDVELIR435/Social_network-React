import { UserAPI } from "../../API/axios_api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_LIST_COUNT = 'SET_TOTAL_LIST_COUNT';
const IS_FETCHING_STATUS = 'IS_FETCHING_STATUS';
const IS_REQUEST_SUBS_BUTTON = 'IS_REQUEST_SUBS_BUTTON';
const SET_CURRENT_USER_TO_OBJ = 'SET_CURRENT_USER_TO_OBJ';
const SET_CURRENT_MEMBER_TO_OBJ = 'SET_CURRENT_MEMBER_TO_OBJ';


let initialState = {
   UsersList: [],
   pageSize: 10,
   totalListCount: 0,
   currentPage: 1,
   isFetching: true,
   isRequestSubsButton: [],
   VievCurrentUser: [],
   VievCurrentUserMemberPage: [],

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
         return { ...state, VievCurrentUserMemberPage: action.CurrentUser }
      case SET_CURRENT_MEMBER_TO_OBJ:
         return { ...state, VievCurrentUserMemberPage: {...state.VievCurrentUserMemberPage, status: action.CurrentUser} }
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

//* create block with action creator, what through yourself passed parram in reducer

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });                                                      //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UN_FOLLOW, UserId });                                                 //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });                                                   //set new user from server action creator
export const VievCurrentUserAC = (CurrentUser) => ({ type: SET_CURRENT_USER_TO_OBJ, CurrentUser });                  //set new temporary user from member block action creator
export const VievCurrentUserMemberPageAC = (CurrentUser) => ({ type: SET_CURRENT_MEMBER_TO_OBJ, CurrentUser });                  //set new temporary user from member block action creator
export const SetCurrentPageAC = (PageNumb) => ({ type: SET_CURRENT_PAGE, PageNumb });                                //set Current page action creator
export const SetTotalListCountAC = (TotalNumb) => ({ type: SET_TOTAL_LIST_COUNT, TotalNumb });                       //set x-total-count action creator
export const IsFetchingStatusAC = (isFetching) => ({ type: IS_FETCHING_STATUS, isFetching });                        //set status response action creator
export const isRequestSubsButtonAC = (isRequest, userId) => ({ type: IS_REQUEST_SUBS_BUTTON, isRequest, userId });   //set disabled button if fetching request to server action creator

//*create Thunk, which do asink oparation, request dispatch and then take them to working in reducer

export const getUsersTC = (currentPage, pageSize) => {              //это функция, что может принимать в себя параментры и создавать санку
   return async(dispatch) => {                                                  //thi is thunk
      dispatch(IsFetchingStatusAC(true));
      let response = await UserAPI.getUsersList(currentPage, pageSize);         
         dispatch(IsFetchingStatusAC(false))
         dispatch(SetUsersAC(response.data))
         dispatch(SetTotalListCountAC(response.headers["x-total-count"]))   //? что бы найти целое число json списка, нужно найти свойство  header и обратиться к нему, как к елементу массива
   }
};
export const onChangeTC = (PageNumber, pageSize) => {              //это функция, что может принимать в себя параментры и создавать санку
   return  async (dispatch) => {
      dispatch(SetCurrentPageAC(PageNumber));                                               //это санка(thunk)
      dispatch(IsFetchingStatusAC(true));
      let response = await UserAPI.getUsersList(PageNumber, pageSize);
         dispatch(IsFetchingStatusAC(false))
         dispatch(SetUsersAC(response.data))
   }
};

export const followTC = (Userid) => {                              //это функция, что может принимать в себя параментры и создавать санку
   return async (dispatch) => {
      dispatch(isRequestSubsButtonAC(true, Userid))
      let response = await UserAPI.followStatus(Userid, true)
            dispatch(FollowAC(Userid))
            dispatch(isRequestSubsButtonAC(false, Userid))
   }
};

export const unfollowTC = (Userid) => {                            //это функция, что может принимать в себя параментры и создавать санку
   return async (dispatch) => {
      dispatch(isRequestSubsButtonAC(true, Userid))
      let response = await UserAPI.followStatus(Userid, false);
            dispatch(UnFollowAC(Userid))
            dispatch(isRequestSubsButtonAC(false, Userid))
   }
};

export default UsersList;

