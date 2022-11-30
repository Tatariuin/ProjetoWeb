var modo = true

function chama(){
   if(modo == true){
        modoEscuro()
   }
   else{
        modoClaro()
   }
}

function modoEscuro(){
    menu = document.getElementById("cab");
    conteudo = document.getElementById("conteudo");
    if(conteudo != null){
        conteudo.style.backgroundColor = "#4F4F4F"
    }
    menu.style.backgroundColor = "black"
    document.body.style.backgroundColor = "#696969"
    botao = document.getElementById("modoVisualiza")
    botao.innerHTML = "Modo claro"
    botao.style.backgroundColor = "white"
    modo = false
    formulario = document.getElementById("formulario")
    if(formulario != null){
        formulario.style.backgroundColor = "#C0C0C0"
    }
}
function modoClaro(){
    menu = document.getElementById("cab");
    conteudo = document.getElementById("conteudo");
    if(conteudo != null){
        conteudo.style.backgroundColor = "PowderBlue"
    }
    menu.style.backgroundColor = "DodgerBlue"
    document.body.style.backgroundColor = "white"
    botao = document.getElementById("modoVisualiza")
    botao.innerHTML = "Modo escuro"
    botao.style.backgroundColor = "black"
    modo = true
    formulario = document.getElementById("formulario")
    if(formulario != null){
        formulario.style.backgroundColor = "PowderBlue"
    }
}
function testaCamposLogin(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var erro  = document.getElementById("msgErro");
    erro.style.textAlign = "center"
    erro.style.marginLeft = "60px"
    if(nome.value == "" || senha.value == ""){

       erro.innerHTML = "Erro: Campo nome ou senha não preenchidos";
       erro.style.color = "red"
        return false;
        
    }
    return true
    

   

}