'use strict'

let line = document.getElementsByClassName('technology-block-line');
let line2 = line[2];
line2.style.right = '25px';
line2.style.top = '10px';
let line3 = line[3]
line3.style.right = '25px';
line3.style.top = '-17px';
line[4].style.right = '25px';

$(document).ready(() => {
    let more = $('.more');
    let projectLess = $('#project-less a');
    let projectMore = $('#project-more');
    let burger = $('#burger');
    let menuContainer = $('#menu-container');
    let close = $('#close');
    let item_menu = $('ul a')


    projectMore.click(function () {
        more.css('display', 'flex');
        projectLess.css('display', 'flex').css('justify-content', 'space-evenly');
        projectMore.hide()
    });
    projectLess.click(() => {
        more.css('display', 'none');
        projectMore.css('display', 'flex');
        projectLess.hide();
    });
    burger.click(() => {
        menuContainer.css('display', 'block');
    });
    close.click(() => {
        menuContainer.css('display', 'none');
    });
    item_menu.click(() => {
        menuContainer.css('display', 'none');
    });
    $('#main #header #header-container #menu-container #menu .contact .contact-orderCall').click(()=>{
        menuContainer.css('display', 'none');
    });
    $('.socialIcons').click(()=>{
        menuContainer.css('display', 'none');
    });


    $('#open-modal').click(function () {
        $('#reservation-container').css('display', 'flex');
    });
    $('#reservation-cancel-close , #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button').click((e) => {
        e.preventDefault();
        let name = $('#namePopup');
        let phone = $('#phonePopup');
        let check = $('#form-reservation input[type="checkbox"]:checked');


        if (name.val() && phone.val() && check.length > 0) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $(' #reservation .form').css('display', 'none');
                    $('#reservation-send').css('display', 'block');
                    // return false
                },
                error: () => {
                    $('#reservation .form').hide();
                    // alert('Ошибка бронирования. Свяжитесь пожалуйста по томеру телефона')
                    $('#reservation-send').css('display', 'block');
                    // return false
                },
            });

        } else {
            let obj = [
                name,
                phone
            ];
            for (let i = 0; i < obj.length; i++) {
                obj[i].css('border-color', 'white');
                obj[i].siblings('.error-form').hide();
            }

            let hasError = false;

            for (let i = 0; i < obj.length; i++) {
                if (!obj[i].val()) {
                    obj[i].siblings('.error-form').show();
                    hasError = true;
                    obj[i].css('border-color', 'red');

                }
            }

            if (!check.length > 0){
                $('#reservation-container .agree .agree-text').css('color','#ff5858');
                $('#reservation-container .agree .agree-text a').css('color','red');
                $('.agree label #span-check2').css('border', '1px solid #ff5858');
                $('#reservation-container .agree').addClass('error');
            }else {
                $('#reservation-container .agree .agree-text').css('color','white');
                $('#reservation-container .agree .agree-text a').css('color','white');
                $('#reservation-container .agree').removeClass('error');
                $('.agree label #span-check2').css('border', '1px solid white');
            }
                return false
        }
    });

    $('#consultation-button').click((e) => {
        e.preventDefault();
        let name = $('#nameConsultation');
        let phone = $('#phoneConsultation');
        let check = $('#consultation-container input[type="checkbox"]:checked');
        if (name.val() && phone.val() && check.length > 0) {
            $.ajax({
                type: 'post',
                url: 'mail2.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    if ($('#check').attr("checked", true)) {
                        $('#form-consultation').css('display', 'none');
                        $('#form-send').css('display', 'block');
                        return false
                    } else {
                        // alert('Ошибка бронирования. Свяжитесь пожалуйста по томеру телефона');
                        // $('#form-send').css('display', 'block');
                    }

                },
                error: () => {
                    $('#form-consultation').css('display', 'none');
                    // alert('Ошибка бронирования. Свяжитесь пожалуйста по томеру телефона');
                    $('#form-send').css('display', 'block');
                },
            });
        } else {
            let obj = [
                name,
                phone
            ];
            for (let i = 0; i < obj.length; i++) {
                obj[i].css('border-color', 'white');
                obj[i].siblings('.error-form').hide();
            }
            let hasError = false;

            for (let i = 0; i < obj.length; i++) {
                if (!obj[i].val()) {
                    obj[i].siblings('.error-form').show();
                    hasError = true;
                    obj[i].css('border-color', 'red');
                }
            }
            if (!check.length > 0){
                $('#form-consultation .agree .agree-text').css('color','#ff5858');
                $('#form-consultation .agree .agree-text a').css('color','red');
               $('#form-consultation .agree').addClass('error');
                $('.agree label #span-check1').css('border', '1px solid #ff5858');

            }else {
                $('#form-consultation .agree .agree-text').css('color','white');
                $('#form-consultation .agree .agree-text a').css('color','white');
                $('#form-consultation .agree').removeClass('error');
                $('.agree label #span-check1').css('border', '1px solid white');
            }
            return false
        }
    });



$(window).on("resize",function (){
    let open1 = $('#open1')
    let open2 = $('#open2')
    let open3 = $('#open3')
    let open4 = $('#open4')
    let open5 = $('#open5')


        if ($(window).width() < 1200) {

            $('.technology-block-line-circle#1').click(() => {

                $('#technology-block-after-click').css('display', 'block')
                open2.css('display', 'none');
                open3.css('display', 'none');
                open4.css('display', 'none');
                open5.css('display', 'none');
                open1.css('display', 'block');
                open1.css('padding-top','20px')
                return false
            })


            $('.technology-block-line-circle#2').click(() => {
                $('#technology-block-after-click').css('display', 'block');
                open1.css('display', 'none');
                open3.css('display', 'none');
                open4.css('display', 'none');
                open5.css('display', 'none');
                open2.css('display', 'block');
                open2.css('padding-top','5px')
                return false
            })

            $('.technology-block-line-circle#3').click(() => {
                $('#technology-block-after-click').css('display', 'block')
                open2.css('display', 'none');
                open1.css('display', 'none');
                open4.css('display', 'none');
                open5.css('display', 'none');
                open3.css('display', 'block');
                open3.css('padding-top','20px');
                return false
            });

            $('.technology-block-line-circle#4').click(() => {
                $('#technology-block-after-click').css('display', 'block')
                open2.css('display', 'none');
                open1.css('display', 'none');
                open3.css('display', 'none');
                open5.css('display', 'none');
                open4.css('display', 'block');
                return false
            });
            $('.technology-block-line-circle#5').click(() => {

                $('#technology-block-after-click').css('display', 'block')
                open2.css('display', 'none');
                open1.css('display', 'none');
                open3.css('display', 'none');
                open4.css('display', 'none');
                open5.css('display', 'block');
                return false

            });
        }
    if ($(window).width() > 1200){
        $('.technology-block-line-circle#1').click(() => {

            $('#technology-block-after-click').css('display', 'none')
            open2.css('display', 'none');
            open1.css('display', 'none');
            open3.css('display', 'none');
            open4.css('display', 'none');
            open5.css('display', 'none');
            return false
        })


        $('.technology-block-line-circle#2').click(() => {
            $('#technology-block-after-click').css('display', 'none')
            open2.css('display', 'none');
            open1.css('display', 'none');
            open3.css('display', 'none');
            open4.css('display', 'none');
            open5.css('display', 'none');
            return false
        })

        $('.technology-block-line-circle#3').click(() => {
            $('#technology-block-after-click').css('display', 'none')
            open2.css('display', 'none');
            open1.css('display', 'none');
            open3.css('display', 'none');
            open4.css('display', 'none');
            open5.css('display', 'none');
            return false
        });

        $('.technology-block-line-circle#4').click(() => {
            $('#technology-block-after-click').css('display', 'none')
            open2.css('display', 'none');
            open1.css('display', 'none');
            open3.css('display', 'none');
            open4.css('display', 'none');
            open5.css('display', 'none');
            return false
        });
        $('.technology-block-line-circle#5').click(() => {

            $('#technology-block-after-click').css('display', 'none')
            open2.css('display', 'none');
            open1.css('display', 'none');
            open3.css('display', 'none');
            open4.css('display', 'none');
            open5.css('display', 'none');
            return false

        });
    }
});



    $('#slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            easing:'easeOutQuint',
            focusOnSelect: true,
            responsive: [

                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 671,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        // centerPadding: '40px',
                        slidesToShow: 1
                    }
                },

            ]
        });

        $('.project-block-img').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            },
        })
    });

})