// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();

// Play / Pause:
let playButton = document.getElementsByClassName('player__button');

$('.player__button').on('click', function (){
    if (playButton[0].innerHTML === "||"){
        $('.player__video')[0].pause();
        playButton[0].innerHTML = "►";
    }
    else {
        $('.player__video')[0].play();
        playButton[0].innerHTML = "||";
    }
})

//timeupdate:

