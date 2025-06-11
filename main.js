$('button').click(function () {
    const texto = $('#input-list').val();

    if (texto.trim() !== '') {
        const novoItem = $('<li></li>').text(texto);
        novoItem
            .addClass('item-lista')
            .hide();

        novoItem.click(function () {
            $(this).toggleClass('concluida');
        });

        novoItem.dblclick(function () {
            $(this).fadeOut(300, function () {
                $(this).remove();
                
                // Se não houver mais <li>, remove a borda
                if ($('ul li').length === 0) {
                    $('form').removeClass('borda-ativa');
                }
            });
        });

        $('ul').prepend(novoItem);
        novoItem.fadeIn('slow');

        $('#input-list').val('');

        // Aqui aplicamos a borda ao <form>
        $('form').addClass('borda-ativa');
    }
});
