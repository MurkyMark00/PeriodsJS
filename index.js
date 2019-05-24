function time() {
    var now = new Date();
    let timeString =
        addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());

    document.querySelector("#time").innerHTML = timeString;
    setTimeout(time, 1000);
}

function addZero(time) {
    return (time < 10 ? "0" + time : time);
}

const timesArray = [
    "09:00:00",
    "09:40:00",
    "09:50:00",
    "10:30:00",
    "10:40:00",
    "11:20:00",
    "11:30:00",
    "12:10:00",
    "12:50:00",
    "13:30:00",
    "13:40:00",
    "14:20:00",
    "14:30:00",
    "15:10:00",
    "15:20:00",
    "16:00:00",
];

const periodsArray = [
    "School Starts",
    "1. Ders",
    "Teneffüs",
    "2. Ders",
    "Teneffüs",
    "3. Ders",
    "Teneffüs",
    "4. Ders",
    "Öğlen Arası",
    "5. Ders",
    "Teneffüs",
    "6. Ders",
    "Teneffüs",
    "7. Ders",
    "Teneffüs",
    "8. Ders",
    "Test"
];

function period() {
    const timeString = document.querySelector("#time").innerHTML;

    for (let i = 0; i < timesArray.length; ++i) {

        if (timesArray[i] > timeString) {
            let tempPeriod = new Date("May 21, 2019 " + timesArray[i]);
            let tempTime = new Date("May 21, 2019 " + timeString);
            let newTime = new Date();

            newTime.setHours(tempPeriod.getHours() - tempTime.getHours());
            newTime.setMinutes(tempPeriod.getMinutes() - tempTime.getMinutes());
            newTime.setSeconds(tempPeriod.getSeconds() - tempTime.getSeconds());

            let displayTime =
                addZero(newTime.getHours()) + ":" + addZero(newTime.getMinutes()) + ":" + addZero(newTime.getSeconds());

            // If its the last period, we cant access periodsArray[i + 1]
            // so we display a unique message
            if (i === timesArray.length - 1) {
                document.querySelector("#period").innerHTML = `Current Period : 8. Ders<br><br>Time left until - : ${displayTime}`;
                break;
            }
            // Regular case
            else {
                document.querySelector("#period").innerHTML = `Current Period : ${periodsArray[i]}<br><br>Time left until ${periodsArray[i + 1]} : ${displayTime}`;
                break;
            }
        }
    }
    setTimeout(period, 1000);
}