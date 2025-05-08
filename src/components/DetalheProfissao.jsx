import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetalhesProfissao = ({ profissao }) => {
  const navigate = useNavigate();

  // Exemplo de informações que você pode adicionar
  const detalhesProfissao = {
    caminhosPossiveis: ['Faculdade', 'Técnico', 'EAD', 'Estágio'],
    faixaSalarial: {
      inicial: 'R$ 3.000,00',
      media: 'R$ 6.500,00',
      topo: 'R$ 12.000,00',
    },
    cargosComuns: ['Júnior', 'Pleno', 'Sênior'],
    concursos: ['Concurso A', 'Concurso B'],
    plataformasDeEnsino: [
      { nome: 'Coursera', link: 'https://www.coursera.org' },
      { nome: 'Udemy', link: 'https://www.udemy.com' },
      { nome: 'Khan Academy', link: 'https://www.khanacademy.org' },
    ],
  };

  // Função para voltar para a página anterior
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem', backgroundColor: '#f9fafc' }}>
      <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', width: '100%', textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '1rem' }}>{profissao.nome}</h2>
        <img src={profissao.imagem} alt={profissao.nome} style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>{profissao.descricao}</p>
        <p style={{ fontSize: '16px', marginBottom: '30px' }}>{profissao.detalhes}</p>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Caminhos Possíveis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '16px' }}>
            {detalhesProfissao.caminhosPossiveis.map((caminho, index) => (
              <div key={index} style={{ padding: '6px 0', borderBottom: '1px solid #ddd' }}>
                {caminho}
              </div>
            ))}
          </div>
          
          <h3 style={{ fontSize: '24px', marginBottom: '10px', marginTop: '20px' }}>Faixa Salarial</h3>
          <div style={{ fontSize: '16px', marginBottom: '20px' }}>
            <p><strong>Inicial:</strong> {detalhesProfissao.faixaSalarial.inicial}</p>
            <p><strong>Média:</strong> {detalhesProfissao.faixaSalarial.media}</p>
            <p><strong>Topo:</strong> {detalhesProfissao.faixaSalarial.topo}</p>
          </div>

          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Cargos Comuns</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '16px' }}>
            {detalhesProfissao.cargosComuns.map((cargo, index) => (
              <div key={index} style={{ padding: '6px 0', borderBottom: '1px solid #ddd' }}>
                {cargo}
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Concursos Disponíveis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '16px' }}>
            {detalhesProfissao.concursos.length > 0 ? (
              detalhesProfissao.concursos.map((concurso, index) => (
                <div key={index} style={{ padding: '6px 0', borderBottom: '1px solid #ddd' }}>
                  {concurso}
                </div>
              ))
            ) : (
              <div style={{ fontSize: '16px', color: '#888' }}>Nenhum concurso disponível no momento.</div>
            )}
          </div>

          <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Plataformas de Ensino Recomendadas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '16px' }}>
            {detalhesProfissao.plataformasDeEnsino.map((plataforma, index) => (
              <div key={index} style={{ padding: '6px 0', borderBottom: '1px solid #ddd' }}>
                <a href={plataforma.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                  {plataforma.nome}
                </a>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleVoltar}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            width: '100%',
            marginTop: '30px',
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default DetalhesProfissao;
