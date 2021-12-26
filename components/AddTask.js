import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";

export default function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addTask(text);
    setText("");
  };

  return (
    <Container>
      <InputContainer>
        <InputText
          onChangeText={(text) => setText(text)}
          placeholder="Add Task"
          value={text}
        ></InputText>
      </InputContainer>
      <Submit onPress={() => handleSubmit()}>
        <SubmitBtn>Submit</SubmitBtn>
      </Submit>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const InputContainer = styled.View`
  width: 75%;
  padding: 10px;
  border-radius: 20px;
  border: black;
`;

const InputText = styled.TextInput`
  padding-left: 10px;
`;

const Submit = styled.TouchableOpacity`
  border: black;
  border-radius: 30px;
`;

const SubmitBtn = styled.Text`
  padding: 7px;
`;
