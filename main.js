jQuery( document ).ready(function() {
    jQuery("#signature").prepend("<p class='remedio'>Nakódovalo <a href='http://www.remedio.cz' target='_blank'>Remedio Digital</a> | </p>");
    $("<img src='/user/documents/upload/kodovani/magnifier.svg'>").prependTo(".navigation-buttons a[data-target=\"search\"]");
    $(".navigation-buttons a[data-target=\"search\"] i").remove();
    $("<img src='/user/documents/upload/kodovani/user.svg'>").prependTo(".navigation-buttons a[data-target=\"login\"]");
    $(".navigation-buttons a[data-target=\"login\"] i").remove();
    $("<img src='/user/documents/upload/kodovani/shopping-bag.svg'>").prependTo(".navigation-buttons a[data-target=\"cart\"]");
    $(".navigation-buttons a[data-target=\"cart\"] .icon-cart").remove();
    $(".in-index #content > .products-wrapper").each(function (index){
        if(index == 0){
            $(this).addClass("normalproducts");
        }
        if($(this).prev(".homepage-group-title").html().indexOf("VIP") > -1){
            $(this).prev(".homepage-group-title").hide();
            $(this).hide();
            $("<div class=\"vip-product\"><div class=\"vip-text\"><div class=\"vip-title\"></div><div class=\"vip-description\"></div><div class=\"btn-holder\"></div></div><div class=\"vip-image\"></div></div>").insertBefore($(this));
            $("<p>" + $(this).find(".p-desc").html() + "</p>").appendTo(".vip-description");
            $("<h4>" + $(this).find(".name span").html() + "</h4>").appendTo(".vip-title");
            var myimage = $(this).find(".image img").attr("src").replace("detail", "orig");
            $("<a href='" + $(this).find(".name").attr("href") + "' class='black-btn'>Detail produktu</a>").appendTo(".vip-product .btn-holder");
            $("<img src='" + myimage + "'>").appendTo(".vip-image");
        }
        if(index == 2){
            $("<div class=\"highlighted-products\"></div>").insertBefore($(this));
            $(this).hide();
            $(this).find(".product").each(function (index){
                index = index + 1;
                $("<div class=\"highlighted-product\"><div class=\"highlighted-text\"><div class=\"highlighted-title\"></div><div class=\"highlighted-description\"></div><div class=\"btn-holder\"></div></div><div class=\"highlighted-image\"></div></div>").appendTo(".highlighted-products");
                $("<p>" + $(this).find(".p-desc").html() + "</p>").appendTo(".highlighted-products > .highlighted-product:nth-child(" + index + ") .highlighted-description");
                $("<h4>" + $(this).find(".name span").html() + "</h4>").appendTo(".highlighted-products > .highlighted-product:nth-child(" + index + ") .highlighted-title");
                var myimage = $(this).find(".image img").attr("src").replace("detail", "orig");
                $("<a href='" + $(this).find(".name").attr("href") + "' class='black-btn'>Koupit produkt</a>").appendTo(".highlighted-products > .highlighted-product:nth-child(" + index + ") .btn-holder");
                $("<img src='" + myimage + "'>").appendTo(".highlighted-products > .highlighted-product:nth-child(" + index + ") .highlighted-image");
            })
            $(".highlighted-products").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            });
        }
        else {
            $(this).addClass(("myproducts" + (index + 1)));
        }
    })
    $(".in-index .benefit-banners-full-width").insertAfter(".myproducts1");
    $(".next-to-carousel-banners").insertAfter(".benefit-banners-full-width");
    $(".homepage-blog-wrapper").addClass("full-width");
    $(".homepage-blog-wrapper > .homepage-group-title").html("Blog");
    $(".in-index .read-article").html("Číst celý článek");
    $("<p class='poem'>salvus básní</p>").prependTo(".myproducts1 .p-in");
    if($(".type-category .flag-promo").length > 0){
        var promoproduct = $(".flag-promo").parent(".flags").parent(".image").parent(".p");
        $("<div class='mypromo'><div class='mypromo-inner mycontainer'><div class='mypromo-img'><img src='#' alt=''></div><div class='mypromo-text'><p>Libovolný nadpis</p><h2 class='mypromo-name'></h2><a href='#' class='mypromo-btn'>Koupit produkt</a></div></div></div>").insertAfter("#header");
        $(".mypromo-name").html(promoproduct.find(".name span").html());
        $(".mypromo-btn").attr("href", promoproduct.find(".name").attr("href"));
        var promoimg = promoproduct.find(".image img").attr("data-micro-image");
        promoimg = promoimg.replace("big", "orig");
        $(".mypromo-img img").attr("src", promoimg);
    }
    if($(".type-category .footer-newsletter-full-width").length > 0){
        $("<div class='blog-holder'></div>").insertBefore(".type-category .footer-newsletter-full-width");
    }
    else{
        $("<div class='blog-holder'></div>").insertBefore(".type-category #footer");
    }
    if($(".type-detail").length > 0){
        $(".detail-parameter-availability").insertBefore(".p-short-description");
        $(".p-price-wrapper").insertAfter(".p-to-cart-block .quantity");
        $("<div class='myquantity'><p class='myquantity-text'>Množství</p></div>").insertBefore(".add-to-cart .quantity");
        $(".add-to-cart .quantity").appendTo(".myquantity");
        $(".p-detail-inner .p-to-cart-block .add-to-cart-button").html("Koupit <span><img src='/user/documents/upload/kodovani/zobacek.svg' width='5' alt=''></span>");
        if($(".footer-newsletter-full-width").length > 0){
            $("<div class='blog-holder'></div>").insertBefore(".footer-newsletter-full-width");
        }
        else{
            $("<div class='blog-holder'></div>").insertBefore("#footer");
        }
        $(".benefit-banners-full-width").insertBefore(".blog-holder");
    }
    if($(".blog-holder").length > 0){
        $(".blog-holder").load("/cache/ .homepage-blog-wrapper", function (){
            $(".homepage-blog-wrapper").removeClass("row");
        });
    }
    if($(".usp-holder").length > 0){
        $(".usp-holder").load("/cache/ .benefitBanner", function (){
            $(".position--benefitHomepage").removeClass("position--benefitHomepage");
        });
    }
})
