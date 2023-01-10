$(document).ready(function(){


  var position_left
  var position_top

  var block_width = $(".featured_works_content_box_item").width();
  var margin_width = 2.5;


      function click_sv_fn(){
        if ($('.featured_works_content_box_item').hasClass('click_sv')){
          $('.featured_works_content_box_item').queue(function(){
              $('.click_sv').unbind('click');
          })
        }
        else{
          $('.click_sv').bind('click');

        }

      }


  function slide_up(){
    var position = $('.works_animate').position();
    $('.works_animate').addClass('click_sv')

    // click_sv_fn()

    if ($('.works_animate').hasClass('featured_works_content_box_item_first')){
      $('.works_animate').css({
        "position":"absolute",
        "margin-left": position_left  + "%",
        "margin-top":position_top + "%",
      });
    }
    else{
      $('.works_animate').css({
        "position":"absolute",
        "margin-left": position_left + margin_width + "%",
        "margin-top":position_top + "%",
      });
    }


    $('.works_animate').animate({
         "padding-bottom": "51.5%",
         "width":"51.5%",
         "margin-left":"25%",
         "margin-top":"25%"
     },600,(function(){
       $('.works_animate').removeClass('click_sv');
     })
   );


  };



  function slide_down(){
    $('.works_animate').addClass('click_sv');
      if($('.works_animate').hasClass('featured_works_content_box_item')){

        if($('.works_animate').hasClass('featured_works_content_box_item_first')){
          $('.works_animate').animate({
            "margin-left": position_left  + "%",
            "margin-top":position_top + "%",
            "padding-bottom": "31.5%",
            "width":"31.5%",
          },600);
        }
        else{
          $('.works_animate').animate({
            "margin-left": position_left + margin_width + "%",
            "margin-top":position_top + "%",
            "padding-bottom": "31.5%",
            "width":"31.5%",
            },600

            );
        }




      };





  $('.works_animate').queue(function(){

    $(this).css({
      "position":"",
      "margin-left": "",
      "margin-top" : ""
    });
    $(this).prev().removeClass('works_animate_margin_right');
    $(this).next().removeClass('works_animate_margin_left')
    $('.featured_works_content_box_item').removeClass('click_sv');
    $(this).dequeue();
  });


  };








  $('.header_menu_block img').click(function(){



    if($(".header_menu_box").hasClass('header_menu_hidden')){
      $(".header_menu_box").animate({height: "440px"},600);
      $(".header_menu_box").toggleClass('header_menu_hidden');
    }
    else{
      $(".header_menu_box").animate({height: "0px"},600);
      $(".header_menu_box").toggleClass('header_menu_hidden');
    };
});




$('.working_process_content_item_button').click(function(){
  var parent = $(this).parent('.working_process_content_item_box')
  var ico = $(this).prev(".working_process_content_item_image")
  var headline = $(this).prev().prev()
  var position = $(this).parent('.working_process_content_item_box').position();
  var block_position
if (position.left != 0){
  block_position = position.left;
}

  if(parent.hasClass('working_process_content_animation')){

    parent.removeClass('working_process_content_animation');
    parent.css({
      "transition": "all 600ms",
    })
  }
  else{


    parent.addClass('working_process_content_animation')
$(this).prev('.working_process_content_item_button_image').css({
  "transform":"rotate(-18deg)"
})
      parent.css({
        "transition": "auto",
        "margin-left" : block_position + "px",
        "position": "absolute",
        "z-index": "100",

    });


    parent.animate({
      "max-width" : "35%",
      "height" : "500px",
      "margin-left" : "32.5%",
      "margin-right" : "32.5%",
      "margin-top" : "-100px"

    },600);

    parent.queue(function(){
      parent.css({
        "transition": "all 600ms",
      });
      ico.css(
        "font-size" , "70px"
      )
      headline.css("font-size","20px")
    });

  };
});





  $('.featured_works_content_box_item').click(function(){

    // if ($('.featured_works_content_box_item').hasClass('works_animate')){
    //   $(this).click(function(){
    //     $(this).prev().dequeue('fx');
    //     $(this).next().dequeue('fx');
    // })
    // }

    if($('.featured_works_content_box_item').hasClass('works_animate')){

$(this).stop(true).queue('fx', function(){


          slide_down();







          $(this).removeClass('works_animate');


        $(this).dequeue('fx');
        });

}
else{
$(this).stop(true).queue('fx', function(){
      $(this).addClass('works_animate');

      var position = $('.works_animate').position();

      if(position.top != 0){
        position_top =  position.top/$('.featured_works_content_box').width()   * 100  ;
      }
      else{
        position_top = 0
      };

      if(position.left != 0){
        position_left = position.left/$('.featured_works_content_box').width()  * 100;
      }
      else{
        position_left = 0
      };





        slide_up();








        if($(this).hasClass('featured_works_content_box_item_first')){
          $('.works_animate').next().addClass('works_animate_margin_left');
        }
        else{
          $(this).prev().addClass('works_animate_margin_right')
        }



      $(document).mouseup(function (e) {

          var wks_anim = $('.works_animate');
          if (!wks_anim.is(e.target) && wks_anim.has(e.target).length === 0){



            slide_down();

        $(this).queue(function(){
          if($(this).hasClass('featured_works_content_box_item_first')){
             $(this).css({
               "margin-left": "",
               "margin-top": ""
              });
          };
          $('.works_animate').next().removeClass('works_animate_margin_right');

          $('.works_animate').removeClass('works_animate');
          $(this).dequeue();
        });

      };


      });
      $(this).dequeue('fx');
    });


};


});
// $('.featured_works_content_box_item').bind('click', main_animation());
 });
