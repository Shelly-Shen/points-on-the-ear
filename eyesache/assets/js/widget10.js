var a = $("*[data-am-sticky]");
$.each(a, function(index, ele) {
    var indexe = index + 1;
    $(this).click(function() {
        if (
            $("#do-not-say-" + indexe)
            .find(".am-panel-bd")
            .children(".container").length == 0
        ) {
            $("#do-not-say-" + indexe)
                .find(".am-panel-bd")
                .load("./files/content" + indexe + ".html");
        }
    });
});