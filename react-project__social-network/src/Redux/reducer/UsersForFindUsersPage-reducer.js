const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
   UsersForFindUsersPageList: [
      { id: 1, avatar: 'avatarLink', firstName: 'Misha', lastName: 'Gurin', previewtext: 'I`m looking for a new emloy right now', location: { county: 'Ukraine', town: 'Dnipro' }, followed: true },
      { id: 2, avatar: 'avatarLink', firstName: 'Dasha', lastName: 'Gukova', previewtext: 'I`m looking for a new emloy right now', location: { county: 'Ukraine', town: 'Dnipro' }, followed: true }
   ]
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
      case UNFOLLOW:
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
         return { ...state, UsersForFindUsersPageList: [...state.UsersForFindUsersPageList, action.Users] }
      default:
         return state;
   }
};

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });               //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });           //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });            //set new user from server action creator


export default UsersForFindUsersPage;

