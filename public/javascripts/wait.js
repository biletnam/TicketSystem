/**
 * Created by Administrator on 2015/12/29 0029.
 */
function closediv()
{
    //CloseDiv
    document.body.removeChild(document.getElementById("bgDiv"));
    document.getElementById("msgDiv").removeChild(document.getElementById("msgTitle"));
    document.body.removeChild(document.getElementById("msgDiv"));
}
//��ʾ�ȴ�����
function showdiv(str)
{
    var msgw,
        msgh, bordercolor;
    msgw = 400; //��ʾ���ڵĿ��
    msgh = 100; //��ʾ���ڵĸ߶�
    bordercolor = "#336699";
//��ʾ���ڵı߿���ɫ
    titlecolor = "#99CCFF";
//��ʾ���ڵı�����ɫ

    var sWidth,
        sHeight;
    sWidth = window.screen.availWidth;
    sHeight = window.screen.availHeight;
    var bgObj = document.createElement("div");
    bgObj.setAttribute('id', 'bgDiv');
    bgObj.style.position = "absolute";
    bgObj.style.top = "0";
    bgObj.style.background = "#777";
    bgObj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
    bgObj.style.opacity = "0.6";
    bgObj.style.left = "0";
    bgObj.style.width = sWidth + "px";
    bgObj.style.height = sHeight + "px";
    document.body.appendChild(bgObj);
    var msgObj = document.createElement("div")
    msgObj.setAttribute("id", "msgDiv");
    msgObj.setAttribute("align", "center");
    msgObj.style.position = "absolute";
    msgObj.style.background = "white";
    msgObj.style.font = "12px/1.6emVerdana, Geneva, Arial, Helvetica, sans-serif";
    msgObj.style.border = "1pxsolid " + bordercolor;
    msgObj.style.width = msgw + "px";
    msgObj.style.height = msgh + "px";
    msgObj.style.top = (document.documentElement.scrollTop + (sHeight - msgh) / 2) + "px";
    msgObj.style.left = (sWidth - msgw) / 2 + "px";
    var title = document.createElement("h4");
    title.setAttribute("id", "msgTitle");
    title.setAttribute("align", "right");
    title.style.margin = "0";
    title.style.padding = "3px";
    title.style.background = bordercolor;
    title.style.filter = "progid:DXImageTransform.Microsoft.Alpha(startX=20,startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
    title.style.opacity = "0.75";
    title.style.border = "1pxsolid " + bordercolor;
    title.style.height = "18px";
    title.style.font = "12pxVerdana, Geneva, Arial, Helvetica, sans-serif";
    title.style.color = "white";
    //title.style.cursor= "pointer";
    //title.innerHTML= "�ر�";
    //title.onclick= closediv;
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
    var txt = document.createElement("p");
    txt.style.margin = "1em0";
    txt.setAttribute("id", "msgTxt");
    txt.innerHTML = str;
    document.getElementById("msgDiv").appendChild(txt);
}
//����F5
document.onkeydown
    = mykeydown;
function mykeydown()
{
    if (event.keyCode == 116) //����F5ˢ�¼�
    {
        window.event.keyCode = 0;
        return false;
    }
}