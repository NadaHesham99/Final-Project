

var mySeeBtn = document.getElementById("btn-see"),
    
    myDisabledSee = document.getElementById("see");


mySeeBtn.onclick = function () {
    
    'use strict';
       
    myDisabledSee.classList.toggle("disabled");
    
        
};



var myBtn = document.getElementById("btn-product"),
    
    myDisabledDiv = document.getElementById("product");

myBtn.onclick = function () {
    
    'use strict';
       
    myDisabledDiv.classList.toggle("disabled");
        
};

/*============================================*/

var scrollButton = $('#scroll-top');

scrollButton.click(function () {
    
    'use strict';
    
    $("html,body").animate({ scrollTop : 0 }, 600);
        
});

$(window).scroll(function () {
        
    'use strict';
    
    if ($(this).scrollTop() >= 700) {
            
        scrollButton.show();
            
    } else {
            
        scrollButton.hide();
    }
});
/*=========================================================*/


