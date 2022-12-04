var cap = document.getElementById("capitulos")
var p = document.getElementsByTagName("p")
var span = document.getElementsByTagName("span")
var defineTamanho = 16
for(var i = 1;i <= 83;i++){
    cap.innerHTML += "<button style='border-radius:15px;margin-top:10px;margin-left:26px;width: 130px;height:35px'>capitulo "+i+"</button>"
    
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


