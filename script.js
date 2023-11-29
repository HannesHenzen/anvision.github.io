function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    render();
})


function files(index) {
    var data = `
      ./anvison_trailer_animation/0001.png
      ./anvison_trailer_animation/0002.png
      ./anvison_trailer_animation/0003.png
      ./anvison_trailer_animation/0004.png
      ./anvison_trailer_animation/0005.png
      ./anvison_trailer_animation/0006.png
      ./anvison_trailer_animation/0007.png
      ./anvison_trailer_animation/0008.png
      ./anvison_trailer_animation/0009.png
      ./anvison_trailer_animation/0010.png
      ./anvison_trailer_animation/0011.png
      ./anvison_trailer_animation/0012.png
      ./anvison_trailer_animation/0013.png
      ./anvison_trailer_animation/0014.png
      ./anvison_trailer_animation/0015.png
      ./anvison_trailer_animation/0016.png
      ./anvison_trailer_animation/0017.png
      ./anvison_trailer_animation/0018.png
      ./anvison_trailer_animation/0019.png
      ./anvison_trailer_animation/0020.png
      ./anvison_trailer_animation/0021.png
      ./anvison_trailer_animation/0022.png
      ./anvison_trailer_animation/0023.png
      ./anvison_trailer_animation/0024.png
      ./anvison_trailer_animation/0025.png
      ./anvison_trailer_animation/0026.png
      ./anvison_trailer_animation/0027.png
      ./anvison_trailer_animation/0028.png
      ./anvison_trailer_animation/0029.png
      ./anvison_trailer_animation/0030.png
      ./anvison_trailer_animation/0031.png
      ./anvison_trailer_animation/0032.png
      ./anvison_trailer_animation/0033.png
      ./anvison_trailer_animation/0034.png
      ./anvison_trailer_animation/0035.png
      ./anvison_trailer_animation/0036.png
      ./anvison_trailer_animation/0037.png
      ./anvison_trailer_animation/0038.png
      ./anvison_trailer_animation/0039.png
      ./anvison_trailer_animation/0040.png
      ./anvison_trailer_animation/0041.png
      ./anvison_trailer_animation/0042.png
      ./anvison_trailer_animation/0043.png
      ./anvison_trailer_animation/0044.png
      ./anvison_trailer_animation/0045.png
      ./anvison_trailer_animation/0046.png
      ./anvison_trailer_animation/0047.png
      ./anvison_trailer_animation/0048.png
      ./anvison_trailer_animation/0049.png
      ./anvison_trailer_animation/0050.png
      ./anvison_trailer_animation/0051.png
      ./anvison_trailer_animation/0052.png
      ./anvison_trailer_animation/0053.png
      ./anvison_trailer_animation/0054.png
      ./anvison_trailer_animation/0055.png
      ./anvison_trailer_animation/0056.png
      ./anvison_trailer_animation/0057.png
      ./anvison_trailer_animation/0058.png
      ./anvison_trailer_animation/0059.png
      ./anvison_trailer_animation/0060.png
      ./anvison_trailer_animation/0061.png
      ./anvison_trailer_animation/0062.png
      ./anvison_trailer_animation/0063.png
      ./anvison_trailer_animation/0064.png
      ./anvison_trailer_animation/0065.png
      ./anvison_trailer_animation/0066.png
      ./anvison_trailer_animation/0067.png
      ./anvison_trailer_animation/0068.png
      ./anvison_trailer_animation/0069.png
      ./anvison_trailer_animation/0070.png
      ./anvison_trailer_animation/0071.png
      ./anvison_trailer_animation/0072.png
      ./anvison_trailer_animation/0073.png
      ./anvison_trailer_animation/0074.png
      ./anvison_trailer_animation/0075.png
      ./anvison_trailer_animation/0076.png
      ./anvison_trailer_animation/0077.png
      ./anvison_trailer_animation/0078.png
      ./anvison_trailer_animation/0079.png
      ./anvison_trailer_animation/0080.png
      ./anvison_trailer_animation/0081.png
      ./anvison_trailer_animation/0082.png
      ./anvison_trailer_animation/0083.png
      ./anvison_trailer_animation/0084.png
      ./anvison_trailer_animation/0085.png
      ./anvison_trailer_animation/0086.png
      ./anvison_trailer_animation/0087.png
      ./anvison_trailer_animation/0088.png
      ./anvison_trailer_animation/0089.png
      ./anvison_trailer_animation/0090.png
      ./anvison_trailer_animation/0091.png
      ./anvison_trailer_animation/0092.png
      ./anvison_trailer_animation/0093.png
      ./anvison_trailer_animation/0094.png
      ./anvison_trailer_animation/0095.png
      ./anvison_trailer_animation/0096.png
      ./anvison_trailer_animation/0097.png
      ./anvison_trailer_animation/0098.png
      ./anvison_trailer_animation/0099.png
      ./anvison_trailer_animation/0100.png
      ./anvison_trailer_animation/0101.png
      ./anvison_trailer_animation/0102.png
      ./anvison_trailer_animation/0103.png
      ./anvison_trailer_animation/0104.png
      ./anvison_trailer_animation/0105.png
      ./anvison_trailer_animation/0106.png
      ./anvison_trailer_animation/0107.png
      ./anvison_trailer_animation/0108.png
      ./anvison_trailer_animation/0109.png
      ./anvison_trailer_animation/0110.png
      ./anvison_trailer_animation/0111.png
      ./anvison_trailer_animation/0112.png
      ./anvison_trailer_animation/0113.png
      ./anvison_trailer_animation/0114.png
      ./anvison_trailer_animation/0115.png
      ./anvison_trailer_animation/0116.png
      ./anvison_trailer_animation/0117.png
      ./anvison_trailer_animation/0118.png
      ./anvison_trailer_animation/0119.png
      ./anvison_trailer_animation/0120.png
      ./anvison_trailer_animation/0121.png
      ./anvison_trailer_animation/0122.png
      ./anvison_trailer_animation/0123.png
      ./anvison_trailer_animation/0124.png
      ./anvison_trailer_animation/0125.png
      ./anvison_trailer_animation/0126.png
      ./anvison_trailer_animation/0127.png
      ./anvison_trailer_animation/0128.png
      ./anvison_trailer_animation/0129.png
      ./anvison_trailer_animation/0130.png
      ./anvison_trailer_animation/0131.png
      ./anvison_trailer_animation/0132.png
      ./anvison_trailer_animation/0133.png
      ./anvison_trailer_animation/0134.png
      ./anvison_trailer_animation/0135.png
      ./anvison_trailer_animation/0136.png
      ./anvison_trailer_animation/0137.png
      ./anvison_trailer_animation/0138.png
      ./anvison_trailer_animation/0139.png
      ./anvison_trailer_animation/0140.png
  
   `;
    return data.split("\n")[index];
  }

  const frameCount = 300;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });

  // ...


ScrollTrigger.create({
  trigger: "#page7>canvas",
  pin: true,
  scroller: "#main",
  start: "top top",
  end: "bottom top",
});


ScrollTrigger.create({
  trigger: "#page8",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page9",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});


ScrollTrigger.create({
  trigger: "#page10",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page11",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page12",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page13",
  start: "top top",
  end: "bottom top",
  pin: true,
  scroller: "#main",
});



  
  
  
  
const viewportHeight = window.innerHeight;

console.log("Viewport-Höhe:", viewportHeight);



