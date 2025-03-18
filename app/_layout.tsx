import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="event-detail" 
        options={{ 
          headerShown: true, 
          title: "Event Details",
          headerBackTitle: "Back"
        }} 
      />
    </Stack>
  );
}
