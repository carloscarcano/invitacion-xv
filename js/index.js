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
        case '1': nombre.html('Zuly Chable'); personas.html('2 Personas'); break;
        case '2': nombre.html('Miranda'); personas.html('2 Personas'); break;
        case '3': nombre.html('Sara Lazaro'); personas.html('2 Personas'); break;
        case '4': nombre.html('Gadi Cárdenas'); personas.html('2 Personas'); break;
        case '5': nombre.html('Itzel Aguilar'); personas.html('Personal'); break;
        case '6': nombre.html('Naomi Isabel'); personas.html('Personal'); break;
        case '7': nombre.html('Emi Cruz'); personas.html('Personal'); break;
        case '8': nombre.html('Vale Lopez'); personas.html('Personal'); break;
        case '9': nombre.html('Melanie Luna'); personas.html('Personal'); break;
        case '10': nombre.html('Aylen Dorantes'); personas.html('Personal'); break;
        case '11': nombre.html('Lizbeth Rosas '); personas.html('Personal'); break;
        case '12': nombre.html('Katya Arias'); personas.html('Personal'); break;
        case '13': nombre.html('Dulce Perales'); personas.html('Personal'); break;
        case '14': nombre.html('Darynka Gutiérrez'); personas.html('Personal'); break;
        case '15': nombre.html('Mari Fer Magaña'); personas.html('Personal'); break;
        case '16': nombre.html('Vale Mendoza'); personas.html('Personal'); break;
        case '17': nombre.html('Sthephania Portugal'); personas.html('Personal'); break;
        case '18': nombre.html('Lesly'); personas.html('Personal'); break;
        case '19': nombre.html('Pamela Ramos'); personas.html('Personal'); break;
        case '20': nombre.html('Sharon Naomi'); personas.html('Personal'); break;
        case '21': nombre.html('Martha Carrera'); personas.html('Personal'); break;
        case '22': nombre.html('Leyli Marian'); personas.html('Personal'); break;
        case '23': nombre.html('Arelis Fernanda'); personas.html('Personal'); break;
        case '24': nombre.html('María José'); personas.html('Personal'); break;
        case '25': nombre.html('Sofi'); personas.html('2 Personas'); break;
        case '26': nombre.html('Lesly'); personas.html('2 Personas'); break;
        case '27': nombre.html('Carolina'); personas.html('Personal'); break;
        case '28': nombre.html('Jossie Ek '); personas.html('Personal'); break;
        case '29': nombre.html('Mariana López'); personas.html('Personal'); break;
        case '30': nombre.html('Sarai Sánchez'); personas.html('Personal'); break;
        case '31': nombre.html('Celeste Palomeque'); personas.html('Personal'); break;
        case '32': nombre.html('Diego Sosa '); personas.html('Personal'); break;
        case '33': nombre.html('Jorge'); personas.html('Personal'); break;
        case '34': nombre.html('Axel Gabriel'); personas.html('Personal'); break;
        case '35': nombre.html('Ricardo Vasquez'); personas.html('Personal'); break;
        case '36': nombre.html('Derek Ortega'); personas.html('Personal'); break;
        case '37': nombre.html('Cristian Aguilar '); personas.html('Personal'); break;
        case '38': nombre.html('Santago Hernández'); personas.html('Personal'); break;
        case '39': nombre.html('Hector Uriel'); personas.html('Personal'); break;
        case '40': nombre.html('Hector Eduardo'); personas.html('Personal'); break;
        case '41': nombre.html('Jesus Alberto'); personas.html('Personal'); break;
        case '42': nombre.html('Andres Piedra'); personas.html('Personal'); break;
        case '43': nombre.html('Angel Palacios'); personas.html('Personal'); break;
        case '44': nombre.html('Angel Oriano'); personas.html('Personal'); break;
        case '45': nombre.html('Ian'); personas.html('Personal'); break;
        case '46': nombre.html('Manuel Morales'); personas.html('Personal'); break;
        case '47': nombre.html('Axel Jatniel'); personas.html('2 Personas'); break;
        case '48': nombre.html('Braulio Pacheco'); personas.html('2 Personas'); break;
        case '49': nombre.html('Braulio '); personas.html('Personal'); break;
        case '50': nombre.html('Sr. Antonio Abraham Hdez. y Fam.'); personas.html('3 Personas'); break;
        case '51': nombre.html('Sr. Jose Alfredo Abraham y Fam.'); personas.html('4 Personas'); break;
        case '52': nombre.html('Petra Hernández Cruz'); personas.html('Personal'); break;
        case '53': nombre.html('Abuelitos Coco y Tato'); personas.html('2 Personas'); break;
        case '54': nombre.html('Juan Carlos Abraham Hernández'); personas.html('Personal'); break;
        case '55': nombre.html('Angie Miranda Cabrera Abraham'); personas.html('4 Personas'); break;
        case '56': nombre.html('Ana María Frias Zapata'); personas.html('Personal'); break;
        case '57': nombre.html('Ana Cristina Cabrera Frias'); personas.html('3 Personas'); break;
        case '58': nombre.html('Sr. Eduardo Cárdenas y Fam.'); personas.html('4 Personas'); break;
        case '59': nombre.html('Sr. Juan Pablo Cabrera y Fam.'); personas.html('4 Personas'); break;
        case '60': nombre.html('Lucia Abraham Gomez'); personas.html('Personal'); break;
        case '61': nombre.html('Karla Lucia Lopez Abraham'); personas.html('3 Personas'); break;
        case '62': nombre.html('Mario Mateos Lopez'); personas.html('3 Personas'); break;
        case '63': nombre.html('Fam. Rodríguez Zilli'); personas.html('3 Personas'); break;
        case '64': nombre.html('Isela Carrion Vasquez'); personas.html('3 Personas'); break;
        case '65': nombre.html('Lisbeth Arely Morales Carrion'); personas.html('4 Personas'); break;
        case '66': nombre.html('Gabriel Lozano y María de los Angeles'); personas.html('2 Personas'); break;
        case '67': nombre.html('Aldo Rafael Perez y Fam.'); personas.html('5 Personas'); break;
        case '68': 
            updateSource("mi-culebrita.mp3");
            nombre.html('Papá'); personas.html('Personal'); 
            break;
        case '69': nombre.html('Luis Eduardo'); personas.html('Personal'); break;
        case '70': nombre.html('Luis Eduardo Alcazar'); personas.html('Personal'); break;
        case '71': nombre.html('Sr. Luis Felipe Acopa y Fam.'); personas.html('5 Personas'); break;
        case '72': nombre.html('Tía Yeni Cabrera'); personas.html('2 Personas'); break;
        case '73': nombre.html('Tía Yoli Cernuda'); personas.html('2 Personas'); break;
        case '74': nombre.html('Tía Yari Cabrera'); personas.html('2 Personas'); break;
        case '75': nombre.html('Sr. Jose Manuel Domínguez y Fam.'); personas.html('5 Personas'); break;
        case '76': nombre.html('Sr. David Oliva y Fam.'); personas.html('4 Personas'); break;
        case '77': nombre.html('Yaretzi'); personas.html('2 Personas'); break;
        case '78': nombre.html('Belgica Tejero'); personas.html('2 Personas'); break;
        case '79': nombre.html('María Esther Álvarez'); personas.html('3 Personas'); break;
        case '80': nombre.html('Rosa Lidia y Jose Antonio'); personas.html('2 Personas'); break;
        case '81': nombre.html('Sr. Criel Abrego y Fam.'); personas.html('4 Personas'); break;
        case '82': nombre.html('Juan Carlos y Luisa Caridad'); personas.html('2 Personas'); break;
        case '83': nombre.html('Miguel Pérez García'); personas.html('2 personas'); break;
        case '84': nombre.html('Sr. Francisco Alba Gonzalez. y Fam.'); personas.html('3 Personas'); break;
        case '85': nombre.html('Mtra. Rocío y esposo'); personas.html('2 Personas'); break;
        case '86': nombre.html('Elvia Vasquez'); personas.html('Personal'); break;
        case '87': nombre.html('Nelly Ramírez'); personas.html('2 Personas'); break;
        case '88': nombre.html('Alexa y Zarife'); personas.html('2 Personas'); break;
        case '89': nombre.html('Sr. Pedro Frias Zapata y Fam.'); personas.html('3 Personas'); break;
        case '90': nombre.html('Elda Frias Zapata'); personas.html('2 Personas'); break;
        case '91': nombre.html('Juan Frias Zapata'); personas.html('3 Personas'); break;
        case '92': nombre.html('Angel Vidal Custodio'); personas.html('2 Personas'); break;
        case '93': nombre.html('Jorge de los Santos y Fam.'); personas.html('4 Personas'); break;
        case '94': nombre.html('Jorge Alberto Campos Frias'); personas.html('Personal'); break;
        case '95': nombre.html('Daniel Trinidad González y Esposa'); personas.html('2 Personas'); break;
        case '96': nombre.html('Bruno Enrique Vila'); personas.html('2 Personas'); break;
        case '97': nombre.html('Daniel Gallardo'); personas.html('2 Personas'); break;
        case '98': nombre.html('Ivette Pérez'); personas.html('2 Personas'); break;
        case '99': nombre.html('Sr. Emilio Armando Perez Marcin y Fam.'); personas.html('4 Personas'); break;
        case '100': nombre.html('Rodrigo de la Cruz y Fam.'); personas.html('4 Personas'); break;
        case '101': nombre.html('Jorge Cabrera y Fam.'); personas.html('4 Personas'); break;
        case '102': nombre.html('Rocio del Carmen Pedraza Magaña'); personas.html('2 Personas'); break;
        case '103': nombre.html('Ximena Contreras'); personas.html('Personal'); break;
        case '104': nombre.html('Iván'); personas.html('Personal'); break;
        case '105': nombre.html('Alfredo Estrada Perez y Esposa'); personas.html('2 Personas'); break;
        case '106': nombre.html('Columba Vidal Frias'); personas.html('2 Personas'); break;
        case '107': nombre.html('Valeria'); personas.html('3 Personas'); break;
        case '108': nombre.html('María José Vidal'); personas.html('2 Personas'); break;
        case '109': nombre.html('Sr. Carlos Cabrera Guillermo y Esposa'); personas.html('2 Personas'); break;
        case '110': nombre.html('Sr. Idelfonso Cabrera Guillermo y Esposa'); personas.html('2 Personas'); break;
        case '111': nombre.html('Sra. Guadalupe Cabrera Guillermo'); personas.html('3 Personas'); break;
        case '112': nombre.html('Valeria'); personas.html('2 Personas'); break;
        case '113': nombre.html('Tía Javi Oliva'); personas.html('Personal'); break;
        case '114': nombre.html('Sr. Martín Carbajal y Fam.'); personas.html('4 Personas'); break;
        case '115': nombre.html('Cecilia F. Oliva Frias'); personas.html('2 Personas'); break;
        case '116': nombre.html('Fam. Pérez Madrigal'); personas.html('3 Personas'); break;
        case '117': nombre.html('Alejandro Valencia'); personas.html('Personal'); break;
        default:
            $('#datos-invitado').hide();
            break;
    }
}

function updateSource(cancion)
{
    var audio = document.getElementById('musica-fondo');
    var source = document.getElementById('musica-fondo-source');
    source.src = cancion;
  
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}