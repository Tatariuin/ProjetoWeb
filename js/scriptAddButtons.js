var cap = document.getElementById("capitulos")
var p = document.getElementsByTagName("p")
var span = document.getElementsByTagName("span")
var defineTamanho = 16

function addButtons(){
    for(var i = 1;i <= 87;i++){
        cap.innerHTML += "<a href='Mangas.html'><button class='capButtons'>capitulo "+i+"</button></a>"
        
    }
}

function aumentaTexto(){
    
    if(defineTamanho <= 25){
        defineTamanho += 1
    for(var i = 0;i < p.length;i++){
        p[i].style.fontSize = defineTamanho+"px"
        span[i].style.fontSize = defineTamanho+"px"
    }
    }

}
function DiminuiTexto(){
    
    if(defineTamanho >= 14){
        defineTamanho -= 1
    for(var i = 0;i < p.length;i++){
        p[i].style.fontSize = defineTamanho+"px"
        span[i].style.fontSize = defineTamanho+"px"
    }
    }
    
}


