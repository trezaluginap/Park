// src/screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import {View, FlatList, Button, StyleSheet} from 'react-native';
import axios from '../api/apiClient';
import EventCard from '../components/EventCard';

const HomeScreen = ({navigation}) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/Name');
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Add New Event"
        onPress={() => navigation.navigate('EventForm')}
      />
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <EventCard
            event={item}
            onPress={() =>
              navigation.navigate('EventDetail', {eventId: item.id})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
});

export default HomeScreen;
