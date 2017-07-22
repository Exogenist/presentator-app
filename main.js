$(window).on("load", function() {
    var slides = 0;
    var State = [function() {
        $('#content').html('');
        $('#wrapper').removeClass('animated fadeOut');
        $('.wrap').css('background-image', 'url("http://11hauz.com/swainsonholness/photos/aspen.jpg")');
        $('.wrap').addClass('animated fadeIn');

        $('#content').html('<img class="pngLogo zoomIn animated" src="http://swainsonholness.me/photos/pandologo.png" alt="">');

        setTimeout(function() {
            $('#content').append('<p id="slide_0" class="animated zoomIn">We assist entrepreneurs with gaining access to the right types of capital, in the right quantities, at the right times from the right partners.</p>');
        }, 300);
    }, function() {
        $('#content').html('');
        $('#wrapper').removeClass('animated fadeOut');
        $('.wrap').css('background-image', 'url("http://11hauz.com/swainsonholness/photos/mountains.jpg")');
        $('.wrap').addClass('animated fadeIn');
        setTimeout(function() {
            $('#content').html('<h1 class="title-slide1 animated zoomIn">Park City&#39;s Innovation Center</h1>');
        }, 300);
        setTimeout(function() {
            $('#content').append('<hr class="hr-slide1 animated zoomIn">');
        }, 600);
        setTimeout(function() {
            $('#content').append('<p class="text-slide1 animated zoomIn">During 2016, we had more than 70 entrepreneurs and their enterprises use the services of PandoLabs and PandoLabs Institute. We established the framework for Utah&#39s most diverse and comprehensive mentor network with industry experts and entrepreneurs experienced in each of Utah&#39s strategic industry clusters and with access to global business relationships. </p>');
        }, 600);
        setTimeout(function() {
            $('#content').append('');
        }, 900);
    }, function() {
        $('#content').html('');
        $('#wrapper').removeClass('animated fadeOut');
        $('.wrap').css('background-image', 'url("http://11hauz.com/swainsonholness/photos/globe.jpg")');
        $('.wrap').addClass('animated fadeIn');
        setTimeout(function() {
            $('#content').html('<h1 class="title-slide2 animated zoomIn">Entrepreneurs</h1>');
        }, 300);
        setTimeout(function() {
            $('#content').append('<h3 class=" animated zoomIn sub-head">“The value of an idea lies in the using of it.” Thomas Edison</h3>');
        }, 600);
        setTimeout(function() {
            $('#content').append('<img class="img-slide2 animated flipInY" src="http://11hauz.com/swainsonholness/photos/rocket.png" alt="">');
        }, 1000);
    }, function() {
        $('#content').html('');
        $('#wrapper').removeClass('animated fadeOut');
        $('.wrap').css('background-image', 'url("http://11hauz.com/swainsonholness/photos/forest.jpg")');
        $('.wrap').addClass('animated fadeIn');
        setTimeout(function() {
            $('#content').html('<h1 class="title-slide3 animated zoomIn">PandoLabs Developers Group</h1>');
        }, 300);
        setTimeout(function() {
            $('#content').append('<p class="text-slide3 animated zoomIn">The PLD team can build sites from scratch, or rework old websites. Services include website & mobile app development, digital branding, SEO and SEM, and related tech services. We provide for Pandolabs entrepeneur client network.</p>');
        }, 600);
        setTimeout(function() {
            $('#content').append('<svg class="svg-slide3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="800px" height="800px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"><g id="root" class="animated fadeInLeft"><path fill-rule="evenodd" clip-rule="evenodd" fill="#91BA3F" d="M474.841,751.752c-7.262-0.086-12.052-4.899-16.904-9.23c-15.124-13.497-24.472-30.946-32.32-49.19c-14.37-33.402-23.538-68.352-29.081-104.21c-1.221-7.886-0.179-16.12-1.539-24.294c-2.702,7.073-5.432,14.135-8.098,21.22c-7.587,20.156-21.046,33.837-41.732,41.245c-21.506,7.701-41.129,19.005-54.733,38.266c-11.795,16.699-16.87,36.118-21.127,55.708c-2.719,12.507-4.704,25.173-7.218,38.856c-6.953-7.417-8.881-16.191-9.752-25.188c-1.947-20.095,3.07-39.373,8.188-58.438c7.479-27.862,24.163-47.69,52.593-56.264c1.962-0.593,3.865-1.388,5.785-2.116c38.628-14.634,33.386-46.136,19.494-69.604c-2.578-4.358-4.644-1.344-6.6,0.158c-24.75,18.998-47.887,39.679-67.316,64.271c-10.847,13.731-22.425,26.827-35.05,38.97c-13.857,13.332-29.914,23.346-47.238,31.485c-15.665,7.359-26.953,18.518-31.071,35.935c-1.263,5.344-0.721,10.732-1.035,16.705c-4.823-2.799-4.329-8.538-7.449-11.882c0-4.633,0-9.264,0-13.896c2.99-5.831,5.669-11.852,9.037-17.455c6.835-11.369,16.049-20.693,26.444-28.833c6.882-5.387,13.934-10.56,20.972-15.745c49.972-36.801,76.348-88.006,90.056-147.043c1.587-6.836-0.201-10.111-6.784-13.362c-62.267-30.753-97.88-95.64-92.254-165.165c4.883-60.324,35.417-103.664,86.197-134.224c7.57-4.556,7.732-4.381,7.737,4.041c0.018,28.304-0.057,56.607,0.073,84.91c0.02,4.287-1.101,7.923-3.095,11.67c-21.369,40.139-11.914,94.951,21.374,121.834c25.906,20.921,55.527,24.015,85.782,12.952c30.285-11.072,47.997-34.458,53.889-66.07c4.533-24.329,2.376-48.117-9.488-70.393c-1.148-2.156-1.451-4.321-1.451-6.663c0.018-30.362,0.01-60.724,0.031-91.085c0-0.987,0.224-1.973,0.441-3.768c16.133,7.55,30.225,17.227,42.569,29.275c73.029,71.266,67.703,188.425-11.777,252.996c-6.65,5.403-5.196,8.938-0.924,13.532c9.718,10.452,21.837,16.782,35.636,20.165c35.332,8.66,68.147,22.612,96.301,46.224c23.105,19.381,39.68,42.946,45.653,72.982c4.247,21.369,18.226,35.032,35.451,46.347c12.225,8.028,25.565,13.756,39,19.279c-35.339-0.79-65.403-12.581-85.745-43.035c-10.567-15.819-21.141-31.59-32.478-46.88c-10.118-13.653-23.07-23.192-38.514-29.788c-19.185-8.192-39.166-13.785-59.359-18.791c-5.732-1.421-7.611,0.119-7.826,6.067c-0.438,12.07,3.389,22.787,9.349,32.839c17.96,30.288,44.142,52.64,72.072,73.052c5.95,4.351,14.318,3.485,21.533,5.192c17.234,4.079,34.459,8.245,51.148,14.131c27.571,9.717,47.602,26.995,54.13,56.912c3.213,14.729,1.471,33.879-5.261,52.492c-1.986-25.624-6.908-48.646-24.308-66.687c-17.438-18.083-39.535-24.849-65.25-25.688c15.065,26.673,17.371,52.766-0.421,80.482c-1.005-10.164-1.594-18.586-2.703-26.935c-3.688-27.733-17.1-48.932-43.297-60.122c-35.401-15.121-61.902-41.842-89.598-67.045c-11.379-10.354-29.801-5.296-33.949,9.833c-3.127,11.397-0.558,22.438,2.448,33.366c7.686,27.943,21.164,53.3,35.295,78.354c1.376,2.442,2.621,4.957,3.924,7.439L474.841,751.752z"/></g><g id="Layer_3" class="animated fadeInRight arrow"><path fill-rule="evenodd" clip-rule="evenodd" fill="#4C4C4C" d="M407.793,273.317c-34.442-0.053-68.885-0.107-103.327-0.159c-0.107-37.488-0.21-74.977-0.322-112.465c-0.013-4.315-0.074-8.629-0.112-12.945c-0.169-1.186-0.855-1.53-1.955-1.199c-13.541-0.035-27.082-0.069-40.623-0.103c-0.06-0.614-0.119-1.228-0.179-1.842c30.205-32.551,60.412-65.101,90.604-97.664c0.897-0.968,1.641-2.08,2.455-3.125c2.159-1.063,3.375,0.139,4.781,1.655c30.791,33.182,61.631,66.316,92.442,99.479c0.33,0.356,0.369,0.982,0.544,1.482c-14.145,0.169-28.292,0.338-42.438,0.508c-1.081-0.393-1.374,0.083-1.191,1.082c-0.129,35.261-0.244,70.522-0.393,105.783C408.049,260.309,407.892,266.813,407.793,273.317z"/></g></svg>');
        }, 900);
        setTimeout(function() {
            $('#Layer_3').removeClass('animated fadeInRight');
            $('.arrow').addClass('animated shake');
        }, 2000);
    }];

    // $("#content").html('<img class="pngLogo zoomIn animated" src="http://swainsonholness.me/photos/pandologo.png" alt="">');

    $('#left').mouseover(function() { $('.animate-hover').addClass('animated pulse infinite') }).mouseout(function() { $('.animate-hover').removeClass('animated pulse infinite') });

    $('#right').mouseover(function() { $('.animate-hover').addClass('animated pulse infinite') }).mouseout(function() { $('.animate-hover').removeClass('animated pulse infinite') })

    // START
    State[0]();
    onClick();

    function leftSlide() {
        $('#wrapper').removeClass('animated fadeIn');
        $('.wrap').addClass('animated fadeOut');
        setTimeout(function() {
            if (slides === 0) {
                slides = 3; // to do: make variable
                State[slides]();
            } else {
                slides -= 1;
                State[slides]();
            }
            onClick();
        }, 700);
    }

    function rightSlide() {
        $('#wrapper').removeClass('animated fadeIn');
        $('.wrap').addClass('animated fadeOut');
        setTimeout(function() {
            if (slides === 3) { // to do: make variable
                slides = 0;
                State[slides]();
            } else {
                slides += 1;
                State[slides]();
            }
            onClick();
        }, 700);
    }

    function onClick() {
        $("#left").click(function() {
            offClick();
            leftSlide();
        });
        $("#right").click(function() {
            offClick();
            rightSlide();
        });

    }

    function offClick() {
        $('#left').off('click');
        $('#right').off('click');
    }

});