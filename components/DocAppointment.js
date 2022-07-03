import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  Icon,
  Input,
  Modal,
  Stack,
  Text,
  View,
  VStack,
} from "native-base";
import { useRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DocAppointment = () => {
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View>
      <Box w="400" p="2" borderRadius="md" bg="cyan.50">
        <Center pb="2">
          <Text fontSize="lg">Doctor Appointment</Text>
        </Center>
        <VStack space={2}>
          <FormControl>
            <Stack space={3}>
              <Box alignItems="center">
                <Input
                  mx="3"
                  placeholder="Name of the Doctor"
                  w="100%"
                  value={doctorName}
                  onChangeText={(val) => setDoctorName(val)}
                />
              </Box>
              <View>
                <Button bordered onPress={showDatepicker}>
                  Select Date
                </Button>
              </View>
              <View>
                <Button bordered onPress={showTimepicker}>
                  Select Time
                </Button>
              </View>
              <Center>
                <Text>selected: {date.toLocaleString()}</Text>
              </Center>
              {show && (
                <View>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                </View>
              )}
              <Button
                bordered
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                Set Remainder
              </Button>
            </Stack>
          </FormControl>
        </VStack>
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Alert</Modal.Header>
            <Modal.Body>
              <Center>
                {doctorName && (
                  <Text>You will be notified for this Appointment</Text>
                )}
                {!doctorName && <Text>Please Specify the Doctor Name</Text>}
              </Center>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
    </View>
  );
};

export default DocAppointment;
