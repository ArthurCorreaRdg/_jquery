$('button').click(function () {
    const texto = $('#input-list').val().trim();

    if (texto !== '') {
        let itemExiste = false;

        // Verifica se o item já existe na lista (case insensitive)
        $('ul li').each(function () {
            if ($(this).text().trim().toLowerCase() === texto.toLowerCase()) {
                itemExiste = true;
                return false; // Interrompe o loop
            }
        });

        if (itemExiste) {
            $('#mensagem-erro')
                .text('Este item já está na lista!')
                .fadeIn();

            setTimeout(function () {
                $('#mensagem-erro').fadeOut();
            }, 3000);
            return;
        }

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

        // Aplica a borda ao <form>
        $('form').addClass('borda-ativa');
    }
});
