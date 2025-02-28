import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProfileCardProps {
    name: string;
    major: string;
    profileImage: string;
    onEditPress: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, major, profileImage, onEditPress}) => {
    return (
        <View style={styles.card}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.major}>{major}</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#c96df9",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: "center"
      },
      name: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
      },
      major: {
        fontSize: 14,
        color: "black",
      },
      editButton: {
        flexDirection: "column",
        backgroundColor: "#45d64e",
        margin: 25,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
      },
      editButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
})

export default ProfileCard;