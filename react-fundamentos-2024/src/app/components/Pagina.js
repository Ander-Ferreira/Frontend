import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Fundamentos</Nav.Link>
                        <Nav.Link href="/clientes">Clientes</Nav.Link>
                        <Nav.Link href="/array">Array</Nav.Link>
                        <Nav.Link href="/cards">Cards</Nav.Link>
                        <Nav.Link href="/cards">Nomes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}
