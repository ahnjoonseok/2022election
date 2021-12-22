(function(){
  
    var controller = new ScrollMagic.Controller();
    
    var tween1 = TweenMax.to('#animate1', 0.5, {
      x: 10,
      ease: Power4.easeInOut
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: "30%"
    })
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({
      name: "1"
    }) 
    

    var tween2 = TweenMax.to('#animate2', 0.5, {
      x: -130,
      opacity: 1,
      ease: Power4.easeInOut
    });

    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: "30%"
    })
    //.setClassToggle("#animate2", "visible")
    .setTween(tween2)
    .addTo(controller)
    .addIndicators({
      name: "2"
    }) 



  }())



//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create','UA-53828044-1','auto');
ga('require', 'displayfeatures');
ga('send','pageview');

// SNS LINK
function sharefb(url) {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
};

function sharetwit(url, text) {
    window.open('http://twitter.com/intent/tweet?text=' + text + '&url=' + url);
};

const sharefacebook = document.getElementById('share_facebook');
const sharetwitter = document.getElementById('share_twitter');

sharefacebook.addEventListener('click', () => {
    sharefb('----주소가 들어감----');
})
sharetwitter.addEventListener('click', () => {
    sharetwit('----주소가 들어감----', 'SBS 마부작침: ');
})
