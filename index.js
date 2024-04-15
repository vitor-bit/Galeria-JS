const imagem1 = document.getElementById("img1")
const imagem2 = document.getElementById("img2")
const imagem3 = document.getElementById("img3")
const imagem4 = document.getElementById("img4")
const imagem5 = document.getElementById("img5")
const imagem6 = document.getElementById("img6")
const inputImagem = document.getElementById("selecionarImagem")
let arrayUrl = []
//localStorage.clear()
const removerImagem = (id) => {
    if(id === 1){
        localStorage.removeItem("imgLocal1")
        imagem1.src = ""
    }else if(id === 2){
        localStorage.removeItem("imgLocal2")
        imagem2.src = ""
    }else if(id === 3){
        localStorage.removeItem("imgLocal3")
        imagem3.src = ""
    }else if(id === 4){
        localStorage.removeItem("imgLocal4")
        imagem4.src = ""
    }else if(id === 5){
        localStorage.removeItem("imgLocal5")
        imagem5.src = ""
    }else if(id === 6){
        localStorage.removeItem("imgLocal6")
        imagem6.src = ""
    }
    
}


const enviarImagem = () => {
    if (arrayUrl.length === 0) {
        return
    } else {
        if (localStorage.getItem("imgLocal1") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem1.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal1", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else if (localStorage.getItem("imgLocal2") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem2.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal2", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else if (localStorage.getItem("imgLocal3") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem3.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal3", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else if (localStorage.getItem("imgLocal4") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem4.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal4", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else if (localStorage.getItem("imgLocal5") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem5.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal5", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else if (localStorage.getItem("imgLocal6") === null) {
            let ultimoIndice = arrayUrl.length - 1
            imagem6.src = arrayUrl[ultimoIndice]
            localStorage.setItem("imgLocal6", arrayUrl[ultimoIndice])
            arrayUrl = []

        } else {
            return
        }
    }
}

inputImagem.addEventListener("change", (e) => {
    const arquivo = e.target.files[0]
    const leitor = new FileReader()

    leitor.addEventListener("load", () => {
        arrayUrl.push(leitor.result)
    })

    if (arquivo) {
        leitor.readAsDataURL(arquivo)
    }
})