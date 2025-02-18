import Nav from "../../Components/Nav";
import profile from "../../assets/Photos/profile.png";
import { Body,MainTittles } from "./styles";

function MainBody () {
  return (
    <>
      <Nav />
      <Body>
        <MainTittles>
          <h3>Olá, sou a Letícia!</h3>
          <h1>
            Desenvolvedora Front-End <br /> UX/UI Designer
          </h1>
          <div>  
          <a>Entre em contato</a>
          <a>Portfolio</a>
          </div>
        </MainTittles>
        <img src={profile}
         width={400}
         alt="Foto de perfil" />
      </Body>
    </>
  );
}
export default MainBody;
