import Input from 'components/Input';
import useBoards from 'hooks/use-boards';
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const AddTask = ({boardId, closeAdding}) => {
  const {addItem} = useBoards();
  const [data, setData] = useState({
    name: "",
    date: "",
    description: "",
    user: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(boardId, data);
    setData({
      name: "",
      date: "",
      description: "",
      user: "",
    });
    closeAdding();
  };

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={data.name}
        name="name"
        onChange={handleInput}
        placeholder="Enter new task"
      />
      <Input
        value={data.description}
        name="description"
        onChange={handleInput}
        placeholder="Description"
        className="mt-2"
      />
      <Input
        value={data.user}
        name="user"
        onChange={handleInput}
        placeholder="Assign User"
        className="mt-2"
      />
      <Input
        value={data.date}
        type="date"
        name="date"
        onChange={handleInput}
        placeholder="Date"
        className="mt-2"
      />
      <Button type="submit" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;
