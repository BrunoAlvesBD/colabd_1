export default function SobreNos() {
    return (
      <div>
        <section>
          <h2>Nossa História</h2>
          <p>Parágrafos sobre a história da empresa.</p>
        </section>
  
        <div className="image-gallery">
          <img src="imagens/imagem1.jpg" alt="Imagem 1" />
          <p>Legenda da Imagem 1</p>
  
          <img src="imagens/imagem2.jpg" alt="Imagem 2" />
          <p>Legenda da Imagem 2</p>
  
          {/* Adicione mais imagens e legendas conforme necessário */}
        </div>
      </div>
    );
  }
  