function updateTimer() {
    min = Math.floor(count/60);
    sec = count % 60;

    minutes.value = min;
    seconds.value = sec;

    count++;
}