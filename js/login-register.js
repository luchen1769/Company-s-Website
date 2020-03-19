// 当选中login时，取消signup class，加上login class
$("#login").click(function(){
    $(".switch span").removeClass("active");
    $(this).addClass("active");

    $(this).parents(".content").removeClass("signup");
    $(this).parents(".content").addClass("login");
    // 并且将按钮的文字改成登录
    $("form button").text("登录");
})
// 当选中signup时，取消login class，加上signup class
$("#signup").click(function(){
    $(".switch span").removeClass("active");
    $(this).addClass("active");

    $(this).parents(".content").removeClass("login");
    $(this).parents(".content").addClass("signup");
    // 并且将按钮的文字改成注册
    $("form button").text("注册");
})
// 如果选中输入框则添加focus class
$(".input input").on("focus",function(){
    $(this).parent().addClass("focus");
})
//当输入框内容为空时，取消focus class
$(".input input").on("blur",function(){
    if($(this).val()==="")
        $(this).parent().removeClass("focus");
})