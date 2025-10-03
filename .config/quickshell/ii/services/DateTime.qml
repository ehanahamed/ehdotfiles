import qs.modules.common
import QtQuick
import Quickshell
import Quickshell.Io
pragma Singleton
pragma ComponentBehavior: Bound

/**
 * A nice wrapper for date and time strings.
 */
Singleton {
    property var clock: SystemClock {
        id: clock
        precision: SystemClock.Minutes
    }
    property string time: Qt.locale().toString(clock.date, Config.options?.time.format ?? "hh:mm")
    property string date: {
        let dateFmt = Config.options?.time.dateFormat;
        if (dateFmt.includes("{w}")) {
            let jsDate = new Date(clock.date);
            jsDate.setHours(0, 0, 0, 0);
            jsDate.setDate(jsDate.getDate() + 3 - ((jsDate.getDay() + 6) % 7));
            let week1 = new Date(jsDate.getFullYear(), 0, 4);
            let weekNum = 1 + Math.round(((jsDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
            dateFmt = dateFmt.replace("{w}", weekNum);
        }
        if (dateFmt.includes("{wd}")) {
            let weekday = new Date(clock.date).getDay();
            if (weekday == 0) {
                weekday = 7;
            }
            dateFmt = dateFmt.replace("{wd}", weekday);
        }

        Qt.locale().toString(clock.date, dateFmt ?? "dddd, dd/MM")
    }
    property string collapsedCalendarFormat: Qt.locale().toString(clock.date, "dd MMMM yyyy")
    property string uptime: "0h, 0m"

    Timer {
        interval: 10
        running: true
        repeat: true
        onTriggered: {
            fileUptime.reload()
            const textUptime = fileUptime.text()
            const uptimeSeconds = Number(textUptime.split(" ")[0] ?? 0)

            // Convert seconds to days, hours, and minutes
            const days = Math.floor(uptimeSeconds / 86400)
            const hours = Math.floor((uptimeSeconds % 86400) / 3600)
            const minutes = Math.floor((uptimeSeconds % 3600) / 60)

            // Build the formatted uptime string
            let formatted = ""
            if (days > 0) formatted += `${days}d`
            if (hours > 0) formatted += `${formatted ? ", " : ""}${hours}h`
            if (minutes > 0 || !formatted) formatted += `${formatted ? ", " : ""}${minutes}m`
            uptime = formatted
            interval = Config.options?.resources?.updateInterval ?? 3000
        }
    }

    FileView {
        id: fileUptime

        path: "/proc/uptime"
    }

}
