import {ActivityIndicator, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

const ChannelData = () => {
  const detail = useSelector(state => state.channelData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [detail]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color="#0066b4" />
      ) : (
        <>
          <Text style={styles.channelTitle}>{detail.title}</Text>
          <Text style={styles.channelDesc}>{detail.desc}</Text>
          <Video source={{uri: detail.video}} />
        </>
      )}
    </ScrollView>
  );
};

export default ChannelData;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  channelDesc: {
    fontSize: 16,
    color: 'white',
  },
});
