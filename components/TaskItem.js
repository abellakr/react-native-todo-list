import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components";

export default function TaskItem({ data, deleteTask }) {
  console.log(data);
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TaskNum>{data.key}.</TaskNum>
        <Title>{data.value}</Title>
      </View>
      <TouchableOpacity onPress={() => deleteTask(data.key)}>
        <MaterialIcons name="delete" size={24} />
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const TaskNum = styled.Text`
  font-size: 24px;
  padding-right: 5px;
`;
