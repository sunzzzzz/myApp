
$(function(){
    $(".submit").mouseenter(function(){
        $(this).css("background-color",'#87CEFF');
    });


    $(".submit").mouseleave(function(){
        $(this).css("background-color",'#8DB6CD')
    });

    $(".submit").on('click',function(){
       var usr =  $(".usr_input input").val();
       var pwd =  $(".psw_input input").val();
        verify(usr,pwd)
    })
})
function verify(usr,pwd){
    var data = {"username":usr,"password":pwd}
    $.ajax({
        url:'doLogin',
        type:'post',
        data:data,
        success:function(data){
           if(data.code == -1){
              layer.msg(data.message)
           }else if(data.code == 0){
               layer.msg(data.message)
           }else{
               layer.msg(data.message);
               location.href = '/home'
           }
         },
        error:function(){
            return
        },
        xhrFields:{}
    })
}

