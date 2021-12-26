import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";

const test_data = [];

export default function Home() {
  const [data, setData] = useState(test_data);
  const [id_gen, set_id] = useState(1);

  const addTask = (new_task) => {
    setData([
      {
        value: new_task,
        key: id_gen,
      },
      ...data,
    ]);
    set_id(id_gen + 1);
  };

  const deleteTask = (key) => {
    setData(data.filter((data) => data.key != key));
    set_id(id_gen - 1);
  };

  return (
    <Container>
      <Header>Task List</Header>
      {/* <TaskItem data={{ key: 1, value: "test" }}></TaskItem>
      <TaskItem data={{ key: 2, value: "test 2" }}></TaskItem> */}
      <ListContainer>
        <FlatList
          data={data}
          keyExtractor={data.key}
          renderItem={({ item }) => (
            <TaskItem data={item} deleteTask={deleteTask} />
          )}
        />
      </ListContainer>
      <InputContainer>
        <AddTask addTask={addTask} />
      </InputContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Header = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ListContainer = styled.View`
  flex: 1;
  width: 90%;
`;
