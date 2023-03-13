import {combineReducers} from 'redux';
import channelReducer, {channelDataReducer} from './reducer';

const rootReducer = combineReducers({
  channel: channelReducer,
  channelData: channelDataReducer,
});

export default rootReducer;
