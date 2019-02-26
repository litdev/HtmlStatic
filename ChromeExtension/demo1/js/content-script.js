$(function () {
    $(".content").each(function () {
        var asw =$(this).find("input[type=hidden]").val();
        // var obj =$("<h2 style=\"color:green\">"+asw+"</h2>");
        if(asw==0){
            asw="错误";
        }else if(asw == 1){
            asw="正确";
        }
        $(this).children("div")[0].append(asw);
        // if(asw == "C"){
        //     console.log("ss");            
        // }
    })
})