// Código Java para aparecer uma mensagem ao enviar o formulário

document.getElementById('contato').addEventListener('submit',function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});