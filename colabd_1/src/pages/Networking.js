import React, { useState } from 'react';
import netW1Image from '../imagens/netW1.jpg';
import netW2Image from '../imagens/netW2.jpg';
import netW3Image from '../imagens/netW3.jpg';
import logoColabdImage from '../imagens/logoColabd.png';
export default function Networking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    success: null,
    error: null,
  });

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    netW1Image,
    logoColabdImage,
    netW2Image,
    netW3Image,
  ];

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://colabd-form-default-rtdb.firebaseio.com/submissions.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ success: 'Formulário enviado com sucesso!', error: null });
        // Do something after successful submission, if needed
      } else {
        setFormStatus({ success: null, error: 'Erro ao enviar o formulário.' });
        // Handle submission errors, if needed
      }
    } catch (error) {
      setFormStatus({ success: null, error: 'Erro ao enviar o formulário.' });
      // Handle errors, if needed
    }

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
 <section> <h1>A importância de Conectar Negócios</h1> <p>O mundo contemporâneo é moldado por conexões. Em uma era onde a informação flui como um rio turbulento, as relações humanas se tornaram o tecido que une os destinos profissionais. Nesse cenário, o networking emerge como a habilidade crucial que não apenas abre portas, mas constrói pontes duradouras para o sucesso.</p> <p>O networking transcende a simples troca de cartões de visita em eventos corporativos. Na essência, trata-se da arte de cultivar relacionamentos autênticos, onde a confiança e a reciprocidade são as moedas de troca. Ao construir uma rede sólida, você não apenas amplia sua esfera de influência, mas também adquire acesso a uma fonte inestimável de conhecimento e oportunidades.</p> <p>Recrutadores e empregadores frequentemente valorizam recomendações e referências vindas de fontes confiáveis. A construção de uma reputação sólida no meio profissional, fomentada por conexões autênticas, pode ser um ativo valioso para avançar na trajetória profissional.</p> 
 <p>Por fim, a importância do networking transcende o âmbito profissional, estendendo-se à esfera pessoal. Relacionamentos sólidos no ambiente de trabalho podem contribuir para um ambiente mais colaborativo e positivo, favorecendo o desenvolvimento de habilidades interpessoais e o bem-estar no trabalho.</p> </section>

 <div className="carousel-container">
        <button className="carousel-btn" onClick={prevImage}>&lt;</button>
        <img className="carousel-image" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <button className="carousel-btn" onClick={nextImage}>&gt;</button>
      </div>


      <section>
        <h4>Sugestões, criticas, perguntas e demais assuntos? Nos envie:</h4>
        {/* ... (additional content) ... */}
      </section>

      <div className="contact-form-container">
        {formStatus.success && <p className="success-message">{formStatus.success}</p>}
        {formStatus.error && <p className="error-message">{formStatus.error}</p>}

        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
