import { View, Text } from "react-native";
import ProfileCard from "../../components/ProfileCard";

export default function ProfileScreen() {

    return (
        <View>
            <ProfileCard 
                name="John Doe"
                major="Computer Science"
                profileImage="https://www.w3schools.com/howto/img_avatar.png"
                onEditPress={() => alert("Edit Profile Clicked!")}
            />
        </View>
    );
}