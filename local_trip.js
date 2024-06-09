    // 슬라이드 이벤트
    const myCarouselElement = document.querySelector('#carouselExampleIndicators')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,     // 슬라이드 속도 지정
    touch: false,
    pause: "hover"      // hover 하면 슬라이드 재생 멈춤
    })
    const carouselExample = document.querySelector('#carouselExample')
    const carousel_2 = new bootstrap.Carousel(carouselExample, {
        interval: 4000,     // 슬라이드 속도 지정
        touch: false,
        pause: "hover"      // hover 하면 슬라이드 재생 멈춤
    })


    // 비행기 애니메이션 스크롤 이벤트
    let air_icon_right = document.querySelector(".air_icon_right")
    // let air_icon_left = document.querySelector(".air_icon_left")
    window.addEventListener('scroll', function(){
        let value = window.scrollY
        console.log(value);

        if(value<900){
            air_icon_right.style.animation = "air-disappear 3s ease-out forwards"
        } else{
            air_icon_right.style.animation = "air-slide 3s ease-out"
        }
    })

    // 모바일 
    $("#mobile_tab1").click(function() {
        $("#mobile_box1").show();
        $("#mobile_box2").hide();
        $("#mobile_tab1").addClass('underline');
        $("#mobile_tab2").removeClass('underline');
    })

    $("#mobile_tab2").click(function() {
        $("#mobile_box2").show();
        $("#mobile_box1").hide();
        $("#mobile_tab2").addClass('underline');
        $("#mobile_tab1").removeClass('underline');
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
        $("#card3_box_3").hide();
        $("#card3_a1").addClass('underline');
        $("#card3_a2").removeClass('underline');
        $("#card3_a3").removeClass('underline');
    })
    $("#card3_a2").click(function() {
        $("#card3_box_2").show();
        $("#card3_box_1").hide();
        $("#card3_box_3").hide();
        $("#card3_a2").addClass('underline');
        $("#card3_a1").removeClass('underline');
        $("#card3_a3").removeClass('underline');
    })
    $("#card3_a3").click(function() {
        $("#card3_box_3").show();
        $("#card3_box_1").hide();
        $("#card3_box_2").hide();
        $("#card3_a3").addClass('underline');
        $("#card3_a1").removeClass('underline');
        $("#card3_a2").removeClass('underline');
    })

    $( document ).ready(function() {
        $("#card_a1").addClass('underline');
        $("#card2_box_2").hide();
        $("#card2_box_3").hide();
        $("#card2_box_4").hide();

        $("#card3_a1").addClass('underline');
        $("#card3_box_2").hide();
        $("#card3_box_3").hide();

        $("#mobile_tab1").addClass('underline');
        $("#mobile_box2").hide();
    });

