<?php
require "../../app_backend/tarefa.model.php";
require "../../app_backend/tarefa.service.php";
require "../../app_backend/conexao.php";

$tarefa = new Tarefa();
$tarefa->__set('tarefa', $_POST['tarefa']);

$conexao = new Conexao();

$tarefaService = new TarefaService($conexao, $tarefa);
$tarefaService->inserir();

header('Location: nova_tarefa.php?inclusao=1');

?>