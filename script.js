function buttonclick()
{
    var menuList = document.getElementById("menu");
    var menuFollow = document.getElementById("follow");
    if (menuList.className == "menuOff")
    {

        menuList.className = "menuOn";

    } else
    {

        menuList.className = "menuOff";

    }

    if (menuFollow.className == "followOff")
    {

        menuFollow.className = "followOn";

    } else
    {

        menuFollow.className = "followOff";

    }

}
