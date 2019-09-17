$('#play').click(function () {
    $('video')[0].muted ^= 1;
    $(this).toggleClass('mute unmute');
    $(this).find('img').toggle();
});