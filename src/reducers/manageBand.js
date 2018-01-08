let id = 0;
export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      id++;
      return { bands: [...state.bands, { text: action.text, id: id }] };
    case "DELETE_BAND":
      const band_index = state.bands.findIndex(band => {
        return band.id === action.id;
      });
      const bandList = state.bands.filter(band => band.id === action.id);
      return {
        bands: [
          ...state.bands.slice(0, band_index),
          ...state.bands.slice(band_index + 1)
        ]
      };
    default:
      return state;
  }
}
