// AULA 7: Função para validar e ENVIAR
function validarFormulario() {
    // 1. Pegar os elementos
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let form = document.getElementById('formContato'); // Pega o formulário inteiro

    // 2. Validação simples
    if (nome === "") {
        alert("Ops! Você esqueceu de digitar seu nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, informe seu e-mail para contato.");
        return;
    }

    if (mensagem === "") {
        alert("Escreva uma mensagem explicando sua necessidade.");
        return;
    }

    // 3. Feedback e ENVIO REAL
    // Como estamos local, avisamos que a tela vai mudar
    alert("Tudo certo, " + nome + "! Você será redirecionado para confirmar o envio.");
    
    // O comando mágico que dispara o formulário HTML
    form.submit();
}