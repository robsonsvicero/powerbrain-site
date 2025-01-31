// Este código adiciona um evento de clique ao elemento com o id 'emailButton'
document.getElementById('emailButton').addEventListener('click', sendMail);

// Esta é a função que será chamada quando o botão com id 'emailButton' for clicado
function sendMail (e) {
    // Previne o comportamento padrão do clique em um botão dentro de um formulário.
    e.preventDefault();
    
    // Obtém os valores dos campos de entrada do formulário com base em seus respectivos IDs.
    const mail = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;
    const name = document.getElementById('nome').value;

    // Verifica se todos os campos (e-mail, mensagem e nome) foram preenchidos pelo usuário.
    if (mail && message && name) {
        // Se todos os campos estiverem preenchidos, usa a biblioteca 'Email.js'
        // para enviar o e-mail com os detalhes fornecidos pelo usuário.
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "robsonsvicero.designer@gmail.com",
            Password: "EF050380E2394F79AF140C4E6C984B1ADB88",
            To: "adm@powerbrainbr.com",
            From: "robsonsvicero.designer@gmail.com",
            Subject: `${name} Enviando E-mail Com Javascript`,
            Body: `Email: ${mail} \n \n ${message}`,
          }).then(() => {
            // Após o envio bem-sucedido, exibe um alerta informando que a mensagem foi enviada
            alert('Mensagem enviada!');
            // E recarrega a página, para limpar os campos e permitir que o usuário envie mais e-mails.
            location.reload();
          });
    } else {
        // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
        alert('Preencha todos os campos!');
    }    
}