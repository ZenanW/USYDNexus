import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function EventDetailScreen() {
  const { title, date, location, image, description, latitude, longitude } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: Array.isArray(image) ? image[0] : image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Map with marker */}
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: Number(latitude), longitude: Number(longitude) }} title={Array.isArray(title) ? title[0] : title || "Event Location"}  />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  location: {
    fontSize: 16,
    color: "blue",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 200,
  },
});
