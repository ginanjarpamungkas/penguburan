let val = 0
function changeImg() {
    setTimeout(function(){
        $('#img-sholat12').attr('class','thumbs-covid slideOutRight')
        $('#img-penguburan11').attr('class','thumbs-covid slideOutRight')
    },2250)
    if (val == 0) {
        $('#img-sholat12').attr('src','assets/images/clean.png')
        $('#img-penguburan11').attr('src','assets/images/water.png')
        val = 1
    } else {
        $('#img-sholat12').attr('src','assets/images/islam.png')
        $('#img-penguburan11').attr('src','assets/images/home.png')
        val = 0
    }
    $('#img-sholat12').attr('class','thumbs-covid slideInLeft')
    $('#img-penguburan11').attr('class','thumbs-covid slideInLeft')
}
setInterval(changeImg, 3000)
$(function() {
    $('#btn-start').on('click',function() {
        $('.start').addClass('bounceOut')
        setTimeout(function(){ $('#start').attr('class','main hide');$('.start').removeClass('bounceOut')}, 740);
        setTimeout(function(){ $('#pengurusan').attr('class','main')}, 750);
        setTimeout(function(){ $('.pengurusan').attr('class','pengurusan fadeInLeft')}, 750);
        setTimeout(function(){ $('#btn-pengurusan').attr('class','btn-covid fadeInUp')}, 1400);
    })
    // pengurusan
    $('#btn-pengurusan').on('click',function() {
        $('.pengurusan').attr('class','pengurusan fadeOutRight');
        $('#btn-pengurusan').attr('class','btn-covid hide fadeOutDown');
        setTimeout(function(){ $('#pengurusan').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#pengurusan11').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-pengurusan11').attr('class','thumbs-covid bounceInDown')}, 750);
        setTimeout(function(){ $('#p-pengurusan11').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-pengurusan11').attr('class','btn-covid fadeInUp')}, 2200);
    })
    $('#btn-pengurusan11').on('click',function() {
        $('#img-pengurusan11').attr('class','thumbs-covid hide bounceOut')
        $('#p-pengurusan11').attr('class','padding hide fadeOutRight')
        $('#btn-pengurusan11').attr('class','btn-covid hide fadeOutDown')
        setTimeout(function(){ $('#pengurusan11').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#pengurusan12').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-pengurusan12').attr('class','thumbs-covid fadeIn')}, 750);
        setTimeout(function(){ $('#p-pengurusan12').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-pengurusan12').attr('class','btn-covid fadeInUp')}, 2200);
    })
    $('#btn-pengurusan12').on('click',function() {
        $('#img-pengurusan12').attr('class','thumbs-covid hide fadeOut')
        $('#p-pengurusan12').attr('class','padding hide fadeOutRight')
        $('#btn-pengurusan12').attr('class','btn-covid hide fadeOutDown')
        setTimeout(function(){ $('#pengurusan12').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#pengurusan13').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-pengurusan13').attr('class','thumbs-covid bounceInDown')}, 750);
        setTimeout(function(){ $('#p-pengurusan13').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-pengurusan13').attr('class','btn-covid fadeInUp')}, 2200);
    })
    $('#btn-pengurusan13').on('click',function() {
        $('#img-pengurusan13').attr('class','thumbs-covid hide bounceOut')
        $('#p-pengurusan13').attr('class','padding hide fadeOutRight')
        $('#btn-pengurusan13').attr('class','btn-covid hide fadeOutDown')
        setTimeout(function(){ $('#pengurusan13').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#pengurusan14').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-pengurusan14').attr('class','thumbs-covid fadeIn')}, 750);
        setTimeout(function(){ $('#p-pengurusan14').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-pengurusan14').attr('class','btn-covid fadeInUp')}, 2200);
    })
    $('#btn-pengurusan14').on('click',function() {
        $('#img-pengurusan14').attr('class','thumbs-covid hide fadeOut')
        $('#p-pengurusan14').attr('class','padding hide fadeOutRight')
        $('#btn-pengurusan14').attr('class','btn-covid hide fadeOutDown')
        setTimeout(function(){ $('#pengurusan14').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#sholat').attr('class','main')}, 750);
        setTimeout(function(){ $('.sholat').attr('class','sholat fadeInLeft')}, 750);
        setTimeout(function(){ $('#btn-sholat').attr('class','btn-covid bounceIn')},1400);
    })
    // sholat jenazah
    $('#btn-sholat').on('click',function() {
        $('.sholat').attr('class','sholat fadeOutRight');
        $('#btn-sholat').attr('class','btn-covid hide bounceOut');
        setTimeout(function(){ $('#sholat').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#sholat11').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-sholat11').attr('class','thumbs-covid fadeInUp')}, 750);
        setTimeout(function(){ $('#p-sholat11').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-sholat11').attr('class','btn-covid bounceIn')}, 2200);
    })
    $('#btn-sholat11').on('click',function() {
        $('#img-sholat11').attr('class','thumbs-covid hide fadeOutDown')
        $('#p-sholat11').attr('class','padding hide fadeOutRight')
        $('#btn-sholat11').attr('class','btn-covid hide bounceOut')
        setTimeout(function(){ $('#sholat11').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#sholat12').attr('class','main')}, 750);
        setTimeout(function(){ $('.img-container').attr('class','img-container fadeIn')}, 750);
        setTimeout(function(){ $('#img-sholat12').attr('class','thumbs-covid');}, 750);
        setTimeout(function(){ $('#p-sholat12').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-sholat12').attr('class','btn-covid bounceIn')}, 2200);
    })
    $('#btn-sholat12').on('click',function() {
        $('.img-container').attr('class','img-container hide fadeOut')
        $('#img-sholat12').attr('class','thumbs-covid hide')
        $('#p-sholat12').attr('class','padding hide fadeOutRight')
        $('#btn-sholat12').attr('class','btn-covid hide bounceOut')
        setTimeout(function(){ $('#sholat12').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#sholat13').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-sholat13').attr('class','thumbs-covid fadeIn')}, 750);
        setTimeout(function(){ $('#p-sholat13').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-sholat13').attr('class','btn-covid bounceIn')}, 2200);
    })
    $('#btn-sholat13').on('click',function() {
        $('#img-sholat13').attr('class','thumbs-covid hide fadeOut')
        $('#p-sholat13').attr('class','padding hide fadeOutRight')
        $('#btn-sholat13').attr('class','btn-covid hide bounceOut')
        setTimeout(function(){ $('#sholat13').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#sholat14').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-sholat14').attr('class','thumbs-covid fadeInUp')}, 750);
        setTimeout(function(){ $('#p-sholat14').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-sholat14').attr('class','btn-covid bounceIn')}, 2200);
    })
    $('#btn-sholat14').on('click',function() {
        $('#img-sholat14').attr('class','thumbs-covid hide fadeOutDown')
        $('#p-sholat14').attr('class','padding hide fadeOutRight')
        $('#btn-sholat14').attr('class','btn-covid hide bounceOut')
        setTimeout(function(){ $('#sholat14').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#penguburan').attr('class','main')}, 750);
        setTimeout(function(){ $('.penguburan').attr('class','penguburan fadeInLeft')}, 750);
        setTimeout(function(){ $('#btn-penguburan').attr('class','btn-covid zoomIn')},1400);
    })
    // penguburan
    $('#btn-penguburan').on('click',function() {
        $('.penguburan').attr('class','penguburan fadeOutRight');
        $('#btn-penguburan').attr('class','btn-covid hide zoomOut');
        setTimeout(function(){ $('#penguburan').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#penguburan11').attr('class','main')}, 750);
        setTimeout(function(){ $('.img-container').attr('class','img-container fadeIn')}, 750);
        setTimeout(function(){ $('#img-penguburan11').attr('class','thumbs-covid')}, 750);
        setTimeout(function(){ $('#p-penguburan11').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-penguburan11').attr('class','btn-covid zoomIn')}, 2200);
    })
    $('#btn-penguburan11').on('click',function() {
        $('.img-container').attr('class','img-container hide fadeOut')
        $('#img-penguburan11').attr('class','thumbs-covid hide')
        $('#p-penguburan11').attr('class','padding hide fadeOutRight')
        $('#btn-penguburan11').attr('class','btn-covid hide zoomOut')
        setTimeout(function(){ $('#penguburan11').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#penguburan12').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-penguburan12').attr('class','thumbs-covid fadeInUp')}, 750);
        setTimeout(function(){ $('#p-penguburan12').attr('class','padding fadeInLeft')}, 1400);
        setTimeout(function(){ $('#btn-penguburan12').attr('class','btn-covid zoomIn')}, 2200);
    })
    $('#btn-penguburan12').on('click',function() {
        $('#img-penguburan12').attr('class','thumbs-covid hide fadeOutDown')
        $('#p-penguburan12').attr('class','padding hide fadeOutRight')
        $('#btn-penguburan12').attr('class','btn-covid hide zoomOut')
        setTimeout(function(){ $('#penguburan12').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#penguburan13').attr('class','main')}, 750);
        setTimeout(function(){ $('#img-penguburan14').attr('class','thumbs-covid bounceIn')}, 750);
        setTimeout(function(){ $('#img-penguburan13').attr('class','thumbs-covid bounceInDown')}, 1400);
        setTimeout(function(){ $('#p-penguburan13').attr('class','padding fadeInLeft')}, 2200);
        setTimeout(function(){ $('#btn-penguburan13').attr('class','btn-covid zoomIn')}, 3000);
    })
    $('#btn-penguburan13').on('click',function() {
        $('#img-penguburan13').attr('class','thumbs-covid hide fadeOut')
        $('#img-penguburan14').attr('class','thumbs-covid hide fadeOut')
        $('#p-penguburan13').attr('class','padding hide fadeOutRight')
        $('#btn-penguburan13').attr('class','btn-covid hide zoomOut')
        setTimeout(function(){ $('#penguburan13').attr('class','main hide');}, 740);
        setTimeout(function(){ $('#start').attr('class','main');$('.start').addClass('bounceIn')}, 750);
        setTimeout(function(){$('.start').removeClass('bounceIn')}, 1450);
    })
})