import FontAwesome from "@expo/vector-icons/FontAwesome"; 
import { Tabs } from "expo-router"; 
import React from "react"; 

export default function TabLayout() {
  return (
<Tabs
  screenOptions={{
    headerTransparent:true,
    headerShown: false, 
    tabBarStyle: {
      backgroundColor: "white",
      position: 'absolute', 
      bottom: 0,
    },
    tabBarLabelStyle: {
      color: "#35007c",
      fontSize: 12,
    },
  }}
>
  <Tabs.Screen
    name="main"
    options={{
      title: "Home",
      tabBarIcon: ({ color }) => (
        <FontAwesome size={28} name="home" color="#35007c" />
      ),
    }}
  />
  <Tabs.Screen
    name="games"
    options={{
      title: "Jogos",
      tabBarIcon: ({ color }) => (
        <FontAwesome size={28} name="gamepad" color="#35007c" />
      ),
    }}
  />
  <Tabs.Screen
    name="ranking"
    options={{
      title: "Ranking",
      tabBarIcon: ({ color }) => (
        <FontAwesome size={28} name="trophy" color="#35007c" />
      ),
    }}
  />
</Tabs>



  );
}
