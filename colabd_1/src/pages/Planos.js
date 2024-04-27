

export default function Planos() {
  
  const servicos = [
    {
      id: 1,
      nome: 'Posto de trabalho em mesa compartilhada.',
      imagem: require('../imagens/servicos1.png'),
      descricao: 'R$5,00 a hora',
    },
    {
      id: 2,
      nome: 'Sala privativa para reuniões e/ou exposição.',
      imagem: require('../imagens/servicos2.png'),
      descricao: 'R$ 22,50 a hora',
    },
    {
      id: 3,
      nome: 'Sala grande para workshops e treinamentos para até 30 pessoas.',
      imagem: require('../imagens/servicos3.png'),
      descricao: 'R$ 37,50 a hora',
    },
    {
      id: 4,
      nome: 'O espaço todo para evento sem equipe de serviço.',
      imagem: require('../imagens/servicos4.png'),
      descricao: 'R$ 190,00 a hora',
    },
    {
      id: 5,
      nome: 'Impressão de documentos.',
      imagem: require('../imagens/servicos5.png'),
      descricao: 'R$ 0,20 a página',
    },
    {
      id: 6,
      nome: 'Endereço comercial para recebimento de correspondências e encomendas de pequeno porte.',
      imagem: require('../imagens/servicos6.png'),
      descricao: 'R$ 50,00 por mês ',
    },
  ];

  return (
    <div className="service-cards-container">
      {servicos.map((servico) => (
        <div key={servico.id} className="service-card">
          <img src={servico.imagem} alt={servico.nome} /> {/* Use .default para acessar a imagem carregada com require */}
          <h3>{servico.nome}</h3>
          <p>{servico.descricao}</p>
        </div>
      ))}
    </div>
  );
}
