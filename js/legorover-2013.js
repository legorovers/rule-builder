$(function() {
    $( ".ruleOpts" ).sortable ({
        revert: true,
        update: function (event, ui) {
            $(ui.item).click(function(e) {
                console.log($(this).attr('class'));
                if ($(this).hasClass('Obstacle')) {
                    $("#obstacleDialog").dialog("open");
                }
                if ($(this).hasClass('Explosion')) {
                    $("#explosionDialog").dialog("open");
                }
                if ($(this).hasClass('Hole')) {
                    $("#holeDialog").dialog("open");
                }
                if ($(this).hasClass('Forward')) {
                    $("#forwardDialog").dialog("open");
                }
                if ($(this).hasClass('Back')) {
                    $("#backDialog").dialog("open");
                }

                if ($(this).hasClass('Left')) {
                    $("#leftDialog").dialog("open");
                }
                if ($(this).hasClass('Right')) {
                    $("#rightDialog").dialog("open");
                }
                if ($(this).hasClass('Stop')) {
                    $("#stopDialog").dialog("open");
                }
            })  ;
        }
    });
    $( ".ruleOpt" ).draggable({
        connectToSortable: ".ruleOpts",
        helper: "clone",
        revert: "invalid"
    });
    $("ul,li,ol").disableSelection();
});

$(document).ready(function () {
    $('.slider').slider();

    $('#explosionDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#obstacleDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#holeDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $('#forwardDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#backDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });


    $('#leftDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#rightDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#stopDialog').dialog({
        autoOpen: false,
        modal: false,
        resizable: false,
        buttons: {
            "Confirm": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
});