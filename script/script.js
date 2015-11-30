/**
 * Created by Marta on 30.11.2015.
 */


$(document).ready(function () {

    var button=$('#button');

button.on('click',function (){
    var request = {};
    for (var i=1; i <= 20; i++) {
        request.action_id = i;

            $.ajax({
                url: 'index.php',
                type: 'POST',
                data: request,
                success: function (element) {
                    console.log('dziala');
                    console.log(element);
                },
                error: function (xhr, status, errorThrown) {
                    console.log('error error');
                    console.log(status);
                },
                complete: function (xhr, status) {
                    console.log('complete');
                    console.log(status);
                }
            });

        console.log('the end');
    }

});


});
