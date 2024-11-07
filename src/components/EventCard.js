// src/components/EventCard.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const EventCard = ({event, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{event.name}</Text>
    <Text>{event.description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
});

export default EventCard;
