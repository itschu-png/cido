/* 수정된 core.js */
jQuery(document).ready(function($){

  // 각 gallery-sec 섹션을 찾아서 개별적으로 기능을 적용합니다.
  $('.gallery-sec').each(function() {
      var $section = $(this); // 현재 순회 중인 섹션
      var $container = $section.find('.iso-box-wrapper'); // 해당 섹션 안의 컨테이너만 선택
      var $imgs = $section.find('.iso-box img'); // 해당 섹션 안의 이미지만 선택

      if ( $container.length > 0 ) { 
          // 1. Isotope 초기화
          $container.imagesLoaded(function () {
              $container.isotope({
                  layoutMode: 'fitRows',
                  itemSelector: '.iso-box'
              });
          });

          // 2. 해당 섹션 내의 필터 버튼에만 클릭 이벤트 적용
          $section.find('.filter-wrapper li a').click(function(){
              var $this = $(this);
              var filterValue = $this.attr('data-filter');

              // 해당 섹션의 컨테이너만 필터링
              $container.isotope({ 
                  filter: filterValue,
                  animationOptions: { 
                      duration: 750, 
                      easing: 'linear', 
                      queue: false, 
                  }                
              });             

              // 현재 섹션 내에서만 'selected' 클래스 교체
              $this.closest('.filter-wrapper').find('.selected').removeClass('selected');
              $this.addClass('selected');

              return false;
          });
      }
  });

  /* Nivo lightbox (기존 유지) */
  $('.gallery-sec .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
  });

});