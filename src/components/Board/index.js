import Button from 'components/CButton';
import React, {useState} from 'react';
import CCard from 'components/CCard';
import {Card, Table} from 'react-bootstrap';
import AddTask from 'components/AddTask';
import 'assets/Board.scss';
import CModal from 'components/CModal';

const Board = ({board}) => {
  const {title, items, color} = board;
  const [adding, setAdding] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showingTask, setShowingTask] = useState(null);

  const handleClick = () => setAdding(!adding);
  const closeAdding = () => setAdding(false);

  const handleShowTask = (task) => {
    setShowTask(true);
    setShowingTask(task);
  };

  const renderItems = items.map((item) => {
    return (
      <CCard
        key={item.id}
        boardId={board.id}
        item={item}
        showModal={() => handleShowTask(item)}
      />
    );
  });

  const renderShowTask = showTask && (
    <CModal
      show={showingTask}
      setShow={() => setShowTask(false)}
      title={showingTask.name}
    >
      <Table striped hover>
        <tr>
          <th>Name</th>
          <td>{showingTask.name || 'N/A'}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{showingTask.description || 'N/A'}</td>
        </tr>
        <tr>
          <th>Assigned User</th>
          <td>{showingTask.user || 'N/A'}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{showingTask.date || 'N/A'}</td>
        </tr>
      </Table>
    </CModal>
  );

  return (
    <Card className="card board">
      {renderShowTask}
      <Card.Title
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </Card.Title>

      <Card.Body>
        {renderItems}
        {adding && (
          <CModal
            title="Add new task"
            show={adding}
            setShow={closeAdding}
          >
            <AddTask
              boardId={board.id}
              closeAdding={closeAdding}
            />
          </CModal>
        )}

        <Button
          className={`mt-2 ${adding && "btn-danger"}`}
          onClick={handleClick}
        >
          {adding ? "Cancel" : "Add task"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Board;
