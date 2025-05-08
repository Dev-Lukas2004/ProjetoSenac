import { useState } from 'react';
import DetalhesProfissao from './DetalheProfissao';

const perguntas = [
  {
    texto: "Em qual ambiente você se sente mais produtivo?",
    opcoes: [
      { texto: "Em um espaço calmo e sozinho", area: "Intrapessoal" },
      { texto: "Em grupo, trocando ideias", area: "Interpessoal" },
      { texto: "Em campo, com movimento constante", area: "Corporal" },
      { texto: "Em ambientes criativos e dinâmicos", area: "Criativa" },
    ],
  },
  {
    texto: "Você prefere resolver problemas...",
    opcoes: [
      { texto: "Com lógica e dados", area: "Lógica" },
      { texto: "Pensando em como as pessoas se sentem", area: "Interpessoal" },
      { texto: "Usando criatividade e inovação", area: "Criativa" },
      { texto: "Testando na prática, com as mãos", area: "Corporal" },
    ],
  },
  {
    texto: "Qual dessas atividades mais te atrai?",
    opcoes: [
      { texto: "Programar, analisar ou calcular", area: "Lógica" },
      { texto: "Ensinar, cuidar ou escutar", area: "Interpessoal" },
      { texto: "Criar arte, design ou escrever", area: "Criativa" },
      { texto: "Explorar a natureza, viajar ou cuidar de animais", area: "Naturalista" },
    ],
  },
  {
    texto: "Você se considera mais...",
    opcoes: [
      { texto: "Lógico e racional (INTJ, ISTP…)", area: "Lógica" },
      { texto: "Sensível e empático (INFJ, ENFP…)", area: "Interpessoal" },
      { texto: "Prático e objetivo (ESTJ, ISTJ…)", area: "Corporal" },
      { texto: "Criativo e expressivo (INFP, ENTP…)", area: "Criativa" },
    ],
  },
  {
    texto: "Com qual dessas frases você mais se identifica?",
    opcoes: [
      { texto: "Adoro entender como as coisas funcionam.", area: "Lógica" },
      { texto: "Gosto de ajudar os outros a se desenvolverem.", area: "Interpessoal" },
      { texto: "Tenho ideias o tempo todo e quero colocá-las no mundo.", area: "Criativa" },
      { texto: "Prefiro resolver as coisas com ação do que com palavras.", area: "Corporal" },
    ],
  },
  {
    texto: "Qual tipo de inteligência mais se destaca em você?",
    opcoes: [
      { texto: "Lógica-matemática", area: "Lógica" },
      { texto: "Interpessoal (relacionar-se bem com os outros)", area: "Interpessoal" },
      { texto: "Linguística (leitura, escrita, comunicação)", area: "Criativa" },
      { texto: "Corporal-cinestésica (movimento, coordenação)", area: "Corporal" },
      { texto: "Espacial-visual (desenho, visão 3D)", area: "Criativa" },
      { texto: "Intrapessoal (autoconhecimento)", area: "Intrapessoal" },
      { texto: "Musical, naturalista ou existencial", area: "Naturalista" },
    ],
  },
  {
    texto: "Você prefere um trabalho que exige mais:",
    opcoes: [
      { texto: "Análise, estratégia e planejamento", area: "Lógica" },
      { texto: "Comunicação, persuasão e empatia", area: "Interpessoal" },
      { texto: "Expressão artística ou criatividade", area: "Criativa" },
      { texto: "Movimento, ação e dinamismo", area: "Corporal" },
    ],
  },
  {
    texto: "Você se vê trabalhando mais com:",
    opcoes: [
      { texto: "Máquinas, sistemas ou códigos", area: "Lógica" },
      { texto: "Pessoas, times ou comunidades", area: "Interpessoal" },
      { texto: "Conceitos, ideias ou símbolos", area: "Criativa" },
      { texto: "Objetos, ferramentas ou ambientes físicos", area: "Corporal" },
    ],
  },
  {
    texto: "Como você lida com regras e estruturas?",
    opcoes: [
      { texto: "Prefiro ambientes organizados e com regras claras", area: "Lógica" },
      { texto: "Gosto de certa estrutura, mas valorizo flexibilidade", area: "Interpessoal" },
      { texto: "Regras rígidas me incomodam, prefiro liberdade", area: "Criativa" },
      { texto: "Depende da situação e da tarefa", area: "Intrapessoal" },
    ],
  },
  {
    texto: "O que é mais importante pra você em uma profissão?",
    opcoes: [
      { texto: "Estabilidade e bons salários", area: "Lógica" },
      { texto: "Propósito e impacto social", area: "Interpessoal" },
      { texto: "Liberdade criativa e inovação", area: "Criativa" },
      { texto: "Aventura, desafios e movimento", area: "Corporal" },
    ],
  },
  {
    texto: "Você prefere aprender...",
    opcoes: [
      { texto: "Com teoria e leitura aprofundada", area: "Lógica" },
      { texto: "Praticando e experimentando", area: "Corporal" },
      { texto: "Observando os outros e colaborando", area: "Interpessoal" },
      { texto: "Explorando sozinho e conectando ideias", area: "Intrapessoal" },
    ],
  },
  {
    texto: "Você gostaria de trabalhar com algo que...",
    opcoes: [
      { texto: "Exija pensamento lógico ou técnico", area: "Lógica" },
      { texto: "Esteja relacionado à saúde, educação ou pessoas", area: "Interpessoal" },
      { texto: "Envolva arte, música ou design", area: "Criativa" },
      { texto: "Explore ciência, meio ambiente ou biotecnologia", area: "Naturalista" },
    ],
  },
];

