/**
 * Created by Marta on 30.11.2015.
 */


$(document).ready(function () {

    var button=$('#button');
    var button2=$('#button2');

   button2.on('click',function(){
       var divMain=$('#content');
var i=0;
      setInterval(function count(){i=i+1;var newNumber = $('<span>' + i + '</span>');
      divMain.append(newNumber);},2000);

   });

button.on('click',function (){
    var request = {};
    var divMain=$('#content');
    var divMain2=$('#content2');
    var triggerCount= 0;

    var i=0;

    setInterval (function(){
        i=i+1;
        request.action_id = i;
            $.ajax({
                url: 'index.php',
                type: 'POST',
                data: request,
                success: function (element) {

                    var obj = jQuery.parseJSON(element);
                    //console.log(obj);
                   switch (obj.type){
                       case 'display':{
                           var data = obj.data;
                           var newH1=$('<h1>'+ data["div.first"].h1.text_contents+'</h1>');
                           var newP=$('<p>'+ data["div.first"].p.text_contents+'</p>');
                           var newSpan=$('<span>'+ data["div.second"].span.span.text_contents+'</span>');
                           var newB=$('<b>'+ data["div.second"].b.text_contents+'</b>');
                           divMain.append(newH1);
                           divMain.append(newP);
                           divMain2.append(newSpan);
                           divMain2.append(newB);
                       }

                           break;
                       case 'trigger':{
                           triggerCount=triggerCount+1;
                           switch(triggerCount%3){
                               case 1:{
                                   if (divMain.hasClass('three')) {divMain.removeClass('three');}
                                   divMain.addClass('one');
                                   if (divMain2.hasClass('three')) {divMain2.removeClass('three');}
                                   divMain2.addClass('one');
                               }
                                   break;
                               case 2:{
                                   divMain.removeClass('one');
                                   divMain.addClass('two');
                                   divMain2.removeClass('one');
                                   divMain2.addClass('two');
                               }
                                   break;
                               case 0:{
                                   divMain.removeClass('two');
                                   divMain.addClass('three');
                                   divMain2.removeClass('two');
                                   divMain2.addClass('three');
                               }
                                   break;
                           }

                       }

                           break;
                       case 'null':
                       console.log('null');
                           break;
                       }
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

    },1000);

});


});
