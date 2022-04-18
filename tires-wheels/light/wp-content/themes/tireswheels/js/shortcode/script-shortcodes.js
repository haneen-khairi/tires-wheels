// COUNT UP
jQuery(document).ready(function($) {
    "use strict";
    var datafile;
    datafile = $('.counter').data('file');
    $('.counter').counterUp({
        delay: 10,
        time: datafile
    });

    jQuery('.circular-item-style-1').appear();
    jQuery(document.body).on('appear', '.circular-item-style-1', function() {

        // Radial progress bar
        var easy_pie_chart = {};
        jQuery('.circular-item-style-1').removeClass("hidden");
        jQuery('.circular-pie-style-1').each(function() {
            jQuery(this).easyPieChart(jQuery.extend(true, {}, easy_pie_chart, {
                size: 220,
                animate: 2000,

                lineCap: 'square',
                barColor: jQuery(this).data('color'),
                lineWidth: 4,
                scaleColor: false,

                trackColor: '#DAD9DB',


                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent) + '%';
                }
            }));
        });
    });


    jQuery('.circular-item-style-2').appear();
    jQuery(document.body).on('appear', '.circular-item-style-2', function() {

        // Radial progress bar
        var easy_pie_chart = {};
        jQuery('.circular-item-style-2').removeClass("hidden");
        jQuery('.circular-pie-style-2').each(function() {
            jQuery(this).easyPieChart(jQuery.extend(true, {}, easy_pie_chart, {
                size: 220,
                animate: 2000,

                lineCap: 'square',
                barColor: jQuery(this).data('color'),
                lineWidth: 24,
                scaleColor: false,

                trackColor: 'transparent',
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent) + '%';
                }
            }));
        });
    });

    jQuery('.circular-item-style-3').appear();
    jQuery(document.body).on('appear', '.circular-item-style-3', function() {

        // Radial progress bar
        var easy_pie_chart = {};
        jQuery('.circular-item-style-3').removeClass("hidden");
        jQuery('.circular-pie-style-3').each(function() {
            jQuery(this).easyPieChart(jQuery.extend(true, {}, easy_pie_chart, {
                size: 220,
                animate: 2000,

                lineCap: 'square',
                barColor: jQuery(this).data('color'),
                lineWidth: 24,
                scaleColor: false,

                trackColor: '#DAD9DB',
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent) + '%';
                }
            }));
        });
    });

  if (jQuery(".parallax").length ) {
    var item_class = jQuery(".parallax").attr("class").split("  ");

    var class_name = item_class[2];



    var jQuerywindow;
    jQuerywindow = jQuery(window);

    jQuery(class_name).each(function () {
      var jQueryscroll = jQuery(this);

      jQuery(window).scroll(function () {
        var yPos = -(jQuerywindow.scrollTop() / jQueryscroll.data('speed'));
        var coords = '50% ' + yPos + 'px';
        jQueryscroll.css({backgroundPosition: coords});
      });
    });
  }

  var ajaxurl = urltheme.template_url;
    $('#cat_list_1').on("change", function(){
      $('.categories-filter .tire-ration ').append("<span style='color: #FFF' class='fa fa-spinner fa-spin'></span>");
 var term_id = this.value;
        $.ajax({
            type : "POST",
            url : ajaxurl,
            data : {
            action: "list_aspect_ratio", 
            term_id : term_id,
            },
            success: function (response ) {
                $('#cat_list_2').html(response);
                $(".tire-ration .fa-spinner").remove();
                $('#cat_list_3').html('<option value=""> Diameter </option>');
             console.log(response);
            },
            error: function () {
              alert("This Category of tires does not exist");
            }
          }); 

    });
    $('#cat_list_2').on("change", function(){
      $('.categories-filter .tire-diameter ').append("<span style='color: #FFF' class='fa fa-spinner fa-spin'></span>");
        var term_id = this.value;
        console.log(term_id);
               $.ajax({
                   type : "POST",
                   url : ajaxurl,
                   data : {
                   action: "list_rim_diameter", 
                   term_id : term_id,
                   },
                   success: function (response ) {
                       $('#cat_list_3').html(response);
                       $(".tire-diameter .fa-spinner").remove();
                    console.log(response);
                   },
                   error: function () {
                     alert("This Category of tires does not exist");
                   }
                 }); 
       
           });

           ///-------------result -------
           $('.search-button').on("click", function(e){
            e.preventDefault();
            var term_id1 = document.getElementById("cat_list_1").value;//$('#cat_list_1').value;
            var term_id2 = document.getElementById("cat_list_2").value;//$('#cat_list_2').value;
            var term_id3 = document.getElementById("cat_list_3").value;//$('#cat_list_3').value;

            console.log(term_id1,term_id2,term_id3);
                   $.ajax({
                       type : "POST",
                       url : ajaxurl,
                       data : {
                       action: "serch_result", 
                       term_id1 : term_id1,
                       term_id2 : term_id2,
                       term_id3 : term_id3,
                       },
                       success: function (response ) {
                        document.location.href = response;
                          // $('.result').html(response);

                        console.log(response);
                       },
                       error: function () {
                         alert("This Category of tires does not exist");
                       }
                     }); 
           
               });

});



