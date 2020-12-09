
  function Myfunction(Language) {
    var programming = document.getElementsByClassName("opentext");
    for (i = 0; i < programming.length; i++) {
      programming[i].style.display = "none";
    }
    document.getElementById(Language).style.display = "block";
  }

  $(document).ready(function() {
  
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tab-menu li'),
        $line = $('<div class="line"></div>').appendTo($tabMenu);
    
    $allTabs.not(':first-of-type').hide();  
    $tabMenu.filter(':first-of-type').find(':first').width('100%')
    
    $tabMenu.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $allTabs.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $tabMenu.on('click', function() {
      
      var dataTab = $(this).data('tab'),
          $getWrapper = $(this).closest($wrapper);
      
      $getWrapper.find($tabMenu).removeClass('active');
      $(this).addClass('active');
      
      $getWrapper.find($allTabs).hide();
      $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
    });
  
  });//end ready


 $(document).ready(function(){
  $('.secondheader').click(function(){
    $('.center').animate({ top: '0px'}, 10);
    $('.header-image').click(function(){
      $('.center').animate({ top: '-110px'}, 10);
    })
  })
 })

 $(document).ready(function(){
  $('.sidephoto').click(function(){
    $('.footer').animate({ bottom: '0px'}, 300);
  })
 })


$(document).ready(function () {

  //Get Left Menu Categories
  let boxs = $(".header-image");

  //Get wrapper of contents
  let sideBar = $("#sidebar");

  //Get All Contents
  let contents = $(".content");

  $('.header-image').click(function(){
    $(sideBar).animate({ right: '-3000px'}, 300);
    $('.footer').animate({ bottom: '-190px'}, 300);
  })

  //Loop for in box
  $(boxs).each(function () {

    //Add click func to every box
    $(this).click(function () {

      //Get data category of clicked box
      let dataCategoryOfLeftMenu = $(this).data("category");

      //Change sidebar of contents to display block for showing contents
      $(sideBar).animate({ right: '0px' }, 300);
      
      //Loop for in contents to find equal content of box
      $(contents).each(function () {

        //Get every content data id
        let dataCategoryofContent = $(this).data("category");

        //Check if data categories is equal 
        if (dataCategoryOfLeftMenu == dataCategoryofContent) {
          //then show this content
          $(this).css("display", "block");
        }
        else {
          //else display none of content
          $(this).css("display", "none");
        }
      })
    })
  })
})


$(document).ready(function(){
  $('.section1').click(function(){
    var text=$(this).text();
    document.getElementById("lii").innerHTML = text;
  })
 })


 $(document).ready(function(){
  $('.menu--main').click(function(){
    $('.sub-menu').addclass('acive');
  })
 })



 $(document).ready(function(){
  $('.section2').click(function(){
    var text=$(this).text();
    document.getElementById("li2").innerHTML = text;
  })
 })


 $(document).ready(function(){
  $('.section3').click(function(){
    var text=$(this).text();
    document.getElementById("li3").innerHTML = text;
  })
 })

 $(document).ready(function(){
  $('.section4').click(function(){
    var text=$(this).text();
    document.getElementById("li4").innerHTML = text;
  })
 })


 $(document).ready(function(){
  $('.section5').click(function(){
    var text=$(this).text();
    document.getElementById("li5").innerHTML = text;
  })
 })

$(document).ready(function(){
  let contents = $(".button1");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.button2').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button3').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button4').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".button2");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.button1').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button3').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button4').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".button3");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.button2').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button1').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button4').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".button4");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.button1').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button3').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.button2').css({
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".header-1");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.header-2').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".header-2");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.header-1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".header-3");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.header-1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-2').css({
        'color':'#black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".header-4");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.header-1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-2').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.header-3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".classicc");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'background-color':'rgb(161, 161, 161)',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.modernn').css({
        'background-color':'white',
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".modernn");
    $(contents).click(function(){
      $(contents).css({
        'background-color':'rgb(161, 161, 161)',
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.classicc').css({
        'background-color':'white',
        'color':'#767676',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})




$(document).ready(function(){
  let contents = $(".index1");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.index2').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".index2");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.index1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})


$(document).ready(function(){
  let contents = $(".index3");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.index2').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index4').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

$(document).ready(function(){
  let contents = $(".index4");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'font-weight':'bold',
        'font-style':'BarlowSemiCondensed-Bold',
      });
      $('.index2').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('..index3').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
      $('.index1').css({
        'color':'black',
        'font-weight':'normal',
        'font-style':'BarlowSemiCondensed-Regular',
      });
    })
})

