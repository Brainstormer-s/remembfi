import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import { wrap } from 'yargs';
// import EventCard from "../../components/EventCard"

const Home = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.flexRow}>
          <View style={styles.flex3}>
            <Text style={styles.welcome}>Hey Theodore</Text>
            <Text style={styles.title}>You have 8 tasks for today</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            // onPress={onPress}
          >
            <Text style={styles.buttonText}>Your tasks</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.flexWarp}>
          {/* <EventCard /> */}

          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Windoes 11 Realise date</Text>
            <Text style={styles.LeftDays}> 12 </Text>
            <Text style={styles.eventDays}> Days Left</Text>
          </View>


        </View>
        <View style = {styles.container}  >
          <Text style ={styles.title}>My tasks</Text>

          <ScrollView horizontal style = {styles.tagContainer}>
            
          <Text style={styles.activeTag}>All</Text>
          <Text style={styles.tag}>Urgent</Text>
          <Text style={styles.tag}>Work</Text>
          <Text style={styles.tag}>Class</Text>
          <Text style={styles.tag}>Famly</Text>
          <Text style={styles.tag}>Weekend</Text>
          <Text style={styles.tag}>Hobbies</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor: "#738"
    marginBottom: 50,
  },
  flex3: {
    flex: 3,
  },
  welcome: {
    paddingLeft: 18,
    paddingTop: 60,
    paddingBottom: 30,
    fontSize: 20,
    color: '#666',
    fontWeight: '700',
  },
  container: {
    paddingVertical: 30,
  },
  title: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: '900',
  },
  button: {
    flex: 1.1,
    margin: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    // backgroundColor: '#fcc602',
    backgroundColor: "#3a0ca3",
    // backgroundColor: "#d62828",
    // backgroundColor: "#279af1",
    borderRadius: 10,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // ************************
  // Event Card Style
  // ************************
  eventCard: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '45%', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,

    elevation:5,
  },
  eventTitle: {
    marginTop: 1,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  LeftDays: {
    marginVertical: 15,
    fontSize: 54,
    fontWeight: '900',
    textAlign: 'center',
  },
  eventDays: {
    marginTop: 1,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  flexWarp: {
    flexDirection: "row",
    flexWrap: "wrap",
  },




  // my tasks
  tagContainer: {
    margin: 20,
    width: "95%",
    flex:1,
  },
  tag:{
    padding: 10,
    fontSize: 18
  },
  activeTag: {
    padding: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#3a0ca3",
  },


});

export default Home;
