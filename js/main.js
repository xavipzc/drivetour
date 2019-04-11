function main() {

(function () {
   'use strict';


   /* ==============================================
  	Section scrolling
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() / 4;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


    /*====================================
    owlCarousel vehicules
    ======================================*/
  	$(document).ready(function() {

      $("#gamme").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 600,
        paginationSpeed : 1000,
        singleItem: true,
        autoPlay: true
        });

      $("#gamme2").owlCarousel({
        navigation : false,
        slideSpeed : 600,
        paginationSpeed : 1000,
        singleItem: true,
        autoPlay: true
        });

  	});


   /* ==============================================
    Menu function
    =============================================== */
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse.in").collapse('hide');
        });

    /* ==============================================
    Envoi de formulaire de réservation
    =============================================== */
        $(function(){
            $("#reservation").submit(function(event){
                var nom        = $("#nom").val();
                var prenom     = $("#prenom").val();
                var tel        = $("#tel").val();
                var email      = $("#email").val();
                var ville_d    = $("#ville_d").val();
                var ville_a    = $("#ville_a").val();
                var date       = $("#date").val();
                var message    = $("#message").val();
                var msg_all    = "<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>Merci de remplir tous les champs</div>";

                if (nom === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (prenom === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (tel === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (email === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (ville_d === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (ville_a === "") {
                    $("#msg_all").html(msg_all);
                }
                else if (date === "") {
                    $("#msg_all").html(msg_all);
                } else {
                    $.ajax({
                        type : "POST",
                        url: $(this).attr("action"),
                        data: $(this).serialize(),
                        success : function() {
                            $("#reservation").html("<div class='alert alert-success' role='alert'>Merci pour votre demande de réservation. Un chauffeur va vous recontacter d'ici peu !</div>");
                        },
                        error: function() {
                            $("#reservation").html("<div class='alert alert-danger' role='alert'>Erreur, le formulaire ne répond pas. Veuillez nous appeler par téléphone.</div>");
                        }
                    });
                }

                return false;
            });
        });


}());


}
main();