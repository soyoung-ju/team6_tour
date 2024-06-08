    // 슬라이드 이벤트
    const myCarouselElement = document.querySelector('#carouselExampleIndicators')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,     // 슬라이드 속도 지정
    touch: false,
    pause: "hover"      // hover 하면 슬라이드 재생 멈춤
    })

    let air_icon = document.querySelector(".air-icon")
    window.addEventListener('scroll', function(){
        let value = window.scrollY
        // console.log(value);

        if(value<900){
            air_icon.style.animation = "air-disappear 3s ease-out forwards"
        } else if(value>400){
            air_icon.style.animation = "air-slide 3s ease-out"
        }
    })


    // 카드2
    $("#card_a1").click(function() {
        $("#card2_box_1").show();
        $("#card2_box_2").hide();
        $("#card2_box_3").hide();
        $("#card2_box_4").hide();
        $("#card_a1").addClass('underline');
        $("#card_a2").removeClass('underline');
        $("#card_a3").removeClass('underline');
        $("#card_a4").removeClass('underline');
    })
    $("#card_a2").click(function() {
        $("#card2_box_2").show();
        $("#card2_box_1").hide();
        $("#card2_box_3").hide();
        $("#card2_box_4").hide();
        $("#card_a2").addClass('underline');
        $("#card_a1").removeClass('underline');
        $("#card_a3").removeClass('underline');
        $("#card_a4").removeClass('underline');
    })
    $("#card_a3").click(function() {
        $("#card2_box_3").show();
        $("#card2_box_1").hide();
        $("#card2_box_2").hide();
        $("#card2_box_4").hide();
        $("#card_a3").addClass('underline');
        $("#card_a1").removeClass('underline');
        $("#card_a2").removeClass('underline');
        $("#card_a4").removeClass('underline');
    })
    $("#card_a4").click(function() {
        $("#card2_box_4").show();
        $("#card2_box_1").hide();
        $("#card2_box_2").hide();
        $("#card2_box_3").hide();
        $("#card_a4").addClass('underline');
        $("#card_a1").removeClass('underline');
        $("#card_a2").removeClass('underline');
        $("#card_a3").removeClass('underline');
    })

    // 카드3
    $("#card3_a1").click(function() {
        $("#card3_box_1").show();
        $("#card3_box_2").hide();
        $("#card3_a1").addClass('underline');
        $("#card3_a2").removeClass('underline');
    })
    $("#card3_a2").click(function() {
        $("#card3_box_2").show();
        $("#card3_box_1").hide();
        $("#card3_a2").addClass('underline');
        $("#card3_a1").removeClass('underline');
    })

    $( document ).ready(function() {
        $("#card_a1").addClass('underline');
        $("#card2_box_2").hide();
        $("#card2_box_3").hide();
        $("#card2_box_4").hide();

        $("#card3_a1").addClass('underline');
        $("#card3_box_2").hide();
    });

