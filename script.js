var zar1=[];

$(".add").click(function() {
 var list=$(".picture-url").val();   
 zar1.push(list);
 $(".gallery").append("<img src='"+list+"'>");
 $(".picture-url").val("");
   
});

$("#gone").click(function(){  
   $("img:last").remove();
    $(".numTasks").text(length);
    
});