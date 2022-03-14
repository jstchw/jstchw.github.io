const start = new Date('2021-12-31T00:00:00')
let now = new Date()

document.querySelectorAll('.dating-since').forEach(function(el) {
    el.innerHTML = getDiffDays();
});

if (/[1$]$/.test(getDiffDays())) {
    document.querySelectorAll('.days').forEach(function(el) {
        el.innerHTML = ' день';
    });
} else if(/[234]$/.test(getDiffDays())) {
    document.querySelectorAll('.days').forEach(function(el) {
        el.innerHTML = ' дня';
    });
} else if(/[567890]$/.test(getDiffDays())){
    document.querySelectorAll('.days').forEach(function(el) {
        el.innerHTML = ' дней';
    });
}


function getDiffDays() {
    const oneDay = 1000 * 60 * 60 * 24
    return Math.round((now.getTime() - start.getTime()) / oneDay).toString()

}