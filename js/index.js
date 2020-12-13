function editar(id, txt_tarefa){

    //criar um form de edicao
    let form = document.createElement('form')
    form.action = 'index.php?pag=index&acao=atualizar'
    form.method = 'post'
    form.className = 'row'

    //criar um input para entrada do texto
    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'col-9 form-control'
    inputTarefa.value = txt_tarefa

    //criar input hidden para guardar o id da tarefa
    let inputId = document.createElement('input')
    inputId.type = 'hidden'
    inputId.name = 'id'
    inputId.value = id

    //criar um button para envio do form
    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'col-3 btn btn-info'
    button.innerHTML = 'Atualizar'

    //incluir inputTarefa no form
    form.appendChild(inputTarefa)

    //incluir inputId no form
    form.appendChild(inputId)

    //incluir button no form
    form.appendChild(button)

    //selecionar a div tarefa
    let tarefa = document.getElementById('tarefa_'+id)

    //limpar o texto da tarefa para inclusão do form
    tarefa.innerHTML = ""

    //incluir form na página
    tarefa.insertBefore(form, tarefa[0])

}

function remover(id){
    location.href = 'index.php?pag=index&acao=remover&id='+id;
}

function marcarRealizada(id) {
    location.href = 'index.php?pag=index&acao=marcarRealizada&id='+id;
}