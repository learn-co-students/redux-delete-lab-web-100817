let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const band = Object.assign({}, action.band, { id: id })
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      // console.log(action)
      const bands = state.bands.filter(band => action.id !== band.id)
      return {bands}
    default:
      return state;
  }
};
