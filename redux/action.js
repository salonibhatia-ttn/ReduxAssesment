export const fetchChannel = (payload = '5fbe0b609e815e2054cf7072') => {
  return {
    type: 'FETCH_CHANNEL_REQUEST',
    payload,
  };
};
