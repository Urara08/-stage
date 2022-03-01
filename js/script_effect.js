//スタートのアニメーション
//閉まっている幕がでてきて、開き、消える。
$(function() {

	setTimeout(function open_curtain(){
    $("#curtain1").animate({width:30, height:1000},1000).fadeOut(3000);
    $("#curtain2").animate({width:30, height:1000},1000).fadeOut(3000);
})})