const profissões = {
  Lógica: [
    {
      id: 1,
      nome: 'Engenheiro de Software',
      descricao: 'Desenvolve sistemas e aplicativos.',
      icone: '🖥️',
      detalhes: 'Os engenheiros de software projetam, desenvolvem e mantêm aplicativos e sistemas, utilizando lógica de programação e análise de sistemas.',
      imagem: './img/EngenheirodeSoftware.jpeg', // Insira o caminho da imagem
    },
    {
      id: 2,
      nome: 'Cientista de Dados',
      descricao: 'Analisa dados para prever comportamentos.',
      icone: '📊',
      detalhes: 'Cientistas de dados extraem e analisam dados para gerar insights e previsões, utilizando matemática e estatística.',
      imagem: './img/CientistadeDados.jpeg', // Insira o caminho da imagem
    },
    {
      id: 3,
      nome: 'Engenheiro Civil',
      descricao: 'Planeja e constrói infraestruturas.',
      icone: '🏗️',
      detalhes: 'Engenheiros civis planejam e executam projetos de construção, como estradas, pontes e edifícios.',
      imagem: './img/EngenheiroCivil.jpeg', // Insira o caminho da imagem
    },
  ],
  Interpessoal: [
    {
      id: 1,
      nome: 'Psicólogo',
      descricao: 'Auxilia no bem-estar mental e emocional.',
      icone: '🧠',
      detalhes: 'Psicólogos ajudam as pessoas a entenderem e lidarem com suas emoções, comportamentos e problemas mentais.',
      imagem: './img/Psicólogo.jpeg', // Insira o caminho da imagem
    },
    {
      id: 2,
      nome: 'Professor',
      descricao: 'Ensina e forma cidadãos.',
      icone: '📚',
      detalhes: 'Professores transmitem conhecimento e preparam alunos para o futuro em diversos campos do saber.',
      imagem: './img/Professor.jpeg', // Insira o caminho da imagem
    },
    {
      id: 3,
      nome: 'Assistente Social',
      descricao: 'Atua com comunidades e políticas públicas.',
      icone: '🤝',
      detalhes: 'Assistentes sociais ajudam comunidades e indivíduos a lidarem com questões sociais e políticas.',
      imagem: './img/AssistenteSocial.jpeg', // Insira o caminho da imagem
    },
  ],
  Criativa: [
    {
      id: 1,
      nome: 'Designer Gráfico',
      descricao: 'Cria identidades visuais e artes digitais.',
      icone: '🎨',
      detalhes: 'Designers gráficos trabalham na criação de imagens, logotipos e materiais visuais para empresas e campanhas.',
      imagem: './img/DesignerGráfico.jpeg', // Insira o caminho da imagem
    },
    {
      id: 2,
      nome: 'Publicitário',
      descricao: 'Cria campanhas criativas.',
      icone: '✍️',
      detalhes: 'Publicitários são responsáveis pela criação de campanhas de marketing e publicidade, com foco em comunicação criativa.',
      imagem: './img/Publicitário.jpeg', // Insira o caminho da imagem
    },
    {
      id: 3,
      nome: 'Arquiteto',
      descricao: 'Projeta ambientes e espaços urbanos.',
      icone: '🏛️',
      detalhes: 'Arquitetos projetam e planejam edifícios, espaços públicos e interiores com foco em estética e funcionalidade.',
      imagem: './img/Arquiteto.jpeg', // Insira o caminho da imagem
    },
  ],
};

