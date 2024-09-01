$( window ).on( "load", function() {
    $('[role="listitem"]').find("div:contains('Images')").addClass("obvbg-images");
    $('[role="listitem"]').find("div:contains('Videos')").addClass("obvbg-video");
    $('[role="listitem"]').find("div:contains('Maps')").addClass("obvbg-maps");
    $('[role="listitem"]').find("div:contains('Shopping')").addClass("obvbg-shop");
    $('[role="listitem"]').find("div:contains('News')").addClass("obvbg-news");
});