$(document).ready(function() {
    const form = $('#formulario');
    let tarefas = [];

    $('header button').click(function() {
        $('.container').slideToggle();
    });

    form.on('submit', function(e) {
        e.preventDefault();
        adicionarLinha();
        atualizarTabela();
        atualizarTarefa();
    });

    function adicionarLinha() {
        const inputTarefa = $('#tarefa');
        const tarefa = inputTarefa.val();
        tarefas.push(tarefa);

        let linha = `<tr><td>${tarefa}</td><td><button type="button" class="sinal-positivo">Confirmar</button>`;
        linha += `<button type="button" class="sinal-negativo">Cancelar</button></td></tr>`;

        $('tbody').append(linha);
        inputTarefa.val('');
    }

    function atualizarTabela() {
        $('tbody').empty();
        for (const tarefa of tarefas) {
            let linha = `<tr><td>${tarefa}</td><td><button type="button" class="sinal-positivo"><img src="./imagens/confirmaçao.png" alt="sinal positivo"></button>`;
            linha += `<button type="button" class="sinal-negativo"><img src="./imagens/cancelar.png" alt="sinal negativo"></button></td></tr>`;
            $('tbody').append(linha);
        }
    }

    function atualizarTarefa() {
        $('.sinal-negativo').click(function() {
            const linha = $(this).closest('tr');
            const index = linha.index();
            tarefas.splice(index, 1);
            linha.remove();
        });

        $('.sinal-positivo').click(function() {
            const linha = $(this).closest('tr');
            linha.toggleClass('tarefa-concluida');
        });
    }
});