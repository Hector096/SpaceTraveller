const GET_MISSIONS = 'spaceTraveler/missions/GET_MISSIONS';
const RESERVE_MISSIONS = 'spaceTraveler/missions/RESERVE_MISSIONS';

// init state
const initialState = {
  missionsArray: [],
};

// action
export const getMissionsAction = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const reserveMissionsAction = (payload) => ({
  type: RESERVE_MISSIONS,
  payload,
});

// reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missionsArray: [...state.missionsArray.concat(action.payload)],
      };

    case RESERVE_MISSIONS:
      return {
        ...state,
        missionsArray: [...state.missionsArray.concat(action.payload)],
      };

    default:
      return state;
  }
};

export default missionsReducer;
