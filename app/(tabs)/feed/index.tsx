import { Text, View, FlatList } from "react-native";
import EventCard from "../../../components/EventCard";

const events = [
  {
    id: "1",
    title: "USYD Tech Meetup",
    date: "March 5, 2025",
    location: "SciTech Building, Room 202",
    image: "https://picsum.photos/400/250",
    description: "Join the USYD Tech Meetup to network with tech enthusiasts and industry experts.",
    latitude: -33.8870,
    longitude: 151.1913,
  },
  {
    id: "2",
    title: "Finance Club Networking",
    date: "March 8, 2025",
    location: "Business School, Level 1",
    image: "https://picsum.photos/350/230",
    description: "Expand your finance network with professionals and students at this event.",
    latitude: -33.8895,
    longitude: 151.1920,
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    date: "March 12, 2025",
    location: "Innovation Hub",
    image: "https://picsum.photos/360/240",
    description: "Watch innovative startups pitch their ideas to investors and mentors.",
    latitude: -33.8865,
    longitude: 151.1932,
  },
  {
    id: "4",
    title: "Entrepreneurs Society Hackathon",
    date: "March 15, 2025",
    location: "Sydney Knowledge Hub",
    image: "https://picsum.photos/370/260",
    description: "Compete in a 24-hour hackathon to develop innovative startup solutions.",
    latitude: -33.8847,
    longitude: 151.1895,
  },
  {
    id: "5",
    title: "AI & Machine Learning Workshop",
    date: "March 18, 2025",
    location: "J12 Lecture Theatre",
    image: "https://picsum.photos/380/270",
    description: "Learn the fundamentals of AI and ML in this hands-on workshop.",
    latitude: -33.8901,
    longitude: 151.1948,
  },
  {
    id: "6",
    title: "USYD Science Society Quiz Night",
    date: "March 22, 2025",
    location: "Holme Building, Level 2",
    image: "https://picsum.photos/390/280",
    description: "Test your science knowledge at this fun quiz night!",
    latitude: -33.8878,
    longitude: 151.1917,
  },
  {
    id: "7",
    title: "Women in Business Panel Discussion",
    date: "March 25, 2025",
    location: "Abercrombie Business School",
    image: "https://picsum.photos/400/260",
    description: "Hear from successful women in business about their career journeys.",
    latitude: -33.8882,
    longitude: 151.1925,
  },
  {
    id: "8",
    title: "Debating Society Tournament",
    date: "March 28, 2025",
    location: "New Law Annex, Room 104",
    image: "https://picsum.photos/410/270",
    description: "Compete in or watch some of the best university debaters in action.",
    latitude: -33.8873,
    longitude: 151.1890,
  },
  {
    id: "9",
    title: "USYD MedSoc Mental Health Awareness Night",
    date: "April 2, 2025",
    location: "Charles Perkins Centre Auditorium",
    image: "https://picsum.photos/420/280",
    description: "Discuss mental health awareness with experts and students in medicine.",
    latitude: -33.8849,
    longitude: 151.1884,
  },
  {
    id: "10",
    title: "Game Development Society Workshop",
    date: "April 6, 2025",
    location: "PNR Learning Hub",
    image: "https://picsum.photos/430/290",
    description: "Learn how to develop your first game in this hands-on workshop.",
    latitude: -33.8905,
    longitude: 151.1953,
  },
  {
    id: "11",
    title: "Cultural Exchange Night",
    date: "April 10, 2025",
    location: "Manning Bar",
    image: "https://picsum.photos/440/300",
    description: "Celebrate cultural diversity with music, food, and performances.",
    latitude: -33.8868,
    longitude: 151.1910,
  },
  {
    id: "12",
    title: "USYD Law Society Networking Drinks",
    date: "April 14, 2025",
    location: "The Grandstand, USYD",
    image: "https://picsum.photos/450/310",
    description: "Connect with law professionals and students over drinks.",
    latitude: -33.8853,
    longitude: 151.1879,
  },
];

export default function Index() {

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
          <EventCard event={item}/>
        )}
      />
    </View>
  );
}