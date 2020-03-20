const $ = window.$;

$(document).ready(function () {

    var loadfile = "./temp/body.htm";
    var welcometxt = "./temp/welcome.txt";
    var newstxt1 = "./temp/news1.txt";
    var newstxt2 = "./temp/news2.txt";
    var newstxt3 = "./temp/news3.txt";
    $(".leftbar").load(loadfile);
    $("#welcome").load(welcometxt);
    $(".news1").load(newstxt1);
    $(".news2").load(newstxt2);
    $(".news3").load(newstxt3);

    //  $(".news1").hide();
    // $(".news2").hide();
    $(".news3").hide();

    mynews = document.getElementsByClassName("newshead");
    mynews[0].innerHTML = "<h3>News</h3>";

    $(document).on('click', "a.home", function () {
        $(".poems").load("");
        $(".poems").hide(1);
        $("#welcome").show(1);
    });


    $(document).on('click', "a.p_text", function (event) {
        var myfile = "./temp/verse/" + (event.target.id) + ".htm";
        $("#welcome").hide(1);
        $(".poems").load(myfile);
        $(".poems").scrollTop(0);
        $(".poems").show(1);
    });


});