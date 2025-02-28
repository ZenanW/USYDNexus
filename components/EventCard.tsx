import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./eventCardStyles"; // Import styles

// Define TypeScript interface for event props
interface EventProps {
    event: {
      title: string;
      date: string;
      location: string;
      image: string;
    };
    onPress: (event: EventProps["event"]) => void;
}
  
const EventCard: React.FC<EventProps> = ({ event, onPress }) => {
    return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(event)}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.location}>{event.location}</Text>
        </View>
    </TouchableOpacity>
    );
};
  
export default EventCard;