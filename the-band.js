var THE_BAND = (function() {

    var presentYear = new Date().getFullYear();

    function displayBandName(bandName) {
        $('.band-name').text(bandName);
    }

    function displayBandDetails(data) {
        displayBandName(data.bandName);
        listBandMembers(data);
    }

    function listBandMembers(data) {
        var yearBandStarted = TIMELINE.getYearStarted(data),
            bandMembers = data.bandMembers,
            $bandMembersList = $(".band-members"),
            barPosition = {};

        for (var member in bandMembers) {
            if (bandMembers.hasOwnProperty(member)) {
                var person = bandMembers[member],
                    yearsInBand = getYearsActive(person);

                $bandMembersList.append('<li class="bar" id = "' + person.id + '">' + person.name +
                                        ' <em>(' + yearsInBand + ')</em></li>');

                barPosition = calculatePositionOnTimeline(person, yearBandStarted);

                if (barPosition.left) {
                    $('#' + person.id).css({left: barPosition.left + '%'});
                }
                $('#' + person.id).width(barPosition.width + '%');
            }
        }
    }

    function getYearsActive(person) {
        var yearsActive = "";

        if (!person.yearLeft) {
            yearsActive = person.yearJoined + " - present";
        } else {
            yearsActive = person.yearJoined + " - " + person.yearLeft;
        }

        return yearsActive;
    }

    function calculatePositionOnTimeline(person, yearBandStarted) {
        var yearsInBand = 1,
            widthPerYear = getWidthPerYear(yearBandStarted),
            barPosition = "",
            barProperties = { "left" : 0, "width" : 0};

        if (person.yearLeft) {
            yearsInBand += person.yearLeft - person.yearJoined;
        } else if (person.yearJoined < presentYear) {
            yearsInBand += presentYear - person.yearJoined;
        }

        barProperties.width = widthPerYear * yearsInBand;

        if (person.yearJoined > yearBandStarted) {
            var yearsFromStart = person.yearJoined - yearBandStarted;
            barProperties.left = (widthPerYear * yearsFromStart);
        }

        return barProperties;
    }

    function getWidthPerYear(yearBandStarted) {
        var present = new Date().getFullYear(),
            numberOfYears = (present - yearBandStarted) + 1,
            timelineWidth = $(".timeline").width(),
            widthPerYear = ((timelineWidth/numberOfYears)/timelineWidth)*100;

        return widthPerYear;
    }

    return {
        displayBand : displayBandDetails
    };

})();