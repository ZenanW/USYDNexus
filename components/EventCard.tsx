import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Define TypeScript interface for event props
interface EventProps {
    event: {
        title: string;
        date: string;
        location: string;
        image: string;
        description: string;   
        latitude: number;     
        longitude: number;   
    };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
    const router = useRouter();
    
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push({
          pathname: "/event-detail",
          params: { 
              title: event.title,
              date: event.date,
              location: event.location,
              image: event.image,
              description: event.description,  // ✅ Pass description
              latitude: event.latitude.toString(),  // ✅ Convert to string
              longitude: event.longitude.toString() // ✅ Convert to string
          }
        })}
      >
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.location}>{event.location}</Text>
        </View>
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    margin: 15,
    width: 300
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  location: {
    fontSize: 14,
    color: "darkblue",
  },
});
  
export default EventCard;