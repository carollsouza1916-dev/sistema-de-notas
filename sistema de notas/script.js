
// Função para calcular a média do estudante

function calcularMedia() {

    // Capturando os valores dos campos

    let nome = document.getElementById("nome").value.trim();

    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    // Pegando a área onde o resultado será mostrado

    let resultado = document.getElementById("resultado");

    // Verificando se o nome foi preenchido

    if (nome === "") {

        resultado.innerHTML = `
            <h2>Atenção!</h2>
            <p class="erro">Digite o nome do estudante.</p>
        `;

        return;
    }

    // Verificando se todas as notas foram preenchidas

    if (nota1 === "" || nota2 === "" || nota3 === "") {

        resultado.innerHTML = `
            <h2>Atenção!</h2>
            <p class="erro">Preencha todas as três notas.</p>
        `;

        return;
    }

    // Transformando os valores em números

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    // Verificando se as notas estão entre 0 e 10

    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {

        resultado.innerHTML = `
            <h2>Nota inválida!</h2>
            <p class="erro">
                As notas devem estar entre 0 e 10.
            </p>
        `;

        return;
    }

    // Calculando a média aritmética

    let media = (nota1 + nota2 + nota3) / 3;

    // Variáveis para armazenar a situação

    let situacao = "";
    let classe = "";

    // Verificando a situação acadêmica

    if (media >= 7) {

        situacao = "Aprovado";
        classe = "aprovado";

    } else if (media >= 5) {

        situacao = "Recuperação";
        classe = "recuperacao";

    } else {

        situacao = "Reprovado";
        classe = "reprovado";

    }

    // Exibindo o resultado na página

    resultado.innerHTML = `
        <h2>Resultado da Consulta</h2>

        <p><strong>Estudante:</strong> ${nome}</p>

        <p><strong>Nota 1:</strong> ${nota1.toFixed(1)}</p>

        <p><strong>Nota 2:</strong> ${nota2.toFixed(1)}</p>

        <p><strong>Nota 3:</strong> ${nota3.toFixed(1)}</p>

        <p class="media">
            Média: ${media.toFixed(2)}
        </p>

        <p class="${classe}">
            Situação: ${situacao}
        </p>
    `;

}


// Função para limpar os campos

function limparCampos() {

    document.getElementById("nome").value = "";

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";

    // Voltando a mensagem inicial

    document.getElementById("resultado").innerHTML = `
        <h2>Resultado da Consulta</h2>

        <p>Preencha os dados para consultar a média.</p>
    `;

}
