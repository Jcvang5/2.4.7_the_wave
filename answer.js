$( document ).ready(function(){
    var height = $(window).height();
    var timer = setInterval(wave, 5300);

    function wave (){
        $("#div1").animate({top: height}, "slow", function(){
            $("#div2").animate({top: height}, "slow", function(){
                $("#div3").animate({top: height}, "slow", function(){
                    $("#div4").animate({top: height}, "slow", function(){
                        $("#div5").animate({top: height}, "slow", function(){
                            $("#div6").animate({top: height}, "slow", function(){
                                $("#div7").animate({top: height}, "slow", function(){
                                    $("#div8").animate({top: height}, "slow");
                                    });
                                });
                            });
                        });
                    });
                });
            }); 
            $("#div1").animate({top: 0}, "slow", function(){
                $("#div2").animate({top: 0}, "slow", function(){
                    $("#div3").animate({top: 0}, "slow", function(){
                        $("#div4").animate({top: 0}, "slow", function(){
                            $("#div5").animate({top: 0}, "slow", function(){
                                $("#div6").animate({top: 0}, "slow", function(){
                                    $("#div7").animate({top: 0}, "slow", function(){
                                        $("#div8").animate({top: 0}, "slow");
                                    });
                                });
                            });
                        });
                    });
                });
            }); 
        };
    });