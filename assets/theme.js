
// Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "FullWidthSlider") {
    $this.FullWidthSliderActive();
  }else if($this.data('section') == "BestsellingProduct") {
   $this.BestsellingProductActive();
  }else if($this.data('section') == "FeaturedProduct") {
   $this.FeaturedProductActive();
  }else if($this.data('section') == "TabWithProduct") {
   $this.TabWithProductActive();
  }else if($this.data('section') == "Testimonial") {
   $this.TestimonialActive();
  }else if($this.data('section') == "BrandLogo") {
   $this.BrandLogoActive();
  }else if($this.data('section') == "Instagram") {
        $this.InstagramSection();
  }else if($this.data('section') == "HeaderSections") {
    $this.HeaderSectionsActivation();
  }else if($this.data('section') == "ListCollection") {
    $this.ListCollectionActivation();
  }else if($this.data('section') == "RelatedProduct") {
   $this.RelatedProductActive();
  }else if($this.data('section') == "CustomCollection") {
   $this.CustomCollectionActive();
  }else if($this.data('section') == "FeaturedCategories") {
    $this.find('.featured_column4').FeaturedCategories();
  }else if($this.data('section') == "FeaturedCollection") {
   $this.FeaturedCollectionActive();
  }else if($this.data('section') == "FeaturedCollection2") {
    $this.find('.product_slick_column5').FeaturedCollection2();
  }else if($this.data('section') == "HotDealProduct") {
   $this.HotDealProductActive();
  }else if($this.data('section') == "NewArrivals") {
    $this.find('.small_product_active').NewArrivals();
  }else if($this.data('section') == "TabWithProduct_2") {
    $this.find('.product_slick_column5').TabWithProduct_2();
  }else if($this.data('section') == "TabWithProduct_3") {
   $this.TabWithProduct_3Active();
  }else if($this.data('section') == "LatestBlog") {
   $this.LatestBlogActive();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.brand_cursole').BrandLogo();
  }else if($this.data('section') == "ProductWIthSidebar_1") {
    $this.find('.product_slick_column4').ProductWIthSidebar_1();
  }else if($this.data('section') == "ProductWIthSidebar_2") {
    $this.find('.product_slick_column4').ProductWIthSidebar_2();
  }else if($this.data('section') == "ProductWIthSidebar_3") {
    $this.find('.small_product_active').ProductWIthSidebar_3();
  }else if($this.data('section') == "ProductWIthSidebar_4") {
    $this.find('.small_product_active').ProductWIthSidebar_4();
  }else if($this.data('section') == "ProductWIthSidebar_5") {
    $this.find('.blog_column1').ProductWIthSidebar_5();
  }else if($this.data('section') == "BannerWithCollection") {
    $this.find('.product_column2').BannerWithCollection();
  }else if($this.data('section') == "CollectionThumbnail") {
    $this.find('.product_column1').CollectionThumbnail();
  }else if($this.data('section') == "SectionWithSidebar") {
    $this.SectionWithSidebar();
  }else if($this.data('section') == "SectionWithSidebar2") {
    $this.SectionWithSidebar2();
  }else{}   
}
    
  
  
       //  slider active js
$.fn.FullWidthSliderActive = function() {
  var $carousel = $('[data-owl-carousel]');
  var $OwlFullWidthSlider = $('.slider_area');

  if ($carousel.length) {
    $carousel.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlFullWidthSlider.owlCarousel();

  /*---background image---*/
  function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
      var bgImgUrl = $(this).data('bgimg');
      $(this).css({
        'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
      });
    });
  }
  jQuery(document).ready(function(){
    dataBackgroundImage();
  });
}; 
    

          
        //  Bestselling Product active js
