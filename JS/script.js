$(document).ready(function(){
    let botao_principal = (".botao");
    let container_do_formulario = (".container_do_formulario");
    let botao_fechar = (".fechar");
   


    $(botao_principal).click(function(){
        $(this).hide();  
        console.log("Primeira linha esta funcionando")
        $(container_do_formulario).show();  
        console.log("Segunda linha está funcionando")                       
        
  })

  $(botao_fechar).click(function(){
    $(container_do_formulario).hide();
    console.log("O botao fechar está funcionando")
    $(botao_principal).show();
    console.log("O botao principal apareceu")
})
 

    
   



})