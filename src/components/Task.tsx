import styled from "styled-components";

const List = styled.li`
  display: flex;
  background-color: gray;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ListId = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;

const ListName = styled.p`
  flex-grow: 1;
`;

const Button = styled.button`
  border-radius: 8px;
  padding: 8px 15px;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const Task = ({ text, completed, id, changeStatus, deleteTask }: any) => {
  const handleDelete = () => deleteTask(id);
  const handleChange = () => changeStatus(id);
  return (
    <List>
      <ListId>{id + 1}</ListId>
      <ListName>{text}</ListName>
      <input onChange={handleChange} type="checkbox" checked={completed} />
      <Button onClick={handleDelete}>Delete</Button>
    </List>
  );
};

export default Task;
