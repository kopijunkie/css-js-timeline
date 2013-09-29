var TIMELINE = (function() {

    function displayTimelineScale(data) {
        var $timelineScale = $(".years"),
            presentYear = new Date().getFullYear(),
            yearZero = getYearStartPoint(data),
            year = yearZero;

        while (year <= presentYear) {
            if (year === yearZero) {
                $timelineScale.append('<li class="start">' + trimYear(year.toString()) + '</li>');
            } else if (year === presentYear) {
                $timelineScale.append('<li class="present">' + trimYear(year.toString()) + '</li>');
            } else {
                $timelineScale.append("<li>" + trimYear(year.toString()) + "</li>");
            }
            year++;
        }

        // widths are set as percentages to allow for a flexible widths chart
        // NOTE: there is a limit to how flexible the width can be as more years = more space needed
        $('ul.years li').width(getWidthPerYear(yearZero) + '%');
    }

    function getYearStartPoint(data) {
        var bandMembers = data.bandMembers,
            startAtYear = bandMembers[0].yearJoined;

        for (var i = 0; i < bandMembers.length; i++) {
            for (var j = 1; j < bandMembers.length; j++) {
                var personA = bandMembers[i],
                    personB = bandMembers[j];

                if (personB.yearJoined < personA.yearJoined && personB.yearJoined < startAtYear) {
                    startAtYear = personB.yearJoined;
                } else if (personA.yearJoined < personB.yearJoined && personA.yearJoined < startAtYear) {
                    startAtYear = personA.yearJoined;
                }
            }
        }

        return startAtYear;
    }

    function getWidthPerYear(yearStarted) {
        var present = new Date().getFullYear(),
            numberOfYears = (present - yearStarted) + 1,
            borderPadding = numberOfYears,
            timelineWidth = $(".timeline").width(),
            widthPerYear = (((timelineWidth-borderPadding)/numberOfYears)/timelineWidth)*100;

        return widthPerYear;
    }

    function trimYear(yearStr) {
        var trimmedYear = "";

        if (yearStr.length === 4) {
            trimmedYear = "'" + yearStr.slice(2,4);
        } else if (yearStr.length === 3 && yearStr.startsWith("'")) {
            trimmedYear = yearStr;
        } else if (yearStr.length === 2) {
            trimmedYear = "'" + yearStr;
        }

        return trimmedYear;
    }

    return {
        displayTimescale : displayTimelineScale,
        getYearStarted : getYearStartPoint
    };
})();