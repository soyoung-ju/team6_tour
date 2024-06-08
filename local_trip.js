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
        console.log(value);

        if(value<700){
            air_icon.style.animation = "air-disappear 3s ease-out forwards"
        } else if(value>400){
            air_icon.style.animation = "air-slide 3s ease-out"
        }
    })