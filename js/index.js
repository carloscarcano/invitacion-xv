$(document).ready(function() {
    cuentaRegresiva();
    obtenerInvitado();
});

function cuentaRegresiva()
{
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
}

function obtenerInvitado()
{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    var invitado = '';
    var nombre = $('#nombre-invitado');
    var personas = $('#numero-personas');

    if (!params.has('n'))
    {
        console.log('invitado no especificado');
        $('#datos-invitado').hide();
        return false;
    } 
    else 
    {
        $('#datos-invitado').show();
        invitado = params.get('n');
    }

    switch(invitado) 
    {
        case '1': nombre.html('Homerito Cárdenas'); personas.html('Personal'); break;
        case '2': nombre.html('Fam. Hernández Martínez'); personas.html('(4) Personas'); break;
        default:
            $('#datos-invitado').hide();
            break;
    }
}
