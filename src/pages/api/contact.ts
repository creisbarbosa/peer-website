export default async function Sendingblue( req, res) {

  const SibApiV3Sdk = require('@sendinblue/client')
  
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  
  require('dotenv').config()
  
  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.API_KEY;
  
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "Mensagem de Contato Website Peerdustry";
  sendSmtpEmail.htmlContent = "<html> <body> <h1>Mensagem de contato de {{params.name}}</h1> <h2><b>Empresa:</b> {{params.company}}</h2> <p><b>Mensagem:</b> {{params.message}}</p> <p><b>Telefone de contato:<b/> {{params.phone}}</p> <p>Email de contato: {{params.email}}</p> </body> </html>";
  sendSmtpEmail.sender = {email: 'cassio.reis@peerdustry.com', name: 'Contato Website Peerdustry'};
  sendSmtpEmail.to = [{email: 'cassio.reis@peerdustry.com', name: 'Cassio Reis'}];
  sendSmtpEmail.replyTo = {"email":"replyto@peerdustry.com"};
  sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
  sendSmtpEmail.params = {"name":`${req.body.name}`,"email":`${req.body.email}`,"company":`${req.body.company}`,"phone":`${req.body.phone}`,"message":`${req.body.message}`,}
  
  await apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(function(data) {
      return new Promise<void>((resolve, reject) => {
        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(data));
        resolve();
      })

    }, 
      function(error) {
        console.error(error);
  });
}
