const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_LIST_COUNT = 'SET_TOTAL_LIST_COUNT';
const IS_FETCHING_STATUS = 'IS_FETCHING_STATUS';
const IS_UPDATE_FOLLOW_STAT = 'IS_UPDATE_FOLLOW_STAT';
const SET_CURRENT_USER_TO_OBJ = 'SET_CURRENT_USER_TO_OBJ';


let initialState = {
   UsersList: [],
   pageSize: 10,
   totalListCount: 0,
   currentPage: 1,
   isFetching: true,
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
      // case IS_UPDATE_FOLLOW_STAT:
      //    return { ...state, UsersList: action.isUPDStatus }
      default:
         return state;
   }
};

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });                                    //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UN_FOLLOW, UserId });                               //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });                                 //set new user from server action creator
export const VievCurrentUserAC = (CurrentUser) => ({ type: SET_CURRENT_USER_TO_OBJ, CurrentUser });//set new temporary user from member block action creator
export const SetCurrentPageAC = (PageNumb) => ({ type: SET_CURRENT_PAGE, PageNumb });              //set Current page action creator
export const SetTotalListCountAC = (TotalNumb) => ({ type: SET_TOTAL_LIST_COUNT, TotalNumb });     //set x-total-count action creator
export const IsFetchingStatusAC = (isFetching) => ({ type: IS_FETCHING_STATUS, isFetching });     //set status response action creator
// export const IsUpdateFollowStatusAC = (isUPDStatus) => ({ type: IS_UPDATE_FOLLOW_STAT, isUPDStatus });     //update folow status for member action creator


export default UsersList;

