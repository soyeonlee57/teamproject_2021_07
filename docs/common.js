console.log("loading")
$(document).ready(function () {

  $(function () {
    $('body').niceScroll();
  });

  function Section1__init() {
    gsap.to(".box-1", {
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-1',
      }
    });

    gsap.to(".box-2", {
      x: -50,
      duration: 2,
      scrollTrigger: {
        trigger: '.section-1',
      }
    });

    gsap.to(".bike-1", {
      x: -700,
      duration: 1.3,
      scrollTrigger: {
        trigger: '.section-1',
      }
    });

    gsap.to(".bike-2", {
      x: -700,
      duration: 2,
      scrollTrigger: {
        trigger: '.section-1',
      }
    });
  }

  function Section2__init() {
    gsap.to(".page_2_image", {
      opacity: 1,
      duration: 2.3,
      scrollTrigger: {
        trigger: '.section-2',
      }
    });
  }

  function Section3__init() {
    gsap.to(".research_1", {
      opacity: 1,
      duration: 2.3,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".research_2", {
      opacity: 1,
      duration: 2.5,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".icon_1", {
      opacity: 1,
      duration: 2.8,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".target", {
      opacity: 1,
      duration: 2.8,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".target_1", {
      opacity: 1,
      duration: 3.2,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".target_2", {
      opacity: 1,
      duration: 3.8,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".target_3", {
      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });

    gsap.to(".target_4", {
      opacity: 1,
      duration: 4.5,
      scrollTrigger: {
        trigger: '.section-3',
      }
    });
  }

  function Section4__init() {
    gsap.to(".bike-3",{
      x: 900,
      duration: 2.8,
      scrollTrigger:{
        trigger:'.bike-3',
      }
    }); 
  }

  gsap.to(".bike-4",{
    x: -900,
    duration: 4,
    scrollTrigger:{
      trigger:'.bike-4',
    }
  }); 

  function Section5__init() {
    gsap.to(".bike-5", {
      x: -180,
      duration: 4,
      scrollTrigger: {
        trigger: '.section-5',
      }
    });
  }

  function Section6__init() {
    gsap.to(".bike-6", {
      x: -350,
      duration: 3,
      scrollTrigger: {
        trigger: '.section_6',
      }
    });
  
    gsap.to(".bike-7", {
      x: 350,
      duration: 4,
      scrollTrigger: {
        trigger: '.section_6',
      }
    });
  
    gsap.to(".bubble", {
      x: -350,
      opacity: 1,
      duration: 2.8,
      scrollTrigger: {
        trigger: '.section_6',
      }
    });
  }

  function Section7__init() {
    gsap.to(".bike-8", {
      x: -550,
      duration: 2,
      scrollTrigger: {
        trigger: '.section_7',
      }
    });
  
    gsap.to(".bubble2", {
      x: -350,
      opacity: 1,
      duration: 2.1,
      scrollTrigger: {
        trigger: '.section_7',
      }
    });
  }

  function Section8__init() {
    gsap.to(".page_8", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.section-8',
      }
    });
  }

  function Section9__init() {
    gsap.to(".bike-9", {
      x: 750,
      duration: 3,
      scrollTrigger: {
        trigger: '.section_9',
      }
    });
  
    gsap.to(".bubble3", {
      x: 750,
      opacity: 1,
      duration: 2.8,
      scrollTrigger: {
        trigger: '.section_9',
      }
    });
  
    gsap.to(".page_9", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.section_9',
      }
    });
  }

    function Section10__init() {
      gsap.to(".wireframe", {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: '.section-10',
        }
      });  
  }

  function Section11__init() {
    gsap.to(".step01", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-11',
      }
    });
  
    gsap.to(".step02", {
      x: 120,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.section-11',
      }
    });
  
    gsap.to(".step03", {
      x: 140,
      opacity: 1,
      duration: 2.4,
      scrollTrigger: {
        trigger: '.section-11',
      }
    });
  
    gsap.to(".step04", {
      x: 240,
      opacity: 1,
      duration: 2.9,
      scrollTrigger: {
        trigger: '.section-11',
      }
    }); 
}

function Section12__init() {
  gsap.to(".bike-10", {
    x: -750,
    duration: 3,
    scrollTrigger: {
      trigger: '.section-12',
    }
  });

  gsap.to(".bubble4", {
    x: -750,
    opacity: 1,
    duration: 2.8,
    scrollTrigger: {
      trigger: '.section-12',
    }
  });

}

function Section13__init() {
  gsap.to(".cards", {
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: '.section-13',
    }
  });
}

function Section14__init() {
  gsap.to(".card01", {
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: '.section-14',
    }
  });

  gsap.to(".card02", {
    x: 100,
    opacity: 1,
    duration: 5,
    scrollTrigger: {
      trigger: '.section-14',
    }
  });

  gsap.to(".card03", {
    x: 180,
    opacity: 1,
    duration: 5.4,
    scrollTrigger: {
      trigger: '.section-14',
    }
  });

  gsap.to(".card04", {
    x: 250,
    opacity: 1,
    duration: 5.9,
    scrollTrigger: {
      trigger: '.section-14',
    }
  }); 
}

function Section15__init() {
  gsap.to(".card05", {
    opacity: 1,
    duration: 5,
    scrollTrigger: {
      trigger: '.section-15',
    }
  });

  gsap.to(".card06", {
    opacity: 1,
    duration: 7,
    scrollTrigger: {
      trigger: '.section-15',
    }
  });

  gsap.to(".card07", {
    opacity: 1,
    duration: 8,
    scrollTrigger: {
      trigger: '.section-15',
    }
  });
}

function Section16__init() {
  gsap.to(".page_16", {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.section-16',
    }
  });
}

  setTimeout(function () {
    Section1__init();
    Section2__init();
    Section3__init();
    Section4__init();
    Section5__init();
    Section6__init();
    Section7__init();
    Section8__init();
    Section9__init();
    Section10__init();
    Section11__init();
    Section12__init();
    Section13__init();
    Section14__init();
    Section15__init();
    Section16__init();
  }, 500);
  
});