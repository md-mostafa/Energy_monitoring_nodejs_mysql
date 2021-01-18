$(document).ready(function() {
    var data = [];
    $('input[type="checkbox"]').change(function() {  
        data.push(this.value);
        //console.log(data);
        $.ajax({
            url: '/load',
            type: 'POST',
            cache: false,
            data: {data: data},
            success: function(data){
              //alert('Success!')
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        })
    })

})

/*
$(document).ready(function() {
    $('input[type=checkbox]').onClick(function() {
        var favorite = [];
        $.each($("input[name='switch']:checked"), function(){
            favorite.push($(this).val());
        });
        alert("My favourite sports are: " + favorite.join(", "));
    })
    
})

*/