import React, { MutableRefObject, RefObject, useRef, useState } from "react";
import styled from "styled-components";

import Task from "../components/Task";
import links from "../routes/linksRout";

interface TaskProps {
  text: React.RefObject<HTMLInputElement> | undefined;
  completed: any;
}

interface TasksProps {
  text: string;
  completed: boolean;
}

const Section = styled.section`
  padding: 50px 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: clamp(24px, 4vw, 45px);
  color: #fff;
  text-shadow: 0 0 10px white;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const FormInput = styled.input`
  flex-grow: 1;
  background: gray;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #fff;
`;

const FormBtn = styled.button`
  border-radius: 8px;
  padding: 10px 15px;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const Todo = () => {
  const [todoList, setTodoList] = useState<TasksProps[]>([
    {
      text: "Node Js",
      completed: false,
    },
    {
      text: "MongoDB",
      completed: true,
    },
  ]);

  const fromText = useRef<any>();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const newTask: TaskProps = {
      text: fromText.current.value,
      completed: false,
    };
    const task: (TaskProps | TasksProps | any)[] = [...todoList, newTask];
    setTodoList(task);
    event.currentTarget.reset();
    console.log(task);
  };

  const deleteTask = (id: number) => {
    if (window.confirm("Do you want to delete this task")) {
      const tasks = todoList.filter((_, index: number) => index !== id);
      setTodoList(tasks);
    }
  };

  const changeStatus = (id: any) => {
    const tasks = [...todoList];
    tasks[id].completed = !tasks[id].completed;
    setTodoList(tasks);
  };
  return (
    <Section>
      <Title>Todo</Title>
      <Form onSubmit={handleFormSubmit}>
        <FormInput type="text" ref={fromText} />
        <FormBtn type="submit">Add</FormBtn>
      </Form>
      <ul>
        {todoList.map(({ text, completed }, index) => (
          <Task
            key={index}
            id={index}
            text={text}
            completed={completed}
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Todo;
