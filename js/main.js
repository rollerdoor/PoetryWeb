// const $ = window.$;

$(document).ready(function () {
    document.title = "Dave's Australian Poetry Page";
    var myhead = "Dave's Australian Poetry Page";



    var loadfile = "./temp/body.htm";
    var welcometxt = "./temp/welcome.txt";

    var mh = document.querySelector('#welcome');


    var newstxt1 = "./temp/news1.txt";
    var newstxt2 = "./temp/news2.txt";
    var newstxt3 = "./temp/news3.txt";
    $(".leftbar").load(loadfile);
    $("#myhead").load(myhead);
    $(".news1").load(newstxt1);
    $(".news2").load(newstxt2);
    $(".news3").load(newstxt3);

    //  $(".news1").hide();
    // $(".news2").hide();
    $(".news3").hide();
    myhead = document.getElementsByClassName("welcome");
    myhead[0].innerHTML = "<h3>Dave's Australian Poetry Page</h3>";
    // $("#welcome").appendChild(welcometxt);
    // myhead[0].innerHTML = html."join('welcometxt');

    mynews = document.getElementsByClassName("newshead");
    mynews[0].innerHTML = "<h3>News</h3>";

    $(document).on('click', "a.home", function () {
        $(".poems").load("");
        $(".poems").hide(1);
        $("#welcome").show(1);
    });

    var lookup = {
        "bp01": 68,
        "bp02": 85,
        "bp03": 83,
        "bp04": 57,
        "bp05": 80,
        "bp06": 84,
        "bp07": 85,
        "bp08": 81,
        "bp09": 56,
        "bp10": 80,
        "bp11": 95,
        "bp12": 48,
        "bp13": 94,
        "bp14": 83,
        "bp15": 59,
        "bp16": 52,
        "bp17": 48,
        "bp18": 53,
        "bp19": 50,
        "bp20": 53,
        "bp21": 49,
        "bp22": 65,
        "bp23": 44,
        "bp24": 59,
        "bp25": 56,
        "bp26": 83,
        "bp27": 77,
        "bp28": 66,
        "bp29": 85,
        "bp30": 65,
        "bp31": 65,
        "bp32": 47,
        "bp33": 49,
        "bp34": 57,
        "bp35": 61,
        "bp36": 62,
        "bp37": 60,
        "bp38": 61,
        "bp39": 56,
        "hk01": 64,
        "hk02": 65,
        "hk03": 52,
        "hk04": 45,
        "hk05": 48,
        "hk06": 50,
        "hk07": 55,
        "hk08": 66,
        "hk09": 62,
        "hk10": 50,
        "hk11": 66,
        "hk12": 65,
        "hk13": 67,
        "hk14": 67,
        "hk15": 63,
        "hk16": 55,
        "hl01": 47,
        "hl02": 44,
        "hl04": 64,
        "hl05": 68,
        "hl07": 67,
        "hl08": 58,
        "hl09": 78,
        "hl10": 57,
        "hl11": 57,
        "hl12": 55,
        "hl13": 81,
        "hl14": 50,
        "hl15": 84,
        "hl16": 43,
        "hl17": 84,
        "hl18": 49,
        "hl19": 65,
        "hl20": 81,
        "hl21": 56,
        "hl22": 97,
        "hl23": 48,
        "hl24": 53,
        "hl25": 76,
        "hl26": 50,
        "hl27": 59,
        "hl28": 58,
        "hl29": 44,
        "hl30": 82,
        "hl31": 81,
        "hl32": 63,
        "hl33": 67,
        "hl34": 83,
        "hl35": 77,
        "hl36": 50,
        "hl37": 83,
        "hl38": 84,
        "hl39": 81,
        "hl40": 83,
        "hl41": 81,
        "hl42": 59,
        "jo01": 52,
        "jo02": 74,
        "jo03": 86,
        "jo04": 80,
        "jo05": 50,
        "jo06": 80,
        "jo07": 79,
        "jo08": 49,
        "jo09": 76,
        "jo10": 87,
        "op01": 58,
        "op02": 55,
        "op03": 78,
        "op04": 62,
        "op05": 82,
        "op06": 45,
        "op07": 63,
        "op08": 61,
        "op09": 52,
        "op10": 58,
        "op11": 81,
        "op12": 84,
        "op13": 54,
        "op14": 48,
        "op15": 60,
        "op16": 62,
        "op17": 50,
        "op18": 54,
        "op19": 83,
        "op20": 67,
        "op21": 49,
        "op22": 53,
        "op23": 55,
        "op24": 48,
        "op25": 75,
        "op26": 87,
        "op27": 72,
        "op28": 53,
        "op29": 90,
        "op30": 87,
        "op31": 81,
        "op32": 77,
        "op33": 90,
        "op34": 53,
        "op35": 83,
        "op36": 115,
        "op37": 50,
        "op38": 68,
        "op39": 51,
        "op40": 61,
        "op41": 77,
        "op42": 64,
        "op43": 65,
        "op44": 62,
        "op45": 60,
        "op46": 77,
        "op47": 53,
        "op48": 58,
        "op49": 45,
        "op50": 59,
        "xop1": 49,
        "xop2": 116,
        "xop3": 66
    };


    $(document).on('click', "a.p_text", function (event) {
        var myfile = "./temp/verse/" + (event.target.id) + ".htm";

        // ***  reserved for changing padding in class verse  ***
        var getfile = event.target.id;
        myfilelen = lookup[getfile];
        console.log(myfilelen);
        // console.log(lookup[getfile]);
        // console.log(getfile);
        mypad = 80 - myfilelen + 20;
        // document.getElementsByClassName("verse").style.marginLeft = mypad;
        console.log(mypad);

        $("#wid").hide(0);
        $("#welcome").hide(1);
        $(".poems").load(myfile);
        $(".poems").scrollTop(0);
        $(".poems").show(1);
    });
});