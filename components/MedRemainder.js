import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Modal,
  Text,
  View,
  VStack,
} from "native-base";
import { useRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { DateTimePickerAndroid } from "@react-native-community";

const MedRemainder = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  // model
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
      <Box w="400px" p="4" br="md" bg="cyan.50">
        <Center pb="2">
          <Text fontSize="lg">Select Date and Time to get remainder</Text>
        </Center>
        <VStack space={2}>
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
        </VStack>
        <Center>
          <Text py="2">selected: {date.toLocaleString()}</Text>
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
      </Box>

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
              <Text>You will be notified before 5 min</Text>
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
    </View>
  );
};

export default MedRemainder;