$.fn.BestsellingProductActive = function() {
  var $carouse2 = $('[data-owl-carousel]');

 var $OwlBestsellingProduct = $('.best-selling-active');

  if ($carouse2.length) {
    $carouse2.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlBestsellingProduct.owlCarousel();


};
    

          
        //  Featured Product active js
$.fn.FeaturedProductActive = function() {
  var $carouse3 = $('[data-owl-carousel]');

 var $OwlFeaturedProduct = $('.featured-product-active');

  if ($carouse3.length) {
    $carouse3.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlFeaturedProduct.owlCarousel();


};
      
      
      
          
        //  Tab With Product active js
$.fn.TabWithProductActive = function() {
  var $carouse4 = $('[data-owl-carousel]');

 var $OwlTabWithProduct = $('.featured-product-active');

  if ($carouse4.length) {
    $carouse4.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlTabWithProduct.owlCarousel();


};
    
        
     //  Testimonial active js
    
$.fn.TestimonialActive = function() {
  var $carouse5 = $('[data-owl-carousel]');

 var $OwlTestimonial = $('.testimonial-active');

  if ($carouse5.length) {
    $carouse5.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlTestimonial.owlCarousel();
  


}; 
    
          
             
    //  Brand Logo active js
$.fn.BrandLogoActive = function() {
  var $carouse6 = $('[data-owl-carousel]');

 var $OwlBrandLogo = $('.brand_container');

  if ($carouse6.length) {
    $carouse6.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlBrandLogo.owlCarousel();


};
      
    
    // Instgram active js
    $.fn.InstagramSection = function(){
      var activation = this.find('[data-username]'),
          activeId = activation.attr('id'),
          clientUsername = activation.attr('data-username'),
          instagramHastag = activation.attr('data-hashtag'),
          ItemsLimit = activation.attr('data-limit'),
          imageSize = activation.attr('data-size'),
          instaslider = ".instagram-carousel";

      $.instagramFeed({
        'tag': instagramHastag,
        'username': clientUsername,
        'container': "#"+activeId,
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'styling': false,
        'items': ItemsLimit,
        'margin': 1,
        'image_size': imageSize
      });

 
    };

      
      $.fn.HeaderSectionsActivation = function() {


 
    /* Cart */
    $(".language-click , .icon-cart , .icon-setting").on("click", function() {
        $(this).parent().find('.language-dropdown , .shopping-cart-content , .setting-wrapper').slideToggle('medium');
    })

 
        
        
        
      };
      
 
 
         //  List Collection active js
$.fn.ListCollectionActivation = function() {
  var $carousel7 = $('[data-owl-carousel]');

 var $OwlListCollection = $('.featured-product-active');

  if ($carousel7.length) {
    $carousel7.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlListCollection.owlCarousel();


};
 
 
    
        //  Related Product active js
$.fn.RelatedProductActive = function() {
  var $carouse8 = $('[data-owl-carousel]');

 var $OwlRelatedProduct = $('.featured-product-active');

  if ($carouse8.length) {
    $carouse8.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlRelatedProduct.owlCarousel();


};
 
     
        //  Custom Collection active js
$.fn.CustomCollectionActive = function() {
  var $carouse9 = $('[data-owl-carousel]');

 var $OwlCustomCollection = $('.featured-product-active');

  if ($carouse9.length) {
    $carouse9.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  $OwlCustomCollection.owlCarousel();


};
 
 
 
 (function($) {
    "use strict";

	jQuery(document).ready(function(){
    
      
              
        	
	 /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
        
      
    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });
    
    
    /* Hover 3d init for tilt */
    if ($('.tilter').length > 0) {
        $('.tilter').tilt({
            maxTilt: 40,
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 800,
            transition: true,
        });
    }
    
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    
    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function() {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })
    
    /* isotop active */
    // filter items on button click
    $('.blog-area').imagesLoaded(function() {
        $('.portfolio-menu-active').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.blog-grid').isotope({
            itemSelector: '.blog-grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.blog-grid-item',
            }
        });
    });

	
	
  /* Ajax Cart */
    $(".cart-item").on('click', function(){
      $(this).addClass("loading add-item");
      setTimeout(function () {
        $(".cart-item").removeClass("loading");
      },1000);
      setTimeout(function () {
        $(".cart-item").removeClass("add-item");
      },2000);

    });    

          /*---  Accordion---*/
    $(".faequently-accordion").collapse({
        accordion:true,
        open: function() {
        this.slideDown(300);
      },
      close: function() {
        this.slideUp(300);
      }		
    });	  
	
	/* preloader */
    $(window).on('load', function() {
      $('#preloader_active').fadeOut('slow');
    }); 
      
      
    /* Match Heigh */  
    $(function() {
		$('.item').matchHeight();
	});  
      
    });

})(jQuery);



