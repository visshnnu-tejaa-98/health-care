import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Stack,
  Text,
  View,
} from "native-base";
import { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    const res = (weight / (height * 0.01 * 2)).toFixed(2);
    setBmiValue(res);
    if (res > 30) {
      setFeedback("Obesity");
    } else if (res > 25) {
      setFeedback("Over weight");
    } else if (res > 18.5) {
      setFeedback("Normal");
    } else if (res < 18.5) {
      setFeedback("Under weight");
    } else {
      setFeedback("");
    }
  };

  const handleClear = () => {
    setBmiValue("");
    setHeight("");
    setWeight("");
  };
  return (
    <View>
      <Center>
        <Box bg="primary.50" my="2" p="3" w="400px" borderRadius="md">
          <Center>
            <Text fontSize="lg" mb="2">
              BMI Calculator
            </Text>
          </Center>
          <FormControl>
            <Stack space={5}>
              <Stack>
                <Box alignItems="center">
                  <Input
                    mx="3"
                    placeholder="Height in cms"
                    w="100%"
                    value={height}
                    onChangeText={(val) => setHeight(val)}
                  />
                </Box>
              </Stack>
              <Stack>
                <Box alignItems="center">
                  <Input
                    mx="3"
                    placeholder="Weight in Kg"
                    w="100%"
                    value={weight}
                    onChangeText={(val) => setWeight(val)}
                  />
                </Box>
              </Stack>
            </Stack>
            {bmiValue && (
              <HStack space={2} pt="2">
                <Text color="primary.300">Your BMI:</Text>
                <Text color="primary.400">{bmiValue}</Text>
              </HStack>
            )}
            {feedback && (
              <Center>
                <HStack>
                  <Text fontSize="2xl" color="primary.500">
                    {feedback}
                  </Text>
                </HStack>
              </Center>
            )}
            {!bmiValue && (
              <Button success mt={3} bg="primary.300" onPress={handleSubmit}>
                <Text>Submit</Text>
              </Button>
            )}
            {bmiValue && (
              <Button success mt={3} bg="primary.300" onPress={handleClear}>
                <Text>Check Again</Text>
              </Button>
            )}
          </FormControl>
        </Box>
      </Center>
    </View>
  );
};

export default Bmi;
