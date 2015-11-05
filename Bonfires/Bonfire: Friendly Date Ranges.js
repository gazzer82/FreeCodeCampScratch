function friendly(str) {
    //lets map the str array and turn it into two objects
    var dates = str.map(function(date){
        //split the string by the -
        var splitDate =  date.split('-');
        //turn it into an object
        return {
            year: parseInt(splitDate[0],10),
            month: parseInt(splitDate[1],10),
            day: parseInt(splitDate[2],10)
        };
    });
    //Sort the array in case the dates are sent in revers order
    dates = dates.sort();
    return function(){
        //First check to see if the years are the same
        if(dates[0].year == dates[1].year){
            //So years are the same, let's move on to see if the months are the same
            if(dates[0].month == dates[1].month){
                //Months are the same, so let's see if the days are also the same
                if(dates[0].day == dates[1].day){
                    //Ok these are the same dates so we can return the original date as single value in an array
                    return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day) + ', ' + dates[0].year];
                } else {
                    //So not the same day, but in the same month so we can just return the month and then the days.
                    return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day),getDay(dates[1].day)];
                }
            //Months are not the same so working out what to send back
            } else {
                //Lets check to see if the date is for this year.
                if(dates[0].year == new Date().getFullYear()){
                    //It is so we can just send back months and days
                    return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day), getMonth(dates[1].month) + ' ' + getDay(dates[1].day)];
                } else {
                    //It's not this year, so we need to tag the year onto the end of the returned dates
                    return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day), getMonth(dates[1].month) + ' ' + getDay(dates[1].day) + ', ' + dates[1].year];
                }
            }
        } else {
            //Years not the same, so lets check whether the dates fall within a couple of months of each other
            if(dates[0].month == 12 && (dates[1].month == 1 || dates[1].month == 2) && dates[0].year == new Date().getFullYear() && dates[1].year == new Date().getFullYear()+1){
                //Yes they do and it's this year so we don't need to send back the year
                return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day), getMonth(dates[1].month) + ' ' + getDay(dates[1].day)];
            } else {
                //Nope too far apart so we need to send the year with both
                return [getMonth(dates[0].month) + ' ' + getDay(dates[0].day) + ', ' + dates[0].year, getMonth(dates[1].month) + ' ' + getDay(dates[1].day) + ', ' + dates[1].year];
            }
        }
        //return dates;
    }();
}

function getDay(day){
    if (day == 1 || day == 21 || day == 31){
            return day + 'st';
    }else if (day == 2 || day == 22) {
            return day + 'nd';
    }else if (day == 3 || day == 23){
            return day + 'rd';
    }else if (day >=4 && day <= 20 || day >= 24 && day <= 30) {
            return day + 'th';
    }
}

function getMonth(date){
    var years = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return years[date-1];
}

console.log(friendly(['2015-12-01', '2017-02-03']));