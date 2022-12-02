import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            KanBan
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
