function validacaoForm(){
    if(document.getElementById("email").value==""){
        alert("Preencha o E-mail!");
        return false
    } else {
        if(document.getElementById("textArea").value==""){
            alert("Escreva uma mensagem!");
            return false
        } else {
            alert("Mensagem enviada!");
            limpaCampos();
        }  
    } 
}
function limpaCampos(){
    document.getElementById("email").value="";
    document.getElementById("textArea").value="";
}