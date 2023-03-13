import React from 'react';
import {Provider} from 'react-redux';
import Channel from './components/Channel';
import ChannelData from './components/ChannelData';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      {/* <Channel /> */}
      <ChannelData />
    </Provider>
  );
};

export default App;
