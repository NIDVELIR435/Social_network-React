const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_LIST_COUNT = 'SET_TOTAL_LIST_COUNT';
const IS_FETCHING_STATUS = 'IS_FETCHING_STATUS';

let initialState = {
   UsersForFindUsersPageList: [],
   pageSize: 10,
   totalListCount: 0,
   currentPage: 1,
   isFetching: true,
};

let UsersForFindUsersPage = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            UsersForFindUsersPageList: state.UsersForFindUsersPageList.map(u => {
               if (u.id === action.UserId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UN_FOLLOW:
         return {
            ...state,
            UsersForFindUsersPageList: state.UsersForFindUsersPageList.map(u => {
               if (u.id === action.UserId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return { ...state, UsersForFindUsersPageList: action.Users }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.PageNumb }
      case SET_TOTAL_LIST_COUNT:
         return { ...state, totalListCount: action.TotalNumb }
      case IS_FETCHING_STATUS:
         return { ...state, isFetching: action.isFetching }
      default:
         return state;
   }
};

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });                                    //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UN_FOLLOW, UserId });                               //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });                                 //set new user from server action creator
export const SetCurrentPageAC = (PageNumb) => ({ type: SET_CURRENT_PAGE, PageNumb });              //set Current page action creator
export const SetTotalListCountAC = (TotalNumb) => ({ type: SET_TOTAL_LIST_COUNT, TotalNumb });     //set x-total-count action creator
export const IsFetchingStatusAC = (isFetching) => ({ type: IS_FETCHING_STATUS, isFetching });     //set x-total-count action creator


export default UsersForFindUsersPage;

