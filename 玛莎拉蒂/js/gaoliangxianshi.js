/**
 * Created by Administrator on 2017/6/12.
 */
$(function () {
    //鼠标进入的时候,当前的li的透明度为1,其他的li标签透明度,0.5
    $(".chedui>ul>li").mouseover(function () {
        //当前的li的兄弟元素的透明度变暗
        $(this).siblings("li").css("opacity",0.3);
        $(this).css("opacity",5);
    });
    $(".chedui").mouseout(function () {
        //.find()方法,针对当前的元素找里面的一些其他的元素
        $(this).find("li").css("opacity",5);
    });
});
