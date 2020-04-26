
export const operationsDate = {
    getCurrentDate() {
        let currentDate = new Date();

        let date = +currentDate.getDate();
        date = this.dateFormatCorrect(date);

        let month = +currentDate.getMonth() + 1;
        month = this.dateFormatCorrect(month);

        let year = +currentDate.getFullYear();

        let hours = +currentDate.getHours();
        hours = this.dateFormatCorrect(hours);

        let minutes = +currentDate.getMinutes();
        minutes = this.dateFormatCorrect(minutes);

        return `${date}.${month}.${year} ${hours}:${minutes}`
    },

    dateFormatCorrect(value) {
        if (value < 10) {
            value = `0${value}`
        }
        return value
    }
};