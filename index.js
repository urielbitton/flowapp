$(document).ready(function() {
 
var componentszone = $('.componentszone');    
    
$('.dashside h5').on('click', function() {
    $(this).addClass('dashclick');     
    $('.dashside h5').not(this).removeClass('dashclick');
});
 
$('.dashside h5').not('.dashaccount').append('<i class="fas fa-caret-right dashsidecaret"></i>'); 
$('.dashflex2').append('<i class="fas fa-ellipsis-v"></i>');
$('.dashflex1').not('.dashupdate').prepend('<i class="fas fa-ellipsis-h"></i><i class="fas fa-pen"></i><i class="fas fa-comment-alt"></i> ');
$('.dashmsg h5').prepend('<i class="fas fa-comment-alt"></i>');
$('.dashprod h5').prepend('<i class="fas fa-shopping-bag"></i>');
$('.dashlogin h5').prepend('<i class="fas fa-key"></i>');
$('.dashupdate').append('<i class="material-icons">&#xe923;</i>');    
    
    
var notifslide = $('.notifslide');
var dashnotif = $('.dashnotif');
var notifclicked = 0;    
dashnotif.on('click', function() {
    if(notifclicked == 0) {
        notifslide.fadeIn(300);
        notifclicked = 1;
    }
    else {
        notifslide.fadeOut(200);
        notifclicked = 0;
    }
        
});     
    
    
$('.notifs').append('<i class="fas fa-circle newnotif"></i>');    
$('.newnotif').parents('.notifs').on('click', function() {
    $(this).children('.newnotif').fadeOut(300);
});    
    

notifslide.append('<div class="clearnotifs"><small>Clear all</small></div>');
    
var notifsnum = 0;    
notifsnum = $('.notifs').length;    
$('.notifnum').html(notifsnum);
$('.notifs').on('click', function() {
    --notifsnum;
    $('.notifnum').html(notifsnum);
    $('.clearnotifs').click(function() {
        notifsnum = 0;
        $('.notifnum').fadeOut(200);
        $('.newnotif').fadeOut(200);
    }); 
    if(notifsnum == 0) 
        $('.notifnum').fadeOut(200);
});    
if(notifsnum == 0) 
        $('.notifnum').fadeOut(200);    
    
   
//Tabs cache
var hometab = $('.hometab'); 
var mediatab = $('.mediatab');     
    
var othertabs = $('.dashtabs h5').not('.hometab');    
var dashcontent = $('.dashcontent');    
othertabs.on('click', function() {
    componentszone.fadeIn(300);
    setTimeout(function() {
        dashcontent.css('opacity','0');
        setTimeout(function() {dashcontent.css('display','none');}, 300);
    },100); 
    dashcontent.css('left','30px');
});   
hometab.on('click', function() {
    componentszone.fadeOut(300);
    dashcontent.css('display','block');
    setTimeout(function() {
        dashcontent.css('opacity','1');
        setTimeout(function() {dashcontent.css('left','0px');},100);
    }, 100);
    
});     
     
mediatab.on('click', function() {
    componentszone.load('media.html');
});    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});