import { getRocketsFromApi } from '../api/api';

const FETCH_ROCKET_REQUEST = 'spacetraveller/rocket/fetch_request';
const FETCH_ROCKET_SUCCESS = 'spacetraveller/rocket/fetch_success';
const FETCH_ROCKET_FAILURE = 'spacetraveller/rocket/fetch_failure';
const RESERVE_ROCKET = 'spacetraveller/rocket/reserve_rocket';

const initialState = {
  loading: false,
  data: null,
  error: '',
};

export const fetchRequest = () => ({
  type: FETCH_ROCKET_REQUEST,
});
export const fetchSuccess = (payload) => ({
  type: FETCH_ROCKET_SUCCESS,
  payload,
});
export const fetchFailure = (payload) => ({
  type: FETCH_ROCKET_FAILURE,
  payload,
});
export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROCKET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_ROCKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVE_ROCKET:
    {
      const toggleReserved = (rocket) => (rocket.id === action.payload ? {
        ...rocket,
        reserved:
                !rocket.reserved,
      } : rocket);
      return {
        ...state, data: state.data.map(toggleReserved),
      };
    }
    default:
      return state;
  }
};

export const fetchRocketData = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const data = await getRocketsFromApi();
    dispatch(fetchSuccess(data));
  } catch (error) {
    fetchFailure(error);
  }
};
