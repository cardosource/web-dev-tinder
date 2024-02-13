const fotos = document.querySelectorAll("#passagemum, #passagemdois")
const fotoAtual = document.getElementById("foto")
const botaoMAIS = document.getElementById("mais")  
const detalhe = document.getElementById("opcao") 
const match = document.getElementById("escolha")
const marcado = document.getElementById("marcado")

function exibirFoto(){
    const [foto1, foto2] = fotos
    fotos.forEach(foto =>{
        foto.addEventListener("click",function(){
            if(foto.id === "passagemum"){
                fotoAtual.style.backgroundImage = `url("../dogis/imagem/luffy.jpeg")`
                
                console.log(fotoAtual)
                foto2.style.backgroundColor = "transparent"
                foto2.style.border = "1px solid #F4F4F4"
                foto1.style.border = "1px solid #040404"
                foto1.style.backgroundColor = "#F4F4F4"
                
            }else{
                fotoAtual.style.backgroundImage = `url("../dogis/imagem/zoro.jpg")`
                foto1.style.backgroundColor = "transparent"
                foto1.style.border = "1px solid #F4F4F4"
                foto2.style.border = "1px solid #040404 "
                foto2.style.backgroundColor = "#F4F4F4"
            }
        })
    })
}


function mais(botao){
    return function(detalhe){
        var contaClick = 0;
        botao.addEventListener('click',()=>{
            contaClick+=1
            if(contaClick == 1){
                for (let y = 1; y <= 67; y++) {
                    setTimeout(() => {
                        detalhe.style.marginTop = `${y}px`;
                    }, (67 + y) ); 
                }
            }else if( contaClick == 2){
                let y = 67
                let x = 1
                for ( y; y >= 1; y--) {
                
                    setTimeout(() => {
                        
                        detalhe.style.marginTop = `${y}px`;
                    }, (67 + y) );
                } 
             contaClick=0
            }
            
        
        })
        
    }
    }


function selecionado(indice){
    const opcaoEscolhida =  document.getElementById(indice)
    opcaoEscolhida.addEventListener('click', ()=>{
     if(opcaoEscolhida.id === "x"){
        
        match.style.height ="130px"
            marcado.innerHTML = "NÃO"
            marcado.style.color = "#F6506D"
            match.style.visibility = "visible"
            opcaoEscolhida.style.backgroundColor = "#F6506D"
            match.style.border = "2px solid #F6506D"
            
           }
     if(opcaoEscolhida.id === "estrela"){
            marcado.innerHTML = "SUPER LIKE"
            match.style.visibility = "visible"
            match.style.marginTop = "70px"
            match.style.width ="340px"
            match.style.height = "220px"
            opcaoEscolhida.style.backgroundColor = "#519CCA"
            match.style.border = "2px solid #519CCA"
            marcado.style.color = "#519CCA"
        }
     if(opcaoEscolhida.id === "coracao"){
            marcado.innerHTML = "LIKE"
            match.style.visibility = "visible"
            opcaoEscolhida.style.backgroundColor = "#03CC91"
            match.style.border = "2px solid #03CC91"
            marcado.style.color = "#03CC91"
            }
    })
}




var opcaoMarcada = (...funcoes)=>{
    return () =>(marcada)=>{
        return funcoes.map((ac,funcoes)=>{
            return funcoes(ac)
        },marcada) 
    }
}








//main
exibirFoto()
mais(botaoMAIS)(detalhe)
opcaoMarcada(
    selecionado("x"),
    selecionado("estrela"),
    selecionado("coracao")
)