$(document).ready(function() {
    var data = [];
    $('input[type="checkbox"]').change(function() {
        $.each($("input[type='checkbox']:checked"), function() {
            if(!data.includes($(this).val())){
                data.push($(this).val());
            }         
        });
        $.each($('input[type="checkbox"]:not(:checked)'), function() {
            if(data.includes($(this).val())){
                var index = data.indexOf($(this).val());
                data.splice(index, 1);
            }
        });
        
        console.log(data);
        $.ajax({
            url: '/load',
            type: 'POST',
            cache: false,
            data: {data: data.length === 0 ? '' : data},
            success: function(data){
              //alert('Success!')
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        })
    })

});


/*


$(document).ready(function() {
    var data = [];
    $('input[type="checkbox"]').change(function() {
        if($('input[type="checkbox"]').is(':checked')){
            if(!data.includes(this.value)){
                data.push(this.value);
            }
        }else if(!$('input[type="checkbox"]').is(":checked")) {
            if(data.includes(this.value)){
                var index = data.indexOf(this.value);
                data.splice(index, 1);
            }
        }
        
        console.log(data);
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


*/

