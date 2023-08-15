$( window ).on( "load", function() {
    $('[role="navigation"]').find("span:contains('Images')").parent('div.GKS7s').addClass("obvbg-images");
    $('[role="navigation"]').find("span:contains('Videos')").parent('div.GKS7s').addClass("obvbg-video");
    $('[role="navigation"]').find("span:contains('Maps')").parent('div.GKS7s').addClass("obvbg-maps");
    $('[role="navigation"]').find("span:contains('Shopping')").parent('div.GKS7s').addClass("obvbg-shop");
    $('[role="navigation"]').find("span:contains('News')").parent('div.GKS7s').addClass("obvbg-news");
});