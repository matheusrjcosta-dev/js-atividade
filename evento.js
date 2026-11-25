        onst botao = document.getElementById("btn")
        const mensagem = document.getElementById("mensagem")

        botao.addEventListener("click", function(){
            mensagem.textContent = "Voce clicou no botão!"
        })