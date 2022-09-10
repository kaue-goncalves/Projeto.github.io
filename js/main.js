console.log(document) ;

document.querySelector('nav')
    .style.backgroundColor = 'pink' ;

var formulario = document.querySelector('form#form_contato');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);
    // Enviar esses dados por e-mail

    var parametros = {
        nome: nome,
        email: email,
        turma: turma,
        motivo: motivo,
        mensagem: mensagem,
    }


    emailjs.send('service_z1v7pl9' , 'template_2gvvmw5', parametros).then(function(resposta){
        alert('Sua mensagem foi enviada com sucesso!')

    }, function (erro) {
        console.log(erro)
    })
}) ;