export default function QuizPage() {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [profissaoSelecionada, setProfissaoSelecionada] = useState(null); // Estado para armazenar a profissão selecionada

  const handleResposta = (area) => {
    const novasRespostas = [...respostas, area];
    setRespostas(novasRespostas);

    if (etapa + 1 < perguntas.length) {
      setEtapa(etapa + 1);
    } else {
      const contagem = novasRespostas.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      const areaFinal = Object.keys(contagem).reduce((a, b) =>
        contagem[a] > contagem[b] ? a : b
      );
      setResultado(areaFinal);
    }
  };

  const handleVerProfissao = (profissao) => {
    setProfissaoSelecionada(profissao); // Atualiza o estado com a profissão selecionada
  };

  const handleVoltar = () => {
    setProfissaoSelecionada(null); // Limpa o estado da profissão selecionada
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', backgroundColor: '#f9fafc' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', maxWidth: '700px', width: '100%', textAlign: 'center' }}>
        {!resultado && !profissaoSelecionada ? (
          <>
            <h2>{perguntas[etapa].texto}</h2>
            <div style={{ marginTop: '1.5rem' }}>
              {perguntas[etapa].opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => handleResposta(opcao.area)}
                  style={{
                    display: 'block',
                    width: '100%',
                    margin: '10px 0',
                    padding: '12px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  {opcao.texto}
                </button>
              ))}
            </div>
            <p style={{ marginTop: '20px', color: '#777' }}>
              Pergunta {etapa + 1} de {perguntas.length}
            </p>
          </>
        ) : profissaoSelecionada ? (
          // Exibe os detalhes da profissão selecionada
          <DetalhesProfissao 
            profissao={profissaoSelecionada} 
            onVoltar={handleVoltar} 
          />
        ) : (
          <div>
            <h2>Resultado do Teste</h2>
            <p style={{ fontSize: '20px', marginTop: '20px' }}>
              Seu perfil se identifica mais com a área: <strong>{resultado}</strong>
            </p>
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {profissões[resultado]?.slice(0, 10).map((profissao, index) => (
                <div key={profissao.id} style={{ padding: '20px', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                  <img src={profissao.imagem} alt={profissao.nome} style={{ width: '100%', borderRadius: '10px' }} />
                  <h3 style={{ marginTop: '15px' }}>{profissao.nome}</h3>
                  <p style={{ color: '#777' }}>{profissao.descricao}</p>
                  <button
                    onClick={() => handleVerProfissao(profissao)} // Passa a profissão para o estado
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginTop: '10px',
                      fontSize: '16px',
                      width: '100%', // Garanta que o botão ocupe toda a largura do card
                    }}
                  >
                    Ver Profissão
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}