var BAND_TIMELINE = (function() {

    var filename = "snow-patrol.json",
        bandId = filename.replace(".json","");

    $.ajax({
        type: "GET",
        url: filename,
        async: true,
        beforeSend: function(x) {
            if (x && x.overrideMimeType) {
                x.overrideMimeType("application/j-son;charset=UTF-8");
            }
        },
        dataType: "json",
        success: function(data){
            init(data);
        }
    });

    function init(data) {
        THE_BAND.displayBand(data);
        TIMELINE.displayTimescale(data);

        $(".bar").each(function() {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 3000);
        });
    }

})();