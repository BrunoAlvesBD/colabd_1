
export default function Contatos(){
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Contatos</h1>
        <p>E-mail: colabdfrg2023@gmail.com</p>
        <p>Renata (41) 9 9659 6463 / Bruno (43) 9 9164 4607</p>
        <br/>
        <h4>Venha nos fazer uma visita!!</h4>
        <br/>
  
        {/* Adicione o iframe do Google Maps com estilos para centralizar */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.525078229441!2d-49.311670789228664!3d-25.65388327732557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcff615383746f%3A0xd2b7e463cb4037a2!2sR.%20Espanha%2C%20150%20-%20Na%C3%A7%C3%B5es%2C%20Fazenda%20Rio%20Grande%20-%20PR%2C%2083823-048!5e0!3m2!1spt-BR!2sbr!4v1705513997466!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: '0', margin: '0 auto' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa do Google"
        ></iframe>
      </div>
    );
  };
  
  