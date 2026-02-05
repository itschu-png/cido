$(function(){
    // board li a를 클릭하면,
    $(".board> li> a").click(function(){
        // this의 부모(li)에 .on을 추가하고 형제요소들은 .on을 지운다.
        $(this).parent().addClass("on").siblings().removeClass("on")
    });
});