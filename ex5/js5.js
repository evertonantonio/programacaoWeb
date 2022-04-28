Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "OlmySaa0191ZQnKbGdMdtCOIItxWpMWGk4EcYHJi", // This is your Application ID
  "7VOPMagfiUsocNavqEWJh3F5dh0hVL6HYU3Pprqg" // This is your Javascript key
);

let anime = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < anime.length; ++i) {
    //lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${anime[i].nome} - Titã: ${anime[i].titan} - Cor do cabelo: ${anime[i].cabelo} `
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchSNK = async () => {
  const SNK = Parse.Object.extend("SNK");
  const query = new Parse.Query(SNK);
  try {
    const results = await query.find();
    anime = [];
    for (const object of results) {
      const nome = object.get('nome')
      const titan = object.get('titan')
      const cabelo = object.get('cabelo')
      console.log(nome);
      console.log(titan);
      console.log(cabelo);
      anime.push({nome,titan,cabelo});
    }
    gerarLista();
  } catch (error) {
    console.log("Error while fetching Pessoa", error);
  }
};


fetchSNK();