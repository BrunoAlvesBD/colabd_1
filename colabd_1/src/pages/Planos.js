

export default function Planos() {
  const servicos = [
    {
      id: 1,
      nome: 'Posto de trabalho em mesa compartilhada.',
      imagem: 'imagens/servico1.jpg',
      descricao: 'R$5,00 a hora',
    },
    {
      id: 2,
      nome: 'Sala privativa para reuniões e/ou exposição.',
      imagem: 'imagens/servico2.jpg',
      descricao: 'R$ 22,50 a hora',
    },
    {
      id: 3,
      nome: 'Sala grande para workshops e treinamentos para até 30 pessoas.',
      imagem: 'imagens/servico2.jpg',
      descricao: 'R$ 37,50 a hora',
    },
    {
      id: 4,
      nome: 'O espaço todo para evento sem equipe de serviço.',
      imagem: 'imagens/servico2.jpg',
      descricao: 'R$ 190,00 a hora',
    },
    {
      id: 5,
      nome: 'Impressão de documentos.',
      imagem: 'imagens/servico2.jpg',
      descricao: 'R$ 0,20 a página',
    },
    {
      id: 6,
      nome: 'Endereço comercial para recebimento de correspondências e encomendas de pequeno porte.',
      imagem: 'imagens/servico2.jpg',
      descricao: 'R$ 50,00 por mês ',
    },
    
    
    // Adicione mais serviços conforme necessário
  ];

  return (
    <div className="service-cards-container">
      {servicos.map((servico) => (
        <div key={servico.id} className="service-card">
          <img src={servico.imagem} alt={servico.nome} />
          <h3>{servico.nome}</h3>
          <p>{servico.descricao}</p>
        </div>
      ))}
    </div>
  );
}
