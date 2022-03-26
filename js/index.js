$(document).ready(function() {
    const DATE_TARGET = new Date('08/27/2022 0:01 AM'); // mm/dd/aaaa

    const SPAN_DAYS = $('#days');
    const SPAN_HOURS = $('#hours');
    const SPAN_MINUTES = $('#minutes');
    const SPAN_SECONDS = $('#seconds');

    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    function updateCountdown() 
    {
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
    
        SPAN_DAYS.html(REMAINING_DAYS);
        SPAN_HOURS.html(REMAINING_HOURS);
        SPAN_MINUTES.html(REMAINING_MINUTES);
        SPAN_SECONDS.html(REMAINING_SECONDS);
    }

    updateCountdown();
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});
