
//获取视口高度
var height = $(window).height();
var width=$(window).width();
var ch = height-110;
$('.Content').css('height',ch+'px');
$('.Allcenter').css('height',height+'px'); 
$('.Allcenter').css('width',width+'px');
$('.Allcenter').css('margin','0 auto');    
//获取user
$('span.user').text(decodeURI(window.location.search.slice(6)));
//左侧导航栏下拉功能
$(".tiKu dt").on("click",function(){
    if($(".tiKu dd").attr("class")){
    $(".tiKu dd").removeAttr("class","hide");
        }
    else{
    $(".tiKu dd").attr("class","hide");
        }       
});
    $(".shiJ dt").on("click",function(){
    if($(".shiJ dd").attr("class")){
    $(".shiJ dd").removeAttr("class","hide");
        }
    else{
    $(".shiJ dd").attr("class","hide");
        }       
});
    $(".kaoS dt").on("click",function(){
    if($(".kaoS dd").attr("class")){
    $(".kaoS dd").removeAttr("class","hide");
        }
    else{
    $(".kaoS dd").attr("class","hide");
        }       
});
//点击加载模块功能
$(".navLeft dd").on("click",function(){
    $(".Content").load($(this).attr("page"));
    $(".navLeft dd").css("background","url('../images/zy/hover.png')");
    $(this).css("background","url('../images/theme/list_ui_li_act.png')"); 
    $(".navLeft dd").css("color","black");
    $(this).css("color","white");
    $(".navLeft dd").css("cursor","pointer");
    $(this).css("cursor","pointer");
});

//默认点击
$(".navLeft dd").eq(0).trigger("click");

