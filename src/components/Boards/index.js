import Board from 'components/Board';
import useBoards from 'hooks/use-boards';
import React from 'react';

const Boards = () => {
  const {boards} = useBoards();

  return (
    <div className="row boards">
      {boards.map((board) => (
        <div className="mt-3 md-mt-0 col-md-4" key={board.id}>
          <Board board={board}/>
        </div>
      ))}
    </div>
  );
}

export default Boards;
