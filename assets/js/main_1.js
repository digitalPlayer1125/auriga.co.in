function all_handle(){
    var $Investment1= $('#Investment1');
    $Investment1.unbind();
    var $Investment2= $('#Investment2');
    $Investment2.unbind();
    var $Energy1= $('#Energy1');
    $Energy1.unbind();
    var $Energy2= $('#Energy2');
    $Energy2.unbind();
    var $Innovative1= $('#Innovative1');
    $Innovative1.unbind();
    var $Innovative2= $('#Innovative2');
    $Innovative2.unbind();

    if($(document).width()<768){
        $Investment1.click(function(){
            $(this).toggle();
            $Energy1.toggle();
            $Innovative1.toggle();
            $Investment2.toggle();
        });
        $Energy1.click(function(){
            $(this).toggle();
            $Energy2.toggle();
            $Innovative1.toggle();
            $Investment1.toggle();
        });
        $Innovative1.click(function(){
            $(this).toggle();
            $Energy1.toggle();
            $Innovative2.toggle();
            $Investment1.toggle();
        });
    }
    else{
        $Investment1.hover(function(){
            $Investment2.toggle();
            $(this).toggle();
        });
        $Investment2.hover(function(){
            $Investment1.toggle();
            $(this).toggle();
        });
        $Energy1.hover(function(){
            $Energy2.toggle();
            $(this).toggle();
        });
        $Energy2.hover(function(){
            $Energy1.toggle();
            $(this).toggle();
        });
        $Innovative1.hover(function(){
            $Innovative2.toggle();
            $(this).toggle();
        });
        $Innovative2.hover(function(){
            $Innovative1.toggle();
            $(this).toggle();
        });
    }
}

$(window).resize(function(){all_handle();});
$(document).ready(function(){

    $("#Investment2").toggle();
    $("#Energy2").toggle();
    $("#Innovative2").toggle();

    setTimeout(
        ()=>{
            WebFont.load({
                google: {
                    families: ['Poppins:300,400,500,700']
                }
            });
            // console.log("HI");
            document.elementFromPoint(0, 0).click();
        }, 500
    );

    setTimeout(
        ()=>{
            $("#EnerImage").attr('src', '../img/Energy-Auriga.webp');
            $("#FinaImage").attr('src', '../img/Finance-Auriga.webp');
            $("#InovImage").attr('src', '../img/Innovation-Auriga.webp');
        }, 1000
    );

    $(document).click(function(){all_handle();});
    var new_date = new Date();
    var year_to = new_date.getFullYear();
    $(".year-footer").text(year_to);
});

function GoBack(a){
    var $Investment1= $('#Investment1');
    $Investment1.unbind();
    var $Investment2= $('#Investment2');
    $Investment2.unbind();
    var $Energy1= $('#Energy1');
    $Energy1.unbind();
    var $Energy2= $('#Energy2');
    $Energy2.unbind();
    var $Innovative1= $('#Innovative1');
    $Innovative1.unbind();
    var $Innovative2= $('#Innovative2');
    $Innovative2.unbind();
    if(a==="Innov"){
        $Innovative2.toggle();
        $Innovative1.toggle();
        $Investment1.toggle();
        $Energy1.toggle();
    }

    else if(a==="Prop"){
        $Investment1.toggle();
        $Investment2.toggle();
        $Innovative1.toggle();
        $Energy1.toggle();
    }

    else if(a==="Yo"){
        $Energy2.toggle();
        $Energy1.toggle();
        $Investment1.toggle();
        $Innovative1.toggle();
    }
}