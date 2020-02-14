!function(e){"use strict";const t=e("[data-animate-width]"),i=t.length;if(!i)return;var n=0;let s=setInterval(function(){const o=e(t.get(n++)),a=o.data("animate-width");o.css("width",a),n>=i&&clearInterval(s)},50)}(jQuery),function(e,t){"use strict";const i=e(".js-bravo-button:not(:disabled)");i.on("click",function(n){const s=e(this),o=parseInt(s.siblings(".bravo-block__number").text()),a=e(".bravo-block__number");i.attr("disabled",!0).removeClass("js-bravo-button").parent().addClass(t.className.isPressed),a.text(o+1),n.preventDefault()})}(jQuery,window.myConfig),function(e){"use strict";const t=".js-candidate-list-visibility-block",i=".js-candidate-list-visibility-item",n=["d-none","d-sm-block"];e(".js-candidate-list-visibility-button").on("click",function(s){const o=e(this);o.closest(t).find(i).removeClass(n),o.hide(),s.preventDefault(),s.stopPropagation()})}(jQuery),function(e){"use strict";const t=".js-channel-list-visibility-block",i=".js-channel-list-visibility-item",n=["d-none","d-xs-block"];e(".js-channel-list-visibility-button").on("click",function(s){const o=e(this);o.closest(t).find(i).removeClass(n),o.hide(),s.preventDefault(),s.stopPropagation()})}(jQuery),function(e,t){"use strict";t.get("consent")||e("div.consent-block").show();e(".js-consent-accept").on("click",function(){t.set("consent","1",{expires:365,path:"/"}),e(this).closest(".consent-block").remove()})}(jQuery,window.Cookies),function(e,t,i){"use strict";e(document).on("click",".copy-url-block .btn",function(){const n=e(this).siblings("input").val();i(n).then(function(){t.notification.show("Nuoroda buvo sėkmingai nukopijuota")}).catch(function(e){console.error("Nepavyko nukopijuoti nuorodos",e)})})}(jQuery,window.myConfig,window.copyToClipboard),function(e){"use strict";const t=e(".js-count-down"),i=function(e,t){parseInt(e.text())!==t&&e.text(t)};t.each(function(){const t=e(this),n=t.data("end-date");if(!n)return;const s=new Date(function(e){const t=e.split(" "),i=t[0].split("-");return i[1]+"/"+i[2]+"/"+i[0]+" "+t[1]}(n)).getTime(),o=t.find(".js-count-down-days"),a=t.find(".js-count-down-hours"),l=t.find(".js-count-down-minutes"),c=t.find(".js-count-down-seconds");let r=setInterval(function(){const e=(new Date).getTime(),t=s-e,n=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%36e5/6e4),m=Math.floor(t%6e4/1e3);i(o,n),i(a,d),i(l,u),i(c,m),t<0&&clearInterval(r)},1e3)})}(jQuery),function(e){"use strict";jQuery(".js-datepicker").Zebra_DatePicker({default_position:"below",disable_time_picker:!0,show_icon:!1,show_select_today:!1,lang_clear_date:"Išvalyti",days:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],months:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"]})}(),function(e){"use strict";const t=$(".js-day-program-list");let i;if(!t.length)return!1;const n=function(){if(document.body.clientWidth<e.breakpoint.md)return!1;t.each(function(){const t=$(this),i=t.children(".program-block"),n=t.height();let s=-10,o=!0;const a=function(t){const i=t.length?t[0].offsetHeight:0;o&&s+i<=n?(t.removeClass(e.className.isHidden),s+=i):(t.addClass(e.className.isHidden),o=!1)};setTimeout(function(){i.each(function(){const e=$(this),t=e.children(".program-block__title"),i=e.children(".program-block__list"),n=i.children(".program-item");s+=parseInt(e.css("margin-top")),s+=parseInt(i.css("margin-top")),a(t),n.each(function(){a($(this))})})},10)})};n(),$(window).on("resize",function(){clearTimeout(i),i=setTimeout(function(){n()},250)})}(window.myConfig),function(e){"use strict";const t=$(".js-dropdown-block-button"),i={lastParent:null,lastButton:null,open:function(t,n){i.lastParent&&i.lastButton&&i.lastParent!==t&&i.close(i.lastParent,i.lastButton),document.documentElement.classList.add(e.className.isDropdown),t.addClass(e.className.isActive),n.addClass(e.className.isActive),i.lastParent=t,i.lastButton=n,n.closest(".main-menu").addClass("is-fixed")},close:function(t,i){document.documentElement.classList.remove(e.className.isDropdown),t.removeClass(e.className.isActive),i.removeClass(e.className.isActive),i.closest(".main-menu").removeClass("is-fixed")},init:function(t,n){t.hasClass(e.className.isActive)?i.close(t,n):i.open(t,n)}};t.on("click",function(e){const t=$(this),n=t.closest(".dropdown-block");i.init(n,t),e.preventDefault()}),$(".js-dropdown-sub").on("click",function(e){$(this).closest(".is-sub-list").toggleClass("is-expanded"),e.preventDefault()})}(window.myConfig),function(e,t){"use strict";const i=e(".js-filter-tag-list-block-button"),n=e(".js-filter-tag-list-block-input"),s=e(".js-filter-tag-list-block-input-reset"),o=e(".js-filter-tag-list-block-no-result"),a=e("html");let l={category:null,text:null};const c=function(){const t=e(".js-tag-list-block");let i=0;t.each(function(){const t=e(this),n=t.find(".tag-list-block__item"),s=t.data("category");let o=!l.category||l.category===s;t.hide(),o&&l.text?(n.hide(),o=!1,n.each(function(){const t=e(this);t.text().toLowerCase().indexOf(l.text.toLowerCase())>-1&&(t.show(),o=!0)})):n.show(),o&&(t.show(),i++)}),o.toggleClass("d-none",!!i)},r=function(e){l.text=e,c(),a.toggleClass(t.className.isSearchValue,!!e.length)};i.on("click",function(){const n=e(this),s=n.data("category-target");!function(e){i.removeClass(t.className.isActive),e.addClass(t.className.isActive)}(n),l.category=s,c()}),s.on("click",function(){n.val(""),r("")}),n.on("input",function(){r(this.value)}),c()}(jQuery,window.myConfig),function(e){"use strict";const t=$(".js-filter-button");if(!t.length)return!1;const i={open:function(){document.documentElement.classList.add(e.className.isFilter),t.addClass(e.className.isSelected)},close:function(){document.documentElement.classList.remove(e.className.isFilter),t.removeClass(e.className.isSelected)}};t.on("click",function(t){document.documentElement.classList.contains(e.className.isFilter)?i.close():i.open(),t.preventDefault()}),e.filter=i}(window.myConfig),function(e){"use strict";e(".js-font-size").on("click",function(t){const i=e(this),n=i.closest(".article-content");let s=i.attr("data-size");(s=s?parseInt(s)+1:1)>2?(i.removeAttr("data-size"),n.removeAttr("data-size")):function(e){i.attr("data-size",e),n.attr("data-size",e)}(s),t.preventDefault()})}(jQuery),function(e){"use strict";const t=document.querySelector(".sticky-header");if(!t)return!1;const i={offset:e.helpers.isMobile()?50:e.helpers.isTablet()?150:200,tolerance:{up:20,down:5},classes:{initial:"sticky-header",pinned:"sticky-header--pinned",unpinned:"sticky-header--unpinned",top:"sticky-header--top",notTop:"sticky-header--not-top",bottom:"sticky-header--bottom",notBottom:"sticky-header--not-bottom"}};new Headroom(t,i).init()}(window.myConfig),function(e){"use strict";window.myConfig.lazyLoadInstance=new LazyLoad({elements_selector:".js-lazy"})}(),function(e){"use strict";const t=e(".logo__svg linearGradient");let i=[];t.each(function(t){const n=e(this);let s=n.attr("id");const o=s+t;s.indexOf(s)>-1&&(!function(e,t,i){e.attr("id",i),e.closest("svg").find('[fill="url(#'+t+')"]').attr("fill","url(#"+i+")")}(n,s,o),s=o),i.push(s)})}(jQuery),function(e){"use strict";const t=$(".js-main-menu"),i=t.find(".menu-list__item"),n=t.siblings(".main-menu__more-button"),s=n.find(".dropdown-menu"),o=Math.ceil(n.width())+20;let a;if(!t.length||!i.length)return!1;const l=function(){if(document.body.clientWidth<e.breakpoint.xs)return!1;setTimeout(function(){let a=t[0].clientWidth,l=[],c=0;if(i.each(function(){const t=$(this);(c=t[0].offsetLeft+t[0].clientWidth)>a-o?(l.push({item:t,href:t.children().attr("href"),text:t.text()}),t.addClass(e.className.isHidden)):t.removeClass(e.className.isHidden)}),c<=a){for(let t=0;t<l.length;t++)$(l[t].item).removeClass(e.className.isHidden);l=[]}t.removeClass(e.className.isHidden),n.toggleClass(e.className.isHidden,!l.length),function(e){let t="",i=e.length;for(let n=0;n<i;n++){const i=e[n];t+='<a class="dropdown-item" href="'+i.href+'">'+i.text+"</a>"}s.empty().append($(t))}(l)},20)};l(),$(window).on("resize",function(){clearTimeout(a),a=setTimeout(function(){l()},250)})}(window.myConfig),function(e,t){"use strict";t.initMap=function(){new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8})}}(jQuery,window.myConfig),function(e,t){"use strict";const i=e(".js-menu-block-button"),n=e("html"),s=document.querySelector(".menu-block"),o=e(".menu-block .menu-block__menu-lists > .menu-list .menu-list__item"),a=function(){n.addClass(t.className.isMenuBlock),e(document).on("keydown.menuBlock",function(e){27===e.keyCode&&(document.documentElement.classList.contains(t.className.isSubscription)?t.subscription.close():l())}),s.scrollTop=0,t.helpers.lock(!0)},l=function(){n.removeClass(t.className.isMenuBlock),t.subscription.close(),t.helpers.lock(!1),e(document).off("keydown.menuBlock")};var c=function(e,t,i,n,s){var o=e-t,a=i.slice(0,i.indexOf(" ")).replace(/[^0-9]/g,"");console.log("d_curr",a),console.log(e,t,i,n,s);return o<60?o+" sek.":o<3600?Math.round(o/60)+" min.":o<=10800?Math.round(o/3600)+" val.":a==n?"Šiandien":a==s?"Vakar":i};i.on("click",function(i){n.hasClass(t.className.isMenuBlock)?l():(a(),e("#menu_aktualu").data("appended")||e.ajax({url:"/static/tops/tops.json",success:function(t){if(t&&t.tops&&t.tops.length>0)for(var i='<div class="menu-block-news">                     <div class="menu-block-news__title">Aktualu</div>                     <div class="row">',n=0,s=t.tops.length;n<s;n++){var o=t.tops[n];i+=n<2?'<div class="col-md-6">                                   <div class="news news--xs news--md-md">':2==n?'<div class="col-lg-6 d-md-none d-lg-block">                                    <div class="news news--xs news--md-md">':'<div class="col-lg-6 d-none d-lg-block">                                    <div class="news news--xs news--md-md">',i+='<div class="media-block">                               <div class="media-block__container">',o.photo_id&&(i+='<div class="media-block__wrapper"><img class="media-block__image" src="'+o.img_path_prefix+"393x221"+o.img_path_postfix+'"',o.photo_horizontal&&(i+=' style="width:100%"'),i+="/></div>"),o.is_video&&(i+='<span class="play-button"><svg class="svg-icon play-button__icon" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">                                                <g stroke="none" stroke-width="1" fill-rule="evenodd">                                                   <g transform="translate(-270.000000, -1172.000000)" fill-rule="nonzero">                                                      <g transform="translate(80.000000, 1069.000000)">                                                         <g transform="translate(178.000000, 92.000000)">                                                            <path d="M25.4756166,18.8480303 L13.3723099,24.8996836 C12.9038983,25.1338894 12.3343144,24.9440281 12.1001087,24.4756166 C12.0342743,24.3439479 12,24.1987595 12,24.0515495 L12,11.9482428 C12,11.4245428 12.4245428,11 12.9482428,11 C13.0954528,11 13.2406412,11.0342743 13.3723099,11.1001087 L25.4756166,17.151762 C25.9440281,17.3859678 26.1338894,17.9555517 25.8996836,18.4239632 C25.8079281,18.6074742 25.6591275,18.7562748 25.4756166,18.8480303 Z"></path>                                                         </g>                                                      </g>                                                   </g>                                                </g>                                             </svg></span>'),i+='<a class="media-block__link" href="'+o.url+'"></a>                                    </div>                                 </div>',i+='<div class="info-block">                                 <h2 class="info-block__category"><a class="info-block__link" href="'+o.category_url+'">'+o.category_title+'</a></h2>                                 <span class="info-block__text">'+c(t.time,o.unix_time,o.item_date,t.today,t.yesterday)+'</span>                              </div>                            <h3 class="news__title"><a href="'+o.url+'">'+o.title+"</a></h3>                                 </div>                              </div>"}i+="</div></div>",e("#menu_aktualu").prepend(i),e("#menu_aktualu").data("appended",1)}})),i.preventDefault()});const r=function(t){const i=e(t.currentTarget),n=i.data("menu-list"),s=i.closest(".menu-block__menu-lists").find(".menu-block__sub-lists");i.addClass("is-active").siblings(".is-active").removeClass("is-active"),s.find(".menu-block__sub-list.is-active").removeClass("is-active"),s.find('[data-target="'+n+'"]').addClass("is-active")};e(window).on("load resize",function(){t.helpers.isDesktopXl()?o.on("mouseover",r):o.off("mouseover",r)})}(jQuery,window.myConfig),function(e,t){if(t&&e){var i="lt";e.match(/^\/en\//)&&(i="en"),e.match(/^\/ru\//)&&(i="ru"),t.innerHTML+="<span>"+i+"<span>";var n=document.getElementById("languageSelection_"+i);n&&(n.className+=" is-active")}}(window.location.pathname,document.getElementById("languageSelection")),function(e){"use strict";e.fn.modal&&e.fn.modal.Constructor.prototype._enforceFocus&&(e.fn.modal.Constructor.prototype._enforceFocus=function(){});const t=e('.modal[data-auto-load="true"]');t&&t.modal("show")}(jQuery),function(e,t){"use strict";e(".news__title a:not(.link-primary)").on("mouseover",function(){e(this).parent().addClass(t.className.isHover)}).on("mouseout",function(){e(this).parent().removeClass(t.className.isHover)})}(jQuery,window.myConfig),function(e,t){"use strict";const i={show:function(t){const n=e(i.getHtml(t));i.getParentElement().remove(),e("body").append(n),setTimeout(function(){n.addClass("is-visible")},10),setTimeout(function(){i.hide()},5e3)},getParentElement:function(){return e(".notification")},hide:function(){const e=i.getParentElement();e.removeClass("is-visible"),setTimeout(function(){e.remove()},200)},getHtml:function(e){return'<div class="notification"><div class="notification__content">'+e+'</div><button class="btn btn--link js-notification-button" type="button"><span class="btn__text">Gerai</span></button></div>'}};e(document).on("click",".js-notification-button",function(e){i.hide(),e.preventDefault()}),e(document).on("click","[data-notification]",function(t){const n=e(this).data("notification");n&&i.show(n),t.preventDefault()}),t.notification=i}(jQuery,window.myConfig),function(){"use strict";const e=$("#problemReport"),t=$(".js-report-problem-selection"),i=$(".js-report-problem-comment"),n=$(".js-report-problem-submit");if(!(e.length&&t.length&&i.length&&n.length))return!1;const s={open:function(){e.modal("show"),s.addText()},hide:function(){e.modal("hide")},clear:function(){i.val("")},opened:function(){i.trigger("focus")},addText:function(){t.text(s.getText())},submit:function(){s.clear()},getText:function(){let e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text),e}};e.on("shown.bs.modal",function(){s.opened()}).on("hidden.bs.modal",function(){s.clear()}),$(document).on("click",'[data-share-via="exclamation"]',function(e){s.open(),e.preventDefault(),e.stopPropagation()}),n.on("click",function(){s.hide()})}(),function(e){"use strict";const t=$(".js-program-button");if(!t.length)return!1;const i={open:function(){document.documentElement.classList.add(e.className.isProgram),$(document).on("keydown.program",function(e){27===e.keyCode&&i.close()}),e.helpers.lock(!0)},close:function(){document.documentElement.classList.remove(e.className.isProgram),$(document).off("keydown.program"),e.helpers.lock(!1)}};t.on("click",function(t){document.documentElement.classList.contains(e.className.isProgram)?i.close():i.open(),t.preventDefault()}),e.program=i}(window.myConfig),function(e){"use strict";const t=$(".js-search-input"),i=$(".js-search-reset");var n=null,s="",o=0,a="",l="",c="",r="",d="",u=1;if(!t.length)return!1;const m=function(){document.documentElement.classList.remove(e.className.isSearchValue),t.val("")},f=function(t){document.documentElement.classList.toggle(e.className.isSearchValue,t.length>0)};t.on("input keypress",function(){console.info("search",this.value),s=this.value,_=1,k(),f(this.value)}),i.on("click",function(){m(),t.focus(),s="",k()}),$("#filter_tipas > li").on("click",function(e){$("#filter_tipas").find("li").removeClass("is-active"),$(e.currentTarget).addClass("is-active"),console.log(e,$(e.currentTarget).data("type")),o=$(e.currentTarget).data("type"),$("#filter_tipas_name").html($(e.currentTarget).find("span").first().html()),u=1,jQuery("#_found_titles").html(""),d="",$("#_found_titles_name").html(""),_=1,0,p(),k()}),$("#filter_tema > li").on("click",function(e){$("#filter_tema").find("li").removeClass("is-active"),$(e.currentTarget).addClass("is-active"),console.log(e,$(e.currentTarget).data("tema")),a=$(e.currentTarget).data("tema"),$("#filter_tema_name").html($(e.currentTarget).find("span").first().html()),d="",u=1,jQuery("#_found_titles").html(""),_=1,0,p(),k()}),$("#_found_titles").on("click","li",function(e){$("#_found_titles").find("li").removeClass("is-active"),$(e.currentTarget).addClass("is-active"),console.log($(e.currentTarget).data("id")),d=$(e.currentTarget).data("id"),$("#_found_titles_name").html($(e.currentTarget).find("span").first().html()),u=0,_=1,0,p(),k()});var p=function(){$("div.filter-block").find("button.btn.btn--primary.dropdown-block__button.js-dropdown-block-button.is-active").click()},h=0,g=function(e,t,i,n){$("#_date_select_ul").find("li").removeClass("is-active"),$(e).closest("li").addClass("is-active")},v=function(e){$(e).data("Zebra_DatePicker").clear_date()};$("#_date_select_ul").find('li[data-common="1"]').on("click",function(e){g(e.currentTarget),u=0,r=$(e.currentTarget).data("val"),console.log(r),l="",c="",h=1,v(".js-datepicker_from"),v(".js-datepicker_to"),h=0,_=1,0,$("#_date_select_name").html($(e.currentTarget).find("span").first().html()),p(),k()});var w=function(){var e="";e=""==l&&""==c?"Visos":""!=c&&""==l?"Iki "+c:""==c&&""!=l?"Nuo "+l:l+" - "+c,$("#_date_select_name").html(e)};$(".js-datepicker_from").Zebra_DatePicker({default_position:"below",disable_time_picker:!0,select_other_months:!0,show_icon:!1,show_select_today:"Šiandien",onSelect:function(e,t,i){g(this),u=0,r="",l=t,_=1,0,w(),p(),k()},onClear:function(e,t,i){0==h&&(g(this),u=0,r="",l="",console.log("clear"),_=1,0,w(),p(),k())},lang_clear_date:"Išvalyti",days:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],months:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"]}),$(".js-datepicker_to").Zebra_DatePicker({default_position:"below",disable_time_picker:!0,show_icon:!1,show_select_today:"Šiandien",onSelect:function(e,t,i){g(this),u=0,r="",c=t,_=1,0,w(),p(),k()},onClear:function(e,t,i){0==h&&(g(this),u=0,r="",c="",_=1,0,w(),p(),k())},lang_clear_date:"Išvalyti",days:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],months:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"]}),$("#load_more_button").on("click",function(){k(1)});var _=1,k=function(e){n&&(clearTimeout(n),n=null,console.log("timer killed"));var t=e?0:u;n=setTimeout(function(){n=null,jQuery.ajax({url:"/api/search",data:{q:s,type:o,tema:a,days:r,dfrom:l,dto:c,page:_,category_id:d},success:function(i){if(console.log("upd_category",t),i&&i.meta&&($("#result_count").html("&nbsp;("+i.meta.total+" / "+i.meta.total_found+")"),i.meta.total<i.meta.total_found?($("#load_more_button").show(),console.log("show",e),1,_++):($("#load_more_button").hide(),0,_=1)),i&&i.items)if(i.items.length>0){jQuery("#no_results").hide(),e||1!=t||jQuery("#_found_titles").html("");for(var n="",s='<li data-id="" class="dropdown-block__item">                                                      <a class="dropdown-block__link" href="#">                                                      <span class="dropdown-block__text">Visos</span></a></li>',o={},a=0,l=i.items.length;a<l;a++){var c=i.items[a];if(1==t&&a<50){var r="";1==c.is_audio?r=c.category_title+" / audio":1==c.is_video?r=c.category_title+" / video":0==c.is_videoteka&&(r=c.category_title),o[r]||(s+='<li data-id="'+c.category_id+'" class="dropdown-block__item">                                                      <a class="dropdown-block__link" href="#">                                                      <span class="dropdown-block__text">'+r+"</span></a></li>",o[r]=1)}c._image_size="282x158",n+='<div class="col-6 col-sm-3"><div class="news news--xs news--xs-md news--sm-sm news--md-md">'+tmpl("article-block",{el:c})+"</div></div>"}e?jQuery("#searchresults").append(n):(jQuery("#searchresults").html(n),1==t&&jQuery("#_found_titles").html(s),$("#search_rez_block").show())}else e||(jQuery("#searchresults").html(""),$("#search_rez_block").hide(),jQuery("#no_results").show())}})},300)};k()}(window.myConfig),function(e,t){"use strict";e(".js-channel-item-list-slider").each(function(){const i=e(this),n=i.siblings(".slider-nav"),s={draggable:!1,infinite:!1,mobileFirst:!0,slidesToShow:4,prevArrow:n.find(".slider-nav__arrow--prev"),nextArrow:n.find(".slider-nav__arrow--next"),responsive:[{breakpoint:t.breakpoint.xl,settings:{slidesToShow:6}},{breakpoint:t.breakpoint.lg,settings:{slidesToShow:5}}]};let o=function(){return i.hasClass("slick-initialized")};const a=function(){window.innerWidth>=t.breakpoint.md?o()||i.slick(s):o()&&i.slick("unslick")};let l=!1;window.addEventListener("resize",function(){clearTimeout(l),l=setTimeout(a,250)}),window.addEventListener("load",a),window.addEventListener("scroll",a)})}(jQuery,window.myConfig),function(e,t){"use strict";function i(e){this.$slider=e,this.$sliderNav=this.$slider.siblings(".slider-nav");const i=this.$sliderNav.find(".slider-nav__arrow--prev"),n=this.$sliderNav.find(".slider-nav__arrow--next");this.options={draggable:!1,infinite:!1,mobileFirst:!0,slidesToShow:3,prevArrow:i,nextArrow:n,responsive:[{breakpoint:t.breakpoint.sm,settings:{slidesToShow:3}},{breakpoint:t.breakpoint.xs,settings:{slidesToShow:2}},{breakpoint:0,settings:{slidesToShow:1}}]},this.init()}i.prototype={init:function(){this.initSlider()},isSlider:function(){return this.$slider.hasClass("slick-initialized")},destroySlider:function(){this.isSlider()&&this.$slider.slick("unslick")},initSlider:function(){this.isSlider()||this.$slider.slick(this.options)}},t.ProgramSlider=i}(jQuery,window.myConfig),function(e,t){"use strict";function i(t){this.id=t,this.gallerySelector='.gallery-block[data-id="'+t+'"]',this.galleryEl=e(this.gallerySelector),this.galleryContainer=this.galleryEl.find(".gallery-block__swiper .swiper-container"),this.galleryWrapper=this.galleryEl.find(".gallery-block__swiper .swiper-wrapper"),this.initialized=!1,this.closeButton=this.galleryEl.find(".js-gallery-block-close-button");var i=[];this.galleryEl.find("div.swiper-slide.gallery-block__slide").each(function(e,t){i.push(t.outerHTML)}).detach(),this.gallerySlides=i,this.gallerySwiper=null}i.prototype={init:function(){document.documentElement.classList.contains(t.className.isGallery)?this.close():this.open()},open:function(){let e=this;document.documentElement.classList.add(t.className.isGallery),this.galleryEl.addClass(t.className.isActive),this.initSwiper(),t.helpers.lock(!0),this.initKeyboardEvents(),this.closeButton.on("click.galleryBlock",function(t){e.close(),t.preventDefault()})},close:function(){document.documentElement.classList.remove(t.className.isGallery),this.galleryEl.removeClass(t.className.isActive),t.helpers.lock(!1),this.hideKeyboardEvents(),this.closeButton.off("click.galleryBlock")},initSwiper:function(){if(this.initialized)return;const e=new Swiper(this.gallerySelector+" .gallery-block__thumbnails .swiper-container",{spaceBetween:5,slidesPerView:"auto",freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,freeModeMomentumRatio:.5,preloadImages:!1,loop:!1,lazy:{loadPrevNext:!0,loadPrevNextAmount:15,loadOnTransitionStart:!0}});this.gallerySwiper=new Swiper(this.gallerySelector+" .gallery-block__swiper .swiper-container",{slidesPerView:1,centeredSlides:!0,breakpointsInverse:!0,preloadImages:!1,virtual:{slides:this.gallerySlides},lazy:{loadPrevNext:!0,loadPrevNextAmount:2,loadOnTransitionStart:!0},loop:!1,navigation:{nextEl:this.gallerySelector+" .slider-nav__arrow--next",prevEl:this.gallerySelector+" .slider-nav__arrow--prev"},keyboard:{enabled:!0},thumbs:{swiper:e},on:{slideChange:function(){setTimeout(function(){let e="undefined"!=typeof pp_gemius_identifier?pp_gemius_identifier:null;"function"==typeof gemius_hit&&void 0!==e&&(e=e.replace(/^used\_/i,""),gemius_hit(e))}(),100)}}}),this.initialized=!0},toggleDescription:function(){const e=this.galleryContainer.hasClass(t.className.isDescription);this.galleryContainer.toggleClass(t.className.isDescription,!e)},initKeyboardEvents:function(){let t=this;e(document).on("keydown.galleryBlock",function(e){27===e.keyCode&&t.close()}),this.galleryWrapper.on("click.galleryBlock",function(){t.toggleDescription()})},hideKeyboardEvents:function(){e(document).off("keydown.galleryBlock"),this.galleryWrapper.off("click.galleryBlock")}};var n={};e(document).on("click",".js-gallery-block-button",function(t){var s=e(this).data("gallery"),o=e(this).data("idx");s&&(n[s]||(n[s]=new i(s)),n[s].init(),o&&n[s].gallerySwiper.slideTo(o-1,0),t.preventDefault(),t.stopPropagation())}),t.GalleryBlock=i}(jQuery,window.myConfig),function(e,t){"use strict";e(".js-news-slider").each(function(){const i=e(this),n=i.siblings(".slider-nav"),s={draggable:!1,infinite:!1,mobileFirst:!0,slidesToShow:3,prevArrow:n.find(".slider-nav__arrow--prev"),nextArrow:n.find(".slider-nav__arrow--next"),responsive:[{breakpoint:t.breakpoint.lg,settings:{slidesToShow:4}},{breakpoint:t.breakpoint.md,settings:{slidesToShow:3}}]};let o=function(){return i.hasClass("slick-initialized")};const a=function(){window.innerWidth>=t.breakpoint.md?o()||i.slick(s):o()&&i.slick("unslick")};let l=!1;window.addEventListener("resize",function(){clearTimeout(l),l=setTimeout(a,250)}),window.addEventListener("load",a),window.addEventListener("scroll",a)})}(jQuery,window.myConfig),function(e,t){"use strict";const i=e(".js-subscription-button"),n={open:function(){i.addClass(t.className.isActive),document.documentElement.classList.add(t.className.isSubscription)},close:function(){i.removeClass(t.className.isActive),document.documentElement.classList.remove(t.className.isSubscription)},init:function(){document.documentElement.classList.contains(t.className.isSubscription)?n.close():n.open()}};i.on("click",function(){n.init()}),t.subscription=n}(jQuery,window.myConfig),function(e){"use strict";var t=function(e,i){var n=t.cache[e];return i?n(i,t):function(e){return n(e,t)}};t.cache={"buttons-play":function(e,t){return'<div class="media-block__play-button"><span class="play-button"><i class="icon icon-video-play"></i></span></div>'},"category-item":function(e,t){for(var i=t.encode,n=function(e,i){s+=t(e,i)},s="",o=0,a=e.length;o<a;o++){var l=e[o];s+='<div class="col-6">\n         <div class="news news--xs news--xs-md news--sm-sm news--md-md">\n             <div class="media-block',l.is_video&&(s+="  media-block--16-9"),s+='">\n                <div class="media-block__container">\n                   <div class="media-block__wrapper">',n("image-block",{el:l,size:"393x221"}),s+="</div>",l.is_video&&n("buttons-play",{}),l.url&&(s+='<a class="media-block__link" href="'+i(l.url)+'"></a>'),s+="</div>\n             </div>",l.category_url&&(s+='\n                        <div class="info-block">\n                           <h2 class="info-block__category"><a class="info-block__link" href="'+i(l.category_url)+'">'+i(l.category_title)+'</a></h2>\n                           <span class="info-block__text" data-id="'+i(l.id)+'">'+i(l.item_date)+'</span>\n                        </div>\n                        <h3 class="news__title"><a href="'+i(l.url)+'">'+i(l.title)+"</a></h3>\n                  "),s+="\n         </div>\n      </div>"}return s+="\n"},"image-block":function(e,t){var i=t.encode,n="";return e.el.photo_id?(n+='\n      <img class="media-block__image" src="'+i(e.el.img_path_prefix)+i(e.size)+i(e.el.img_path_postfix)+'"',e.el.photo_horizontal&&(e.el.photo_horizontal_small?n+='  style="max-width:none;height:100%"':n+=' style="width:100%"'),n+=" />"):n+='<img style="height:100%;width:auto" src="/images/default-img.svg"/>',n}},t.encReg=/[<>&"'\x00]/g,t.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},t.encode=function(e){return(null==e?"":""+e).replace(t.encReg,function(e){return t.encMap[e]||""})},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.tmpl=t}(this),function(e){"use strict";(0,window.ShareThis)({selector:".js-text-selection",sharers:[{render:function(e,t,i){return'<a href=\'#\'><svg class="svg-icon svg-icon-copy" width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-670.000000, -2972.000000)"> <g transform="translate(660.000000, 2964.000000)"> <g transform="translate(10.000000, 9.000000)"> <rect x="0" y="4" width="12" height="12" rx="2"></rect> <path d="M6,0 L13,0 C14.6568542,-3.04359188e-16 16,1.34314575 16,3 L16,11" stroke-width="2" stroke-linecap="round"></path> </g> </g> </g> </g></svg></a>'},name:"copy"},{render:function(e,t,i){return'<a href=\'#\'><svg class="svg-icon svg-icon--light" width="4px" height="18px" viewBox="0 0 4 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g transform="translate(-712.000000, -2972.000000)"> <g transform="translate(660.000000, 2964.000000)"> <path d="M54,26 C52.8954305,26 52,25.1045695 52,24 C52,22.8954305 52.8954305,22 54,22 C55.1045695,22 56,22.8954305 56,24 C56,25.1045695 55.1045695,26 54,26 Z M52,10 C52,8.8954305 52.8954305,8 54,8 C55.1045695,8 56,8.8954305 56,10 C56,10.7863087 55.3333333,18.2705195 55.3333333,18.6666667 C55.3333333,19.4030463 54.7363797,20 54,20 C53.2636203,20 52.6666667,19.4030463 52.6666667,18.6666667 C52.6666667,18.2705195 52,10.7863087 52,10 Z"></path> </g> </g> </g></svg></a>'},name:"exclamation"},window.ShareThisViaTwitter]}).init()}(jQuery),function(e,t){"use strict";document.getElementById("tvprog")&&setInterval(function(){e.get("/static/tvprog/tvprog.json",function(t){if(t&&t.tvprog&&t.tvprog.items)for(var i=e("#tvprog"),n=0,s=t.tvprog.items.length;n<s;n++){var o=t.tvprog.items[n],a=i.find('div[data-tvprogname="'+o.channel+'"]');a&&(a.find("h3.channel-item__title").html(o.title),a.find("div.live-program__progress").attr("style","width: "+o.proc+"%"),a.find("span.data-block__text").html(o.time_start+" - "+o.time_end))}})},6e4)}(jQuery,window.myConfig);