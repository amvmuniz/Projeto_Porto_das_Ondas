document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    let campos = ["nomeCompleto", "cpf", "telefone", "endereco", "cartaoCredito"];
    let valido = true;

    campos.forEach(id => {
        let campo = document.getElementById(id);
        if (campo.value.trim() === "") {
            campo.classList.add("is-invalid"); // Adiciona borda vermelha nos campos vazios
            valido = false;
        } else {
            campo.classList.remove("is-invalid");
        }
    });

    if (!valido) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Preencha todos os campos para concluir o cadastro!");
    }
});

function mascaraCPF(campo) {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o primeiro ponto
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o segundo ponto
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço final
    campo.value = valor; // Atualiza o campo com a máscara
}

function mascaraTelefone(campo) {
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres que não sejam números
    valor = valor.replace(/^(\d{2})(\d)/, "($1)$2"); // Adiciona os parênteses ao DDD
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço no número
    campo.value = valor; // Atualiza o campo com a máscara
}

function mascaraCartao(campo) {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número
    valor = valor.replace(/(\d{4})(\d)/, "$1 $2"); // Insere o primeiro espaço
    valor = valor.replace(/(\d{4})(\d)/, "$1 $2"); // Insere o segundo espaço
    valor = valor.replace(/(\d{4})(\d)/, "$1 $2"); // Insere o terceiro espaço
    campo.value = valor; // Atualiza o campo com a máscara
}

document.getElementById("mensagem").addEventListener("input", function() {
    let maxCaracteres = 200;
    let restante = maxCaracteres - this.value.length;
    document.getElementById("contador").textContent = restante + " caracteres restantes";
});

function searchSite(event) {
    event.preventDefault(); // Impede recarregamento da página

    let query = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".container .row .col-md-4"); // Seleciona os produtos
    
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(query) ? "block" : "none"; // Mostra ou oculta os itens
    });
}