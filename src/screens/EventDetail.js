// src/screens/EventDetail.js
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import axios from '../api/apiClient';

const EventDetail = ({route, navigation}) => {
  const {eventId} = route.params;
  const [event, setEvent] = useState(null);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`/Name/${eventId}`);
      setEvent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEvent = async () => {
    await axios.delete(`/Name/${eventId}`);
    navigation.goBack();
  };

  useEffect(() => {
    fetchEvent();
  });

  return (
    event && (
      <View style={styles.container}>
        <Text style={styles.title}>{event.name}</Text>
        <Text>{event.description}</Text>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('EventForm', {eventId: event.id})}
        />
        <Button title="Delete" onPress={deleteEvent} color="red" />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
});

export default EventDetail;
