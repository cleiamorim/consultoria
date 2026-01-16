// Função para validar e ENVIAR (Baseada na Aula 7)
function validarFormulario(event) {
    // Impede o envio imediato para podermos validar antes
    event.preventDefault();

    // 1. Pegar os elementos (usando o atributo 'name' ou 'id')
    // Nota: No seu HTML atual, os campos usam o atributo 'name'
    let nome = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let mensagem = document.getElementsByName('message')[0].value;
    let form = document.getElementById('formContato'); 

    // 2. Validação simples
    if (nome.trim() === "") {
        alert("Ops! Você esqueceu de digitar seu nome.");
        return;
    }

    if (email.trim() === "") {
        alert("Por favor, informe seu e-mail para contato.");
        return;
    }

    if (mensagem.trim() === "") {
        alert("Escreva uma mensagem explicando sua necessidade.");
        return;
    }

    // 3. Feedback e ENVIO REAL
    alert("Tudo certo, " + nome + "! Você será redirecionado para o sistema de envio seguro.");
    
    // O comando mágico que dispara o formulário HTML para o FormSubmit
    form.submit();
}

// Vincula a função ao clique do botão
document.getElementById('btnEnviar').addEventListener('click', validarFormulario);
