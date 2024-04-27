// Home.js

import servicosHome from "../imagens/servicosHome.png";
import home1 from "../imagens/home1.png";
export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Seja Bem-Vindo ao COLABD</h1>
      </header>

      <section className="intro-section">
      <img
          src={home1} // Substitua pelo caminho real da sua imagem
          alt="Home"
          className="responsive-image" // Adicione uma classe para estilos adicionais
          style={{ width: '100%', height: '33%' }} // Estilos para tornar a imagem responsiva
        />
        <p>
          Seja você um empreendedor visionário ou alguém em busca de um ambiente inspirador para trabalhar, nosso espaço compartilhado de trabalho é o lugar ideal para potencializar suas ideias e promover a ampliação de sua rede de contatos. Localizado estrategicamente no Centro de Fazenda Rio Grande, oferecemos um ambiente moderno, colaborativo e repleto de recursos para impulsionar o seu sucesso.
        </p>
      </section>

      <section className="reasons-section">
  <h2>Por Que Fazenda Rio Grande?</h2>
  <p>Fazenda Rio Grande oferece uma série de pontos relevantes ao desenvolvimento conforme informações do site da <a href="https://www.indespar.com.br">INDESPAR</a>:</p>

  <ul>
    <li>Localização privilegiada ao sul de Curitiba;</li>
    <li>148 mil habitantes;</li>
    <li>4º Município mais populoso da RMC, 12º do Paraná;</li>
    <li>Crescimento populacional 5,13% ao ano;</li>
    <li>Estimativa 200 mil novos habitantes até 2040;</li>
    <li>R$ 2,7 Bilhões em PIB;</li>
    <li>26ª Economia do Paraná;</li>
    <li>227% de crescimento econômico acumulado dos últimos 10 anos;</li>
    <li>15.400 CNPJs ativos, sendo 300 indústrias, 2.800 empresas e 12.600 MEIs;</li>
    <li>120 km do porto de Paranaguá;</li>
    <li>86 km de Santa Catarina;</li>
    <li>40 km até o aeroporto de São José dos Pinhais;</li>
    <li>Estrutura de parques e praças com grandes eventos;</li>
    <li>Entre outros tantos motivos.</li>
  </ul>
</section>


      <section className="services-section">
        <h2>Serviços Oferecidos</h2>
        <p>
          O COLABD oferece espaços para locação temporária comercial, eventos regulares para promover interações e conexões, além de diversos serviços complementares.
        </p>
        <img
          src={servicosHome} // Substitua pelo caminho real da sua imagem
          alt="Serviços Home"
          className="responsive-image" // Adicione uma classe para estilos adicionais
          style={{ width: '100%', height: 'auto' }} // Estilos para tornar a imagem responsiva
        />

<div className="pricing-option">
  <br/>
  <p>
    Posto de trabalho em mesa compartilhada a partir de R$ <span className="price">5,00</span> a hora;
  </p>
</div>

<div className="pricing-option">
  <p>
    Sala privativa para reuniões e/ou exposição a partir de R$ <span className="price">22,50</span> a hora;
  </p>
</div>

<div className="pricing-option">
  <p>
    Sala grande para workshops e treinamentos para até 30 pessoas a partir de R$ <span className="price">37,50</span> a hora;
  </p>
</div>

<div className="pricing-option">
  <p>
    O espaço todo para evento sem equipe de serviço a partir de R$ <span className="price">190,00</span> a hora;
  </p>
</div>

<div className="pricing-option">
  <p>
    Impressão de documentos a R$ <span className="price">0,20</span> a página;
  </p>
</div>

<div className="pricing-option">
  <p>
    Endereço comercial por R$ <span className="price">50,00</span> por mês para recebimento de correspondências e encomendas de pequeno porte.
  </p>
</div>

  </section>

      <section className="how-it-works-section">
        <h2>Como Funcionamos</h2>
        <ol className="steps-list">
        <li>Entre em contato conosco por meio do WhatsApp (41) 9 9659 6463 e agende sua visita e/ou horário;</li>
    <li>Compareça no dia e horário;</li>
    <li>Pague e use;</li>
    <li>Mantenha o local da mesma maneira que encontrou ao chegar;</li>
    <li>Volte sempre e convide alguém para também conhecer;</li>
    <li>Tome aquele café gostoso.</li>
  </ol>


        <div className="additional-info">
          <p>Ué?! Eu passo lá e está sempre fechado…</p>
          <p>Sim! Para maior segurança, aconchego e aquele silêncio delícia para trabalhar, o portão fica preferencialmente fechado.</p>
          <p>Fui direto e agora?</p>
          <p>Tranquilo! Entre em contato pelo WhatsApp (41) 9 9659 6463 para verificar se temos disponibilidade.</p>
          <p>No mínimo um cafézinho já podemos garantir.</p>
          <p>E se precisar atender mais de um cliente no dia, fica de boa, que conseguiremos pensar juntos em uma boa solução.</p>
          <p>Horário de Funcionamento: 9h às 17h</p>
          <p>Precisando de um evento em horário alternativo? Vamos coversar!</p>
        </div>
      </section>
    </div>
  );
}
