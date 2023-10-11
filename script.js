$( document ).ready(function() {
    console.log("test");
var HEIGHT = $(window).height();

    function moveDown(divId) {
        $("#" + divId).animate({top: HEIGHT}, 1500, function () {
            moveUp(divId);
        });
    }

    function moveUp(divId) {
        $('#' + divId).animate({top: 0}, 1500, function () {
            // Check if it's the last div
            if (divId === 'div8') {
                // Set a delay before starting the next wave
                setTimeout(startNextWave, 50);
            }
        });
    }

    function startNextWave() {
        // Reset the position for all divs
        $(".move").css("top", "0");
        wave();
    }

    function wave() {
        var divIds = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8"];

        // Iterate through each div and initiate the wave effect
        divIds.forEach(function (divId, index) {
            setTimeout(function () {
                moveDown(divId);
            }, index * 1325);
        });
    }

    // Start the initial wave
    wave();

    // Set interval for continuous waves 8 * 5300(for each interval)
    setInterval(function () {
        wave();
    }, 42400);
});
