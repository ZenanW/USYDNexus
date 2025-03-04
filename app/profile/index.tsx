import { View, Text, FlatList } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import EventCard from "../../components/EventCard";

export default function ProfileScreen() {
    // Dummy events data (replace with API data)
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
    ];

    return (
        <View>
            {/* Profile Card */}
            <ProfileCard 
                name="John Doe"
                major="Computer Science"
                profileImage="https://www.w3schools.com/howto/img_avatar.png"
                onEditPress={() => alert("Edit Profile Clicked!")}
            />

            {/* My Events Section */}
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, marginTop: 10 }}>
                My Events
            </Text>
            <FlatList 
                data={events}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                renderItem={({ item }) => (
                    <EventCard event={item}/>
                )}
                horizontal // Enables horizontal scrolling
                showsHorizontalScrollIndicator={false} // Hides the scrollbar for cleaner UI
                contentContainerStyle={{ paddingHorizontal: 10 }} // Adds spacing if needed
            />
        </View>
    );
}