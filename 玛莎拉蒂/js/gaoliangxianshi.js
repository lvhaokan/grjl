/**
 * Created by Administrator on 2017/6/12.
 */
$(function () {
    //�������ʱ��,��ǰ��li��͸����Ϊ1,������li��ǩ͸����,0.5
    $(".chedui>ul>li").mouseover(function () {
        //��ǰ��li���ֵ�Ԫ�ص�͸���ȱ䰵
        $(this).siblings("li").css("opacity",0.3);
        $(this).css("opacity",5);
    });
    $(".chedui").mouseout(function () {
        //.find()����,��Ե�ǰ��Ԫ���������һЩ������Ԫ��
        $(this).find("li").css("opacity",5);
    });
});
