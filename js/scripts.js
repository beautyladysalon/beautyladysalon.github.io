$(document).ready(function() {
 	
   /* DEFAULTS
    * DON'T REMOVE THESE
    */
    
   // Smooth Scrolling on every anchor node
   $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

   /* END DEFAULT */



      window.onscroll = function() {
		  var sm = document.getElementsByClassName('header__sm')[0];
		  var xs = document.getElementsByClassName('header__xs')[0];
		  var className = 'resize';
		  if (sm.classList) {
		    if (window.scrollY > 10)
		      sm.classList.add(className);
		    else
		      sm.classList.remove(className);
		  }

		  if (xs.classList) {
		    if (window.scrollY > 10)
		      xs.classList.add(className);
		    else
		      xs.classList.remove(className);
		  }
	  };

}); // End Document Ready


