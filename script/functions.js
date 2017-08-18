$(document).ready(function(){
  $('#a-social-media-facebook').removeClass("animated-icon-stage-one");
  $('#a-social-media-facebook').addClass("animated-icon-stage-two");
  setTimeout(function(){
    $('#a-social-media-twitter').removeClass("animated-icon-stage-one");
    $('#a-social-media-twitter').addClass("animated-icon-stage-two");
    setTimeout(function(){
      $('#a-social-media-google').removeClass("animated-icon-stage-one");
      $('#a-social-media-google').addClass("animated-icon-stage-two");
      setTimeout(function(){
        $('#a-social-media-github').removeClass("animated-icon-stage-one");
        $('#a-social-media-github').addClass("animated-icon-stage-two");
      },300);
    },300);
  },300);


  $(window).scroll(function(){

    var screenTopPos = $(this).scrollTop();
    // console.log(screenTopPos);

      if(screen.width<=1200 && (window.innerHeight > window.innerWidth)){
          $('nav').css('transform','translate(0px,'+(((-1)*screenTopPos)/11)+'px)');
          $('#mouse-pic').css('transform','translate('+((screenTopPos)*2)+'px,'+(-1)*screenTopPos/2+'px)rotate('+(screenTopPos-40)+'deg)')
          $('#keyboard-pic').css('transform','translate('+(((-1)*screenTopPos)/2)+'px,0px)rotate('+(screenTopPos-40)+'deg)')
      }
      if(screen.width<=1080 && (window.innerHeight > window.innerWidth)){
        $('div#my-picture').css('transform','translate(0px,'+(((-1)*screenTopPos)/7)+'px)rotate('+(5+screenTopPos/12)+'deg)');
      }


      if(screenTopPos>=0&&screenTopPos<=390){
        // $('#a-social-media-facebook').css('transform','translate('+screenTopPos+'px,'+(-1)*screenTopPos/6+'px)');
        $('#a-social-media-facebook').removeClass("animated-icon-stage-one");
        $('#a-social-media-facebook').addClass("animated-icon-stage-two");
        setTimeout(function(){
          $('#a-social-media-twitter').removeClass("animated-icon-stage-one");
          $('#a-social-media-twitter').addClass("animated-icon-stage-two");
          setTimeout(function(){
            $('#a-social-media-google').removeClass("animated-icon-stage-one");
            $('#a-social-media-google').addClass("animated-icon-stage-two");
            setTimeout(function(){
              $('#a-social-media-github').removeClass("animated-icon-stage-one");
              $('#a-social-media-github').addClass("animated-icon-stage-two");
            },300);
          },300);
        },300);
      }else{
        $('#a-social-media-facebook').addClass("animated-icon-stage-one");
        $('#a-social-media-facebook').removeClass("animated-icon-stage-two");
        setTimeout(function(){
          $('#a-social-media-twitter').addClass("animated-icon-stage-one");
          $('#a-social-media-twitter').removeClass("animated-icon-stage-two");
          setTimeout(function(){
            $('#a-social-media-google').addClass("animated-icon-stage-one");
            $('#a-social-media-google').removeClass("animated-icon-stage-two");
            setTimeout(function(){
              $('#a-social-media-github').addClass("animated-icon-stage-one");
              $('#a-social-media-github').removeClass("animated-icon-stage-two");
            },300);
          },300);
        },300);
      };

      if(screen.width>=2560){

          $(".siema").css('margin-left',70+'px')
      }else if (screen.width<=1800) {
        if(screenTopPos>=1200 && screenTopPos<=2148){
          let forOne=(-1)*screenTopPos+900;
          let forTwo=(-1)*screenTopPos+900+952.5;
          let forThree=(-1)*screenTopPos+900+952.5+952.5;

          $(".img-div-one").css('left',forOne+'px')
          $(".img-div-two").css('left',forTwo+'px')
          $(".img-div-three").css('left',forThree+'px')
        }
      }else{
        if(screenTopPos>=1200 && screenTopPos<=2148){

          let forOne=(-1)*screenTopPos+1195;
          let forTwo=(-1)*screenTopPos+1195+952.5;
          let forThree=(-1)*screenTopPos+1195+952.5+952.5;

          $(".img-div-one").css('left',forOne+'px')
          $(".img-div-two").css('left',forTwo+'px')
          $(".img-div-three").css('left',forThree+'px')
        }
      }

      let offset=screenTopPos/1.7-640;
      if(offset<0){
        $('#icon-css3-div').css('transform','translate('+offset+'px,'+(-1)*offset/13+'px)');
        $('#icon-html5-div').css('transform','translate('+Math.abs(offset)+'px,'+(-1)*offset/13+'px)');
      }
  });
});
