import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: "#c96df9" }, tabBarActiveTintColor: "white", tabBarInactiveTintColor: "#f0e6ff"}}>
      <Tabs.Screen
        name="feed/index"
        options={{
          title: "Events",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
