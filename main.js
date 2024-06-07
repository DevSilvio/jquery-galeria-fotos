$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaImg = $('#addImgNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${novaImg}"/>`).appendTo(novoItem);
        $(`
        <div class="imagem-link">
            <a href="${novaImg}" title="ver imagen em tamanho real" target="_blank">
                ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#addImgNova').val('');
    })
})