import Link from "next/link";
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Anderson" subtitulo="Teste Sub" />
      <Cabecalho titulo="Frontend" />
      <Cabecalho titulo="Cabeçalho" />
      <Cabecalho titulo="React" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />
      <Link href="/cards">Página do Exercício de Cards</Link><br />

    </main>
  );
}
