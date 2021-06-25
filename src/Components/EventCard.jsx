import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EventCard = () => {
  return (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
      <Text style={styles.LeftDays}> 12 </Text>
      <Text> Days Left</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  // ************************
  // Event Card Style
  // ************************
  eventCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  LeftDays: {
    fontSize: 54,
    fontWeight: '900',
    textAlign: 'center',
  },
  eventTitle: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: '700',
  },
});
