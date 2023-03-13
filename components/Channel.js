/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchChannel} from '../redux/action';

const Channel = () => {
  const channels = useSelector(state => state.channel);
  const dispatch = useDispatch();

  const ChannelItem = ({name, id}) => {
    return (
      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 12,
        }}
        onPress={() => dispatch(fetchChannel({id: id}))}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={channels}
      keyExtractor={item => item.meta.id}
      renderItem={({item}) => (
        <ChannelItem name={item.meta.title} id={item.meta.id} />
      )}
    />
  );
};

export default Channel;
