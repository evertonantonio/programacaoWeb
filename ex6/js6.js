Parse.serverURL = "https://parseapi.back4app.com"; 
Parse.initialize(
  "OlmySaa0191ZQnKbGdMdtCOIItxWpMWGk4EcYHJi","7VOPMagfiUsocNavqEWJh3F5dh0hVL6HYU3Pprqg" );

let dever = [];
const lista = document.getElementById("lista");
const inputAdicionar = document.getElementById("inputAdicionar");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const mostrar = document.getElementById("mostrar");
const feito = document.createElement("input");

const tarefas = Parse.Object.extend("tarefas");



function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < dever.length; ++i) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const txtLi = document.createTextNode(
      ` ${dever[i].atividade} ` 
    );

    const feito = document.createElement("input");
    feito.type = "checkbox";
    feito.value = "class", "feito";
    feito.checked = dever[i].concluido;
    feito.onclick = (evt) => atualizarDever(evt, dever[i]);

    const remover = document.createElement("button");
    const txtRemover = document.createTextNode("Remover");
    remover.setAttribute("objectId", "btRemove");

    const linha = document.createElement("hr");
    li.appendChild(txtLi);
    remover.appendChild(txtRemover);
    div.appendChild(li);
    div.appendChild(feito)
    div.appendChild(remover)
    div.appendChild(linha);
    lista.appendChild(div);
  }
}

const fetchTarefas = async () => {
  
  const query = new Parse.Query(tarefas);
  try {
    const results = await query.find();
    dever = [];
    for (const object of results) {
      const atividade = object.get('atividade')
      console.log(atividade);
      dever.push({atividade});
    }
    gerarLista();
  } catch (error) {
    console.log("Error while fetching Pessoa", error);
  }
};

function gerarAtividade(){
  if(inputAdicionar != " "){
    const adicionar = inputAdicionar.value;
    const atividade = adicionar
    create();
  
    function create() {
      novaTarefa = new tarefas();
      novaTarefa.set("atividade", atividade);
  
      novaTarefa.save().then(function(tarefas){
           console.log('nova tarefa inserida ' + tarefas.get("name"));
      }).catch(function(error){
           console.log('Error: ' + error.message);
      });
      inputAdicionar.value = "";
      setTimeout(function(){
        location.reload();
      },500)
  }
  }
}

const atualizarDever = async (evt, dever) => {
    dever.set('Concluido', evt.target.checked);
      try {
        const response = await dever.save();
        console.log(response.get('Concluido'));
        console.log('dever updated', response)
      } catch (error) {
        console.error('Error while updating dever', error);
        }
  };


botaoAdicionar.onclick = gerarAtividade;
fetchTarefas();
feito.onclick = atualizarDever;
