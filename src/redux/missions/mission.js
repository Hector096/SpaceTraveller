const GET_MISSIONS = 'spaceTraveler/missions/GET_MISSIONS';
const RESERVE_MISSION = 'spaceTraveler/missions/RESERVE_MISSION';

// init state
const initialState = {
  missionsArray: [],
};

// action
export const getMissionsAction = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const reserveMissionAction = (payload) => ({
  type: RESERVE_MISSION,
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

    case RESERVE_MISSION:
      return {
        ...state,
        missionsArray: state.missionsArray.map((mission) => (
          mission.missionId === action.payload.missionId
            ? { ...mission, reserved: !mission.reserved }
            : mission
        )),
      };
    default:
      return state;
  }
};

export default missionsReducer;

// {
//   const newState = (mission) => {
//     if (mission.missionId !== action.payload) {
//       return mission;
//     }
//     return { ...mission, reserved: !mission.reserved };
//   };
//   return {
//     ...state,
//     missionsArray: [state.missionsArray.map((mission) => newState(mission))],
//   };
// }
