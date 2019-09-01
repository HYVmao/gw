$(document).ready(function(){
    $('#myTab a:first').css("color","#c90202")
});

function out1(){
    $('#myTab a:first').tab('show');
    $('#myTab a:first').css("color","#c90202");
    $('#myTab a:last').css("color","#000000");
}

function out2(){
    $('#myTab a:last').tab('show');
    $('#myTab a:last').css("color","#c90202");
    $('#myTab a:first').css("color","#000000");
}

