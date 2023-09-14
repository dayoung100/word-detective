import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./pages/etc/Header";
import Login from "./pages/etc/Login";
import Main from "./pages/home/Main";
import PictureLobby from "./pages/pictureGame/PictureLobby";
import WordLobby from "./pages/wordGame/WordLobby";
import LetterLobby from "./pages/letterGame/LetterLobby";
import WordNoteMain from "./pages/wordNote/WordNoteMain";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          // headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            header: props => <Header {...props} />,
          }}
        />
        <Stack.Screen name="PictureLobby" component={PictureLobby} />
        <Stack.Screen name="WordLobby" component={WordLobby} />
        <Stack.Screen name="LetterLobby" component={LetterLobby} />
        <Stack.Screen name="WordNoteMain" component={WordNoteMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}