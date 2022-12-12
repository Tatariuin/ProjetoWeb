var modo = true
var estouNoBody = false;

function estouNobody(){
    estouNoBody = true
}

function chama(){
   if(modo == true){
        modoEscuro()
   }
   else{
        modoClaro()
   }
}

function modoEscuro(){
    var menu = document.getElementById("cab");
    var conteudo = document.getElementById("conteudo");
    var p = document.getElementsByTagName("p")
    var h1 = document.getElementsByTagName("h1")
    var h2 = document.getElementsByTagName("h2")
    var rod = document.getElementById("rod")   
    var botao = document.getElementById("modoVisualiza")
    var formulario = document.getElementById("formulario")

    rod.style.backgroundColor = "black"
    if(conteudo != null){
        conteudo.style.backgroundColor = "#4F4F4F"
    }
    menu.style.backgroundColor = "black"
    document.body.style.backgroundColor = "#696969"
    
    
    if(estouNoBody == false){
        botao.style.backgroundImage = "url(../img/imgsButtons/sol.png)"
    }
    else{
        botao.style.backgroundImage = "url(img/imgsButtons/sol.png)"
    }

    botao.style.backgroundSize = "contain"
    botao.style.backgroundColor = "skyblue"
    modo = false
    
    if(formulario != null){
        formulario.style.backgroundColor = "#C0C0C0"
    }
   
    if(p != null){
        for(var i = 0;i < p.length;i++){
            p[i].style.color = "white"
        }
    }
    if(h1 != null){
        for(var i = 0;i < h1.length;i++){
            h1[i].style.color = "white"
        }
    }
    if(h2 != null){
        for(var i = 0;i < h2.length;i++){
            h2[i].style.color = "white"
        }
        
    }
}
function modoClaro(){
    var menu = document.getElementById("cab");
    var conteudo = document.getElementById("conteudo");
    var p = document.getElementsByTagName("p")
    var h1 = document.getElementsByTagName("h1")
    var h2 = document.getElementsByTagName("h2")
    var h1Unico = document.getElementById("titulo")
    var tituloForm = document.getElementById("tituloForm")
    var rod = document.getElementById("rod")
    var botao = document.getElementById("modoVisualiza")
    var formulario = document.getElementById("formulario")
     rod.style.backgroundColor = "DodgerBlue"

    if(conteudo != null){
        conteudo.style.backgroundColor = "PowderBlue"
    }
    menu.style.backgroundColor = "DodgerBlue"
    document.body.style.backgroundColor = "white"
    

    if(estouNoBody == false){
        botao.style.backgroundImage = "url(../img/imgsButtons/lua.png)"
    }
    else{
        botao.style.backgroundImage = "url(img/imgsButtons/lua.png)"
    }

    botao.style.backgroundSize = "contain"
    botao.style.backgroundColor = "black"
    modo = true
    
    if(formulario != null){
        formulario.style.backgroundColor = "PowderBlue"
    }
    
    if(p != null){
        for(var i = 0;i < p.length;i++){
            p[i].style.color = "black"
        }
    }

    if(h1 != null){
        for(var i = 0;i < h1.length;i++){
            h1[i].style.color = "#A020F0"
        }
    }
    if(h2 != null){
        for(var i = 0;i < h2.length;i++){
            h2[i].style.color = "#A020F0"
        }
    }
    h1Unico.style.color = "LightBlue"
    if(tituloForm != null){
        tituloForm.style.color = "#A020F0"
    }
}
function testaCamposLogin(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var erro  = document.getElementById("msgErro");
    erro.style.marginLeft = "87px";
    
    var user = new Object()
    user.usuario = "Tatariun"
    user.senha = "teresa"
    
    if(nome.value == ""){

        erro.innerHTML = "Erro: Campo nome não preenchido";
        erro.style.color = "red";
        nome.focus();
        
        return false;
        
    }
    if(senha.value == ""){
        erro.innerHTML = "Erro: Campo senha não preenchido";
        erro.style.color = "red"
        senha.focus()
       
        return false;
    }
    if(nome.value != user.usuario || senha.value != user.senha){
        erro.innerHTML = "Erro: Nome ou senha incorretos";
        erro.style.color = "red"
        return false;
    }
    return true
    

   

}
function testaCamposCadastro(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha")
    var repSenha = document.getElementById("repeteSenha")
    var msg = document.getElementById("msgErro")
    msg.style.color = "red"
    if(nome.value == ""){
       nome.focus()
       nome.style.backgroundColor = "rgb(228, 123, 123)"
        msg.innerHTML = "Campo de nome não preenchido"
        msg.style.textAlign = "center"
        return false
    }
    if(email.value == ""){
        email.focus()
        email.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de E-mail não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(senha.value == ""){
        senha.focus()
        senha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de senha não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(repSenha.value == ""){
        repSenha.focus()
        repSenha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de repetir senha não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(repSenha.value != senha.value){
        repSenha.focus()
        repSenha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Senha não correspondente <br> Por favor repita a senha corretamente"
         msg.style.textAlign = "center"
         return false
    }
    
    
    return true
}

