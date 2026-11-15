
document.addEventListener("DOMContentLoaded", function () {


    const form = document.querySelector(".calculadora");

    const fixarValoresBtn = document.getElementById("fixarValoresBtn");
    const resetarValoresBtn = document.getElementById("resetarValoresBtn");

    const medicamentos = document.querySelectorAll(".medicamento");

    const quantidadeInputs = document.querySelectorAll(".quantidade-input");
    const precoInputs = document.querySelectorAll(".preco-input");

    const resultado = document.getElementById("resultado");



    if (fixarValoresBtn) {

        fixarValoresBtn.addEventListener("click", function (event) {

            event.preventDefault();


            const existePreco = [...precoInputs].some(input =>
                input.value.trim() !== ""
            );

            if (!existePreco) {
                alert("Você ainda não deu valor em nenhum dos medicamentos");
                return;
            }

            medicamentos.forEach(medicamento => {

                const quantidadeInput = medicamento.querySelector(".quantidade-input");
                const precoInput = medicamento.querySelector(".preco-input");
                const descricao = medicamento.querySelector(".descricao");

                if (precoInput.value.trim() !== "") {
                    descricao.textContent = ` - R$ ${precoInput.value}`;
                } else {
                    descricao.textContent = "";
                }

                quantidadeInput.classList.remove("hidden");
                precoInput.classList.add("hidden");

            });

            alert("Valores foram fixados.");

        });

    }



    if (resetarValoresBtn) {

        resetarValoresBtn.addEventListener("click", function (event) {

            event.preventDefault();


            const existeValor = [...precoInputs, ...quantidadeInputs].some(input =>
                input.value.trim() !== ""
            );

            if (!existeValor) {
                alert("Não há valores para resetar");
                return;
            }

            medicamentos.forEach(medicamento => {

                const quantidadeInput = medicamento.querySelector(".quantidade-input");
                const precoInput = medicamento.querySelector(".preco-input");
                const descricao = medicamento.querySelector(".descricao");

                precoInput.value = "";
                quantidadeInput.value = "";

                descricao.textContent = "";

                precoInput.classList.remove("hidden");
                quantidadeInput.classList.add("hidden");

            });

            if (resultado) {
                resultado.textContent = "";
            }

            alert("Valores foram resetados.");

        });

    }



    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let total = 0;
            let existeValor = false;

            medicamentos.forEach(medicamento => {

                const quantidadeInput = medicamento.querySelector(".quantidade-input");
                const precoInput = medicamento.querySelector(".preco-input");

                const quantidadeValor = quantidadeInput.value.trim();
                const precoValor = precoInput.value.trim();

                // Só calcula quando quantidade e preço estão preenchidos
                if (quantidadeValor !== "" && precoValor !== "") {

                    existeValor = true;

                    const quantidade = Number(
                        quantidadeValor.replace(",", ".")
                    );

                    const preco = Number(
                        precoValor.replace(",", ".")
                    );

                    total += quantidade * preco;

                }

            });


            if (!existeValor) {
                alert("Não existe valor a calcular");
                return;
            }

            if (resultado) {
                resultado.textContent =
                    `R$ ${total.toFixed(2).replace(".", ",")}`;
            }

        });

    }



    function mostrarCamposQuantidade() {

        quantidadeInputs.forEach(input => {
            input.classList.remove("hidden");
        });

    }



    function ocultarCamposQuantidade() {

        quantidadeInputs.forEach(input => {
            input.classList.add("hidden");
        });

    }



    function limparValoresInputs() {

        precoInputs.forEach(input => {
            input.value = "";
        });

        quantidadeInputs.forEach(input => {
            input.value = "";
        });

    }



    precoInputs.forEach(input => {

        input.addEventListener("input", function () {

            if (
                input.value.trim() !== "" &&
                !Number.isInteger(Number(input.value))
            ) {

                alert("Por favor, insira apenas valores inteiros.");
                input.value = "";

            }

        });

    });



    quantidadeInputs.forEach(input => {

        input.addEventListener("input", function () {

            if (
                input.value.trim() !== "" &&
                !Number.isInteger(Number(input.value))
            ) {

                alert("Por favor, insira apenas valores inteiros.");
                input.value = "";

            }

        });

    });



    function abrirAba(url) {
        window.open(url, "_blank");
    }

    const linkedin = document.getElementById("linkedin");
    const twitter = document.getElementById("twitter");
    const github = document.getElementById("github");

    if (linkedin) {
        linkedin.addEventListener("click", function () {
            abrirAba("https://www.linkedin.com/in/aguiarwork/");
        });
    }

    if (twitter) {
        twitter.addEventListener("click", function () {
            abrirAba("https://x.com/AguiarWork");
        });
    }

    if (github) {
        github.addEventListener("click", function () {
            abrirAba("https://github.com/Aguiar-Work");
        });
    }


    const musica = document.getElementById("musicaFundo");
    const alertaMusica = document.getElementById("alertaMusica");

    const aceitarMusica = document.getElementById("aceitarMusica");
    const desligarMusica = document.getElementById("desligarMusica");

    if (musica) {

        musica.volume = 0.3;


        if (aceitarMusica) {

            aceitarMusica.addEventListener("click", function () {

                musica.play().catch(function (erro) {
                    console.error("Erro ao iniciar a música:", erro);
                });

                if (alertaMusica) {
                    alertaMusica.style.display = "none";
                }

            });

        }



        if (desligarMusica) {

            desligarMusica.addEventListener("click", function () {

                musica.pause();
                musica.currentTime = 0;

                if (alertaMusica) {
                    alertaMusica.style.display = "none";
                }

            });

        }

    }

});
