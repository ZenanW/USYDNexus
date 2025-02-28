import { Text, View, FlatList } from "react-native";
import EventCard from "../components/EventCard";

const events = [
  {
    id: "1",
    title: "USYD Tech Meetup",
    date: "March 5, 2025",
    location: "SciTech Building, Room 202",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "2",
    title: "Finance Club Networking",
    date: "March 8, 2025",
    location: "Business School, Level 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    date: "March 12, 2025",
    location: "Innovation Hub",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "4",
    title: "Entrepreneurs Society Hackathon",
    date: "March 15, 2025",
    location: "Sydney Knowledge Hub",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "5",
    title: "AI & Machine Learning Workshop",
    date: "March 18, 2025",
    location: "J12 Lecture Theatre",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "6",
    title: "USYD Science Society Quiz Night",
    date: "March 22, 2025",
    location: "Holme Building, Level 2",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "7",
    title: "Women in Business Panel Discussion",
    date: "March 25, 2025",
    location: "Abercrombie Business School",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "8",
    title: "Debating Society Tournament",
    date: "March 28, 2025",
    location: "New Law Annex, Room 104",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "9",
    title: "USYD MedSoc Mental Health Awareness Night",
    date: "April 2, 2025",
    location: "Charles Perkins Centre Auditorium",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "10",
    title: "Game Development Society Workshop",
    date: "April 6, 2025",
    location: "PNR Learning Hub",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "11",
    title: "Cultural Exchange Night",
    date: "April 10, 2025",
    location: "Manning Bar",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "12",
    title: "USYD Law Society Networking Drinks",
    date: "April 14, 2025",
    location: "The Grandstand, USYD",
    image: "https://via.placeholder.com/300",
  },
];


export default function Index() {

  const handleEventPress = (event: any) => {
    console.log("Event clicked:", event.title);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList 
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={handleEventPress} />
        )}
      />
    </View>
  );
}
