// Declarar um array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // usei esta função (.trim) achei legal ela remove espaços em branco do início e do fim de uma cadeia de caracteres

    // Validar se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array e limpar o campo de entrada
    amigos.push(nome);
    input.value = "";

    // Atualizar a lista na interface
    atualizarListaAmigos();
}

// Atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    // Percorrer o array e criar elementos <li> para cada nome
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botão de remover ao lado de cada nome
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-button"); // Adicionar classe ao botão
        removeButton.onclick = () => removerAmigo(index);

        li.appendChild(removeButton);
        lista.appendChild(li);
    });
}

// Função para remover um amigo pelo índice
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o elemento pelo índice
    atualizarListaAmigos(); // Atualiza a lista exibida
}

// Função para sortear um amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return;
    }

    // Gerar um índice aleatório e selecionar um nome
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibir o amigo sorteado
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}

// Função para remover um amigo e limpar o sorteio
function removerAmigo(index) {
  amigos.splice(index, 1); // Remove o amigo do array
  atualizarListaAmigos(); // Atualiza a lista de amigos

  // Limpar o resultado do sorteio
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}