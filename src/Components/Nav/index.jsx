import { Head, Navbar } from "./styles";
import { NavItems, Button, ItemList } from "./styles";
import theme from "../../assets/Icons/theme.svg";
import Translate from "../../assets/Icons/translate.svg";

function Nav() {
  return (
    <Head>
      <img src={theme} width={30} alt="Theme" />
      <Navbar>
        <NavItems>
          <ItemList href="./">Home</ItemList>
          <ItemList href="./">Projetos</ItemList>
          <ItemList href="./">Serviços</ItemList>
          <ItemList href="./">Sobre Mim</ItemList>
          <img src={Translate} width={30} alt="Translate" />
        </NavItems>
      </Navbar>
      <Button href="./">Contato</Button>
    </Head>
  );
}

export default Nav;
