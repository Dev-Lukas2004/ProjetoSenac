/* eslint-disable jsx-a11y/anchor-is-valid */
import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
// import Logo from "../assets/logo.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import Lukas from "../assets/Lukas.jpeg";

var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>FindYourWay</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">Início</a>
              </li>
              <li>
                <a href="#intro">Sobre</a>
              </li>
              <li>
                <a href="#equipe">Equipe</a> {/* Novo item */}
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>OLÁ</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["SEJA BEM-VINDO"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "Aqui iremos Ajudar Você a achar sua Profissão",

                  "Clique no Botão para fazer o teste!",
                ]}
                loop={2}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          {/* <div className="about1">
            <h5>Full Stack Developer</h5>
          </div> */}
            <div className="hire">
            <button onClick={() => navigate('/quiz')}>Descubra o seu sonho</button>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                Quem Somos? <br />
                E o que fazemos? <br />
                
              </h2>
              <p>
              Somos uma equipe comprometida com a transformação da forma como os jovens escolhem suas carreiras. Acreditamos que decisões importantes como essa devem partir do autoconhecimento e não de pressões externas ou falta de informação. Foi com esse propósito que criamos o FindYourWay (FYW) — uma plataforma interativa que conecta quem a pessoa é com o que ela pode se tornar.

Unimos tecnologia, inteligência artificial e dados reais do mercado para oferecer uma experiência completa de orientação profissional. Através de quizzes personalizados, identificação de perfis comportamentais e sugestões de trilhas de carreira, ajudamos cada usuário a visualizar possibilidades concretas, com base em seus interesses, habilidades e valores.

Além disso, mostramos informações atualizadas sobre cursos, profissões, salários e caminhos de formação, permitindo simulações de rotas profissionais e reflexões sobre influências externas. O nosso objetivo é claro: dar suporte para que cada jovem tenha liberdade e clareza para construir um futuro alinhado com seus próprios sonhos e não com as expectativas dos outros.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content members" id="equipe">
  <div className="headline">
    <h1>Criadores do Projeto</h1>
    <p>Conheça quem está por trás do desenvolvimento da plataforma FindYourWay</p>
  </div>
  <div className="member-cards">
    <div className="card">
      <img src={require("../assets/Lukas.jpeg")} alt="Lukas" />
      <h3>Lukas</h3>
      <p>Desenvolvedor Fullstack</p>
      <p>Responsável pelo front-end e lógica da plataforma</p>
    </div>
    <div className="card">
      <img src={require("../assets/Lukas.jpeg")} alt="Membro 2" />
      <h3>Rodrigo</h3>
      <p>Designer UX/UI</p>
      <p>Criação da identidade visual e experiência do usuário</p>
    </div>
    <div className="card">
      <img src={require("../assets/Lukas.jpeg")} alt="Membro 3" />
      <h3>Natã</h3>
      <p>Analista de Dados</p>
      <p>Estruturação das trilhas e integração com IA</p>
    </div>
    <div className="card">
      <img src={require("../assets/Lukas.jpeg")} alt="Membro 3" />
      <h3>Lucas</h3>
      <p>Analista de Dados</p>
      <p>Estruturação das trilhas e integração com IA</p>
    </div>
    <div className="card">
      <img src={require("../assets/Lukas.jpeg")} alt="Membro 3" />
      <h3>Ryan</h3>
      <p>Analista de Dados</p>
      <p>Estruturação das trilhas e integração com IA</p>
    </div>
  </div>
</section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>Serviços que Oferecemos</h1>
          <p>
          No Mapa dos Sonhos, oferecemos uma experiência completa de orientação profissional com foco no autoconhecimento
            <br />
             e na escolha consciente. Nossos principais serviços incluem:
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Teste vocacional interativo</h2>
            <p>
            Quiz personalizado que analisa interesses, valores, habilidades e perfis comportamentais para identificar áreas profissionais compatíveis.<br />

            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="" />
            <h2>Sugestão de Profissões</h2>
            <p>
            Lista de carreiras alinhadas com o perfil do usuário, com descrições detalhadas, possibilidades de atuação, cargos futuros e faixa salarial. <br />
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Trilhas de carreira</h2>
            <p>
            Simulação de rotas profissionais com prós e contras, desde cursos técnicos e universitários até o mercado de trabalho e concursos públicos. <br />
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>banco de cursos e instituições</h2>
            <p>
            Sugestões de faculdades, escolas técnicas e plataformas online com base na trilha escolhida. <br />

            </p>
            
          </div>
        </div>
      </section>
    
      <section className="footer">
        <footer>
          <div className="text">
            <h1>FyndYourWay</h1>
            <h2>Siga-nos</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/in/somesh-dahatonde-7a04151b4/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-instagram" aria-hidden="true"></i>
              <a href="https://github.com/Dev-Lukas2004">
                {" "}
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <p>
            Copyright ©2025 Todos os direitos reservados. | Modelo criado por
            <span>
              <a href="https://github.com/Dev-Lukas2004 ">
                {" "}
                FyndYourWay{" "}
              </a>
            </span>
          </p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
