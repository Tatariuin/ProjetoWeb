var leitorManga = document.getElementById("imgsLeitorManga")
var b = document.getElementById("ModoDeLeitura")
var capManga = 1
numPag = document.getElementById("numPag")
function tipoPagina(){
    if(b.value == "casc" || b.value == "cascate"){  
        numPag.innerHTML = "";
        for(var i = 1;i <= 15;i++){

            leitorManga.innerHTML += "<img src='../img/MangaOrigin/"+i+"-o.jpg' class='pagsManga'>"
            }
    }
    else{
        
        leitorManga.innerHTML = "";
        
        if(capManga <= 15){
            leitorManga.innerHTML = "<img src='../img/MangaOrigin/"+capManga+"-o.jpg' class='pagsManga'>"
        }
        leitorManga.innerHTML += "<div style='margin-left:300px;width: 100px;background-color:red'><button style='background-size:contain;margin-left: 5px;background-image: url(../img/imgsButtons/esquerda.png);border-radius:100%;width: 40px;height:40px;float:left;'onclick='AnteriorPag()'></button><button style='background-image: url(../img/imgsButtons/direita.png);border-radius:100%;width: 40px;height:40px;float:right;margin-right: 5px;background-size:contain;' onclick='ProximaPag()'></button></div>"
        numPag.innerHTML = "Página atual: "+capManga
    }
}
function seguePag(){
    if(capManga != 16){
        capManga += 1;
    }
}
function voltaPag(){
    
    if(capManga != 1 ){
        
        capManga -= 1;
        
    }
}
function ProximaPag(){
    seguePag()
    tipoPagina()
}
function AnteriorPag(){
    voltaPag()
    tipoPagina()
}