import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: "Profile" }} />
        <Stack.Screen name="event-detail" options={{ title: "Event Details" }} />
      </Stack>
    );
  }