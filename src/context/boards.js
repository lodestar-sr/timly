import useLocalStorage from 'hooks/use-localstorage';

const {createContext, useState, useEffect} = require('react');

export const BoardContext = createContext();

function BoardProvider({children}) {
  const [boards, setBoards] = useState([
    {
      id: 1,
      color: "#DC3535",
      title: "Backlog",
      items: [],
    },
    {
      id: 2,
      color: "#31C6D4",
      title: "On progess",
      items: [],
    },
    {
      id: 3,
      color: "#3F0071",
      title: "Done",
      items: [],
    },
  ]);
  const [storedValue, setValue] = useLocalStorage("boards", boards);

  const addBoard = (title) => {
    setBoards((prevBoard) => {
      const newBoard = {
        id: new Date().valueOf(),
        title
      };

      return [...prevBoard, newBoard];
    });
    setValue(boards);
  };

  const addItem = (boardId, data) => {
    if (data?.name?.trim().length === 0) return alert('Task name can not be empty');

    const item = {
      id: new Date().valueOf(),
      ...data
    };

    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        board.items.push(item);
      }

      return board;
    });

    setBoards(updatedBoards);
    setValue(updatedBoards);
  };

  const removeItem = (boardId, itemId) => {
    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        board.items = board.items.filter(
          (item) => item.id !== itemId
        );
      }

      return board;
    });

    setBoards(updatedBoards);
    setValue(updatedBoards);
  };

  const moveItem = (currBoardId, nextBoardId, itemId) => {
    let item;
    for (let i = 0; i < boards.length; i++) {
      let board = boards[i];
      if (board.id === currBoardId) {
        item = board.items.find(item => item.id === itemId);
      }
    }

    const updatedBoards = boards.map(board => {
      if (board.id === currBoardId) {
        board.items = board.items.filter(item => item.id !== itemId);
      }

      if (board.id === nextBoardId) board.items.push(item);

      return board;
    });

    setBoards(updatedBoards);
    setValue(updatedBoards);
  };

  useEffect(() => {
    setBoards(storedValue);
  }, []);

  return (
    <BoardContext.Provider value={{boards, addBoard, addItem, removeItem, moveItem}}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
