const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o módulo CORS

const app = express();
const port = 3001;

app.use(cors()); // Use o middleware CORS para permitir solicitações do React
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const formData = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use a variável de ambiente para o e-mail
        pass: process.env.EMAIL_PASSWORD, // Use a variável de ambiente para a senha
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use a variável de ambiente para o e-mail
      to: 'colabdfrg@gmail.com', // Substitua com o destinatário
      subject: 'Nova Mensagem do Formulário de Contato',
      text: `
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone}
        Mensagem: ${formData.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
