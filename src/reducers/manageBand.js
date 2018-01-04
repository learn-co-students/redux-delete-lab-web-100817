let id = 0;

export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const band = Object.assign({}, action.band, { id: id });
      return { bands: state.bands.concat(band) };
    case 'DELETE_BAND':
      return {
        bands: newState.bands.filter(band => band.id !== action.id)
      };
    default:
      return state;
  }
}
