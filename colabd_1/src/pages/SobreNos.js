import imagem1 from "../imagens/imagem1.png";
import imagem2 from "../imagens/imagem2.png";
export default function SobreNos() {
    return (
      <div>
        <section className="reasons-section">
          <h2>Nossa História</h2>
          <div >
          <p>Nascemos em 15 de dezembro de 2023 quando decidimos fomentar o empreendedorismo de Fazenda Rio Grande. 
Percebemos os números de nosso município e vimos como somos grandes e jovens, com a necessidade de iniciar um projeto, um sonho, um empreendimento.</p>
<p>Para fomentar o empreendedorismo é que pensamos em um coworking, porque ele gera a economia de poder estar próximo ao centro de Fazenda Rio Grande, com acesso facilitado ao Fórum, Prefeitura, e uma grande gama de serviços, por um preço acessível que permite que o empreendedor se importe apenas e tão somente com o desenvolvimento de sua atividade principal.</p> 

<p>Nossa missão é promover e fomentar o empreendedorismo, a fim de contribuir com o ambiente de negócios de Fazenda Rio Grande.
Nossa visão é de podermos estar juntos em grandes histórias empreendedoras que foram possibilitadas por meio do nosso coworking.
E nossos valores são Empreendedorismo, Acesso, Silêncio, Excelência, Café, Limpeza, Ambiente, Respeito, conexão de mentes e compartilhamento de ideias.</p>
          </div>

          </section>
  
        <div className="image-gallery">
          <img src={imagem1} alt="Imagem 1"

          className="responsive-image"
          style={{ width: '50%', height: '33%' }} 
          />
          <p className="reasons-section"
          style={{textAlign:'center'}}
          >Nossos serviços</p>
  
          <img src={imagem2} alt="Imagem 2" 
          className="responsive-image"
          style={{ width: '50%', height: '33%' }} 
          />
          <p className="reasons-section"
          style={{textAlign:'center'}}
          ></p>
  
          {/* Adicione mais imagens e legendas conforme necessário */}
        </div>
      </div>
    );
  }
  