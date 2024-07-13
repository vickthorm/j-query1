$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault(); // Prevenir o comportamento padrão do formulário
        
        const enderecoDaNovaImagem = $('input[type="url"]').val(); // Capturar o valor do campo de URL

        const novoItem = $('<li style="display: none"></li>');
        $('<img>').attr('src', enderecoDaNovaImagem).appendTo(novoItem); // Criar a tag <img> com o src especificado

        $('<div class="overlay-img-link">' +
            '<a href="' + enderecoDaNovaImagem + '" target="_blank" title="Ver imagem em tamanho real">' +
            'Ver imagem em tamanho real' +
            '</a>' +
            '</div>').appendTo(novoItem); // Criar o overlay com o link

        novoItem.appendTo('ul'); // Adicionar o novo item à lista
        novoItem.fadeIn(1000);
        $('form').slideUp(); // Esconder o formulário após adicionar a imagem
    });
});
