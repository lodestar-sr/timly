const {BoardContext} = require('context/boards');
const {useContext} = require('react');

const useBoards = () => useContext(BoardContext);

export default useBoards;
