const MODE = 'Theme/MODE';

let initialState = {
   theme_mode: false,
};

let theme_mode = (state = initialState, action) => {
   switch (action.type) {
      case MODE:
         return { ...state, theme_mode: action.theme_mode }
      default:
         return state;
   }
};

//* create block with action creator, what through yourself passed parram in reducer

export const theme_modeAC = (theme_mode) => ({ type: MODE, theme_mode });                                               //set theme mode

export default theme_mode;

