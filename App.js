import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  StatusBar,
  View,
  IconButton,
  Button,
  ScrollView,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { materialIcons } from "@expo/vector-icons";
import Bmi from "./components/Bmi";
import MedRemainder from "./components/MedRemainder";
import DocAppointment from "./components/DocAppointment";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const pages = [
    { name: "BMI Calculator", id: "1", link: "/bmi", param: "bmi" },
    {
      name: "Medicine Remainder",
      id: "2",
      link: "/remainder",
      param: "remainder",
    },
    { name: "Consult Doctor", id: "3", link: "consult", param: "doctor" },
  ];
  const [showBmi, setShowBmi] = useState(false);
  const [doctorsAppointment, setDoctorsAppointment] = useState(false);
  const [showMedRemainder, setShowMedRemainder] = useState(false);

  const handleShowOption = (tab) => {
    if (tab == "bmi") {
      setShowBmi(!showBmi);
      setDoctorsAppointment(false);
      setShowMedRemainder(false);
    } else if (tab === "doctor") {
      setShowBmi(false);
      setDoctorsAppointment(!doctorsAppointment);
      setShowMedRemainder(false);
    } else if (tab === "remainder") {
      setShowBmi(false);
      setDoctorsAppointment(false);
      setShowMedRemainder(!showMedRemainder);
    } else {
      setShowBmi(false);
      setDoctorsAppointment(false);
      setShowMedRemainder(false);
    }
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* navbar */}
        <View>
          <StatusBar bg="#3700B3" barStyle="light-content" />
          <Box safeAreaTop bg="#6200ee" />
          <VStack
            bg="#6200ee"
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <HStack alignItems="center" pl="6">
              <Text color="white" fontSize="20" fontWeight="bold">
                Health
              </Text>
            </HStack>
          </VStack>
        </View>
        {/* options */}
        <View>
          <VStack>
            {pages.map((page) => (
              <View key={page.id}>
                <Center>
                  <Button
                    bg="primary.100"
                    w="95%"
                    my="2"
                    p="3"
                    h="70px"
                    borderRadius="md"
                    onPress={() => handleShowOption(page.param)}
                  >
                    <Text fontSize="lg">{page.name}</Text>
                  </Button>
                  {page.param == "bmi" && showBmi && <Bmi />}
                  {page.param == "remainder" && showMedRemainder && (
                    <MedRemainder />
                  )}
                  {page.param == "doctor" && doctorsAppointment && (
                    <DocAppointment />
                  )}
                </Center>
              </View>
            ))}
          </VStack>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
