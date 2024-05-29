function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.8,
    stagger: 0.3,
  });

  tl.from("side-menu .active", {
    x: -100,
    opacity: 1,
    delay: 1,
    duration: 0.8,
    stagger: 0.3,
  })

  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -300,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.4,
    },
    "-=1"
  );

  tl.from(
    ".sectionbottom img",
    {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    },
    "-=1"
  );
}

page1Animation();

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
        scrub: 2,
    }
})

tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.2,
})
tl2.from(".elem.line1.left", {
    x: -300 ,
    opacity: 0,
    duration: 0.2,
}, "anim")
tl2.from(".elem.line1.right", {
    x: 300 ,
    opacity: 0,
    duration: 0.2,
}, "anim")
tl2.from(".elem.line2.left", {
    x: -300 ,
    opacity: 0,
    duration: 0.2,
}, "anim2")
tl2.from(".elem.line2.right", {
    x: 300 ,
    opacity: 0,
    duration: 0.2,
}, "anim2")


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger: ".cta-section",
      scroller: "body",
      start: "top 70%",
      end: "top 0",
      scrub: 2,
  }
})

tl3.from(".cta-section h2", {
  y: 30,
  opacity: 0,
  duration: 0.4,
})
tl3.from(".cta-section p", {
  x: -80,
  opacity: 0,
  duration: 0.4,
})
tl3.from(".cta-section button", {
  y: 80,
  opacity: 0,
  duration: 0.4,
})
tl3.from(".cta-section .cta-image", {
  opacity: 0,
  duration: 0.7,
})


var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger: ".case-studies",
      scroller: "body",
      start: "top 70%",
      end: "top 0",
      // scrub: 2,
  }
})

tl4.from(".case-study", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3
})



var tl5 = gsap.timeline({
  scrollTrigger:{
      trigger: ".footer-section",
      scroller: "body",
      start: "top 90%",
      end: "top 0",
      // scrub: 2,
  }
})

tl4.from(".footer-left, .footer-right, .footer-social", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3
})


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const sideMenu = document.querySelector(".side-menu");
    const closeMenu = document.querySelector(".side-menu i");

    hamburger.addEventListener("click", function() {
        sideMenu.classList.add("active");

        gsap.from("#side-menu h4, #side-menu button", {
          x: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          delay: 0.5
      });
    });

    closeMenu.addEventListener("click", function() {
        sideMenu.classList.remove("active");
    });
});

