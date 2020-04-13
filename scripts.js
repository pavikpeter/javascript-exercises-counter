let counter=0;

$("#buttonUp").click(function(){
    $("h2").text(++counter);
    
});   

$("#buttonDown").click(function(){
    $("h2").text(--counter);
}); 
