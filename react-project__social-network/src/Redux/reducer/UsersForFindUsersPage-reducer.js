const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    UsersForFindUsersPageList: [
      // { id: 1, avatar: null, firstName: 'Misha', lastName: 'Gurin', previewtext: 'I`m looking for a new emloy right now', location: { country: 'Ukraine', town: 'Dnipro' }, followed: true, },
      // { id: 2, avatar: null, firstName: 'Dasha1', lastName: 'Gukova', previewtext: 'Hello)', location: { country: 'Ukraine', town: 'Dnipro' }, followed: true, },
      // { id: 3, avatar: null, firstName: 'Dasha2', lastName: 'Gukova', previewtext: 'I`m looking for a new emloy right now', location: { country: 'Ukraine', town: 'Kiev' }, followed: true, },
      // { id: 4, avatar: null, firstName: 'Dasha3', lastName: 'Gukova', previewtext: 'I`m looking for a new emloy right now', location: { country: 'Ukraine', town: 'Kharkov' }, followed: false, },
      // { id: 5, avatar: null, firstName: 'Dasha4', lastName: 'Gukova', previewtext: 'I`m looking for a new emloy right now', location: { country: 'Ukraine', town: 'Zaporizhya' }, followed: false, },
      // { id: 6, avatar: null, firstName: 'Dasha5', lastName: 'Gukova', previewtext: 'I`m looking for a new emloy right now', location: { country: 'Ukraine', town: 'Donetck' }, followed: false, },
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
         debugger;
         return { ...state, UsersForFindUsersPageList: [...state.UsersForFindUsersPageList, action.Users] }
      default:
         return state;
   }
};

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });               //Follow action creator
export const UnFollowAC = (UserId) => ({ type: UN_FOLLOW, UserId });           //unFollow action creator
export const SetUsersAC = (Users) => ({ type: SET_USERS, Users });            //set new user from server action creator


export default UsersForFindUsersPage;

