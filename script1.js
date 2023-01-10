
$(document).ready(function(){




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











    $('.featured_works_content_box_item').click(function(){

      var block_width = $(".featured_works_content_box_item").width();
      var margin_width = $(".featured_works_content_box").width()/100*2.5;
      var position = $(this).position();
      // var arr = [1];
      // arr.push(position.left);
      // for (var i = 0; i < arr.length; i++) {
      //   console.log(arr[i]);
      // }



      if($(this).hasClass('works_animate')){



        $(this).animate({
          "padding-bottom": "31.5%",
          "width":"31.5%",
          "margin-left": left_position + "px",
          "margin-top":position.top + "px",

        },600);

        $(this).toggleClass('works_animate');

        $(document).mouseup(function (e) {
            var container = $('.works_animate');
            if (container.has(e.target).length === 0){
                container.hide();
            }
        });



        $(this).queue(function(){
          $(this).css({
            "position":"static",
            "margin-left":margin_width+"px",
            "margin-right":"auto",


          });
          $(this).prev().css({"margin-right":"auto"});
          if($(this).hasClass("featured_works_content_box_item_first")){
            $(this).next().css({
              "margin-left":margin_width+"px",
            });
          };
          $(this).dequeue();
        });



      }

      else{

        // var  works_animate_count = $('.works_animate').length +1;
        //
        // if(works_animate_count < 2){
        //   $('.featured_works_content_box_item:not(:has(.works_animate))').click(function(){
        //     alert(works_animate_count);
        //   });
        // };
        var left_position = position.left;
        $(this).css({
          "margin-left":position.left + margin_width + "px",
          "margin-top":position.top + "px",
        })


        $(this).animate({
          "padding-bottom":"50%",
          "width":"50%",
          "margin-left":"25%",
          "margin-right":"25%",
          "margin-top":"25%",

        },600);
        $(this).toggleClass('works_animate');
        $(this).css({
          "position":"absolute",

        });
        $(this).prev().css({
          "margin-right":block_width + margin_width +"px",
        });
        if($(this).hasClass("featured_works_content_box_item_first")){
          $(this).next().css({
            "margin-left": block_width + margin_width + "px",
            "margin-right": "auto",
          });
          $(this).prev().css({
            "margin-right": "auto",
          });
        };
      };
      });



  });
