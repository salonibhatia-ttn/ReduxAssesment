import data from '../data.json';

const initialState = {
  title: data.data.results[0].meta.title,
  desc: data.data.results[0].meta.description,
  video: data.data.results[0].detail.playUrl,
};

const channelReducer = (state = data.data.results, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const channelDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHANNEL_REQUEST': {
      const item = data.data.results.filter(
        i => i.meta.id === action.payload.id,
      )[0];
      return {
        title: item.meta.title,
        desc: item.meta.description,
        video: item.detail.playUrl,
      };
    }
    default:
      return state;
  }
};

export default channelReducer;
