/**
 * Created by Pedro on 02/11/2016.
 */

// Abaixo esta detalhado o codigo para realiza o reporte e exibição dos erros
/*
$(function () {
    var tbReports = localStorage.getItem("tbReports");// Recupera os dados armazenados
    tbReports = JSON.parse(tbReports); // Converte string para objeto
    if(tbReports == null) {tbReports = [];}// Caso não haja conteúdo, iniciamos um vetor vazio

})

*/
function reportarOcorrencia() {

    var tbReports = localStorage.getItem("tbReports");// Recupera os dados armazenados
    tbReports = JSON.parse(tbReports); // Converte string para objeto
    if(tbReports == null) {tbReports = [];}// Caso não haja conteúdo, iniciamos um vetor vazio

    var ultimoaOcorrencia =localStorage.getItem("codigoOcorrencia");


    var ocorrencia =JSON.stringify({
        codigoOcorrencia:1,
        logitudeOcorrencia:$("#txtLongitude").val(),
        latitudeOcorrencia:$("#txtLatitude").val(),
        descricaoOcorrencia:$("#txtDescricao").val(),
        descricaoOcorrencia:$("#txtDescricao").val()
    });


    tbReports.push(ocorrencia);
    localStorage.setItem("tbReports",JSON.stringify(tbReports));
    var reports = JSON.parse(tbReports[1]);
    alert(reports.descricaoOcorrencia);
   // alert("Registro adicionado" +teste ) ;
   // return true;
    //console.log("info : ");
    
}
