$(document).ready(function() {

  let firstCircleArc = $("#first-circle-arc");
  let lastCircleArc = $("#last-circle-arc");
  let circles = $(".circles");
  let circlesArray = Array.from(circles);

  let lines = $(".myLines");
  let linesArray = Array.from(lines);

// MASTER TIMELINE
let masterTimeline = new TimelineMax();
    masterTimeline.add(scene01())
    masterTimeline.add(scene02())
    masterTimeline.add(scene03())
    masterTimeline.add(scene04());

function scene01 (){
  let tl  = new TimelineMax();
  tl.staggerFrom(circles, .3, {
    opacity: 0,
    delay: .3
  }, .1)
  return tl;
}


  function scene02 (){
    let tl  = new TimelineMax();
    tl.staggerFrom(linesArray, .2, {
      x: -50,
      opacity: 0,
      ease: Power4.easeOut
    }, .1);
    return tl;
  }

function scene03 (){
  let tl = new TimelineMax();
  tl.fromTo(".icons", 1,{
    opacity: 0,
    scale: 0
  },{
    opacity: 1,
    scale: 1,
    ease: Power4.easeOut
  });
  return tl;
}
function scene04(){
  let tl = new TimelineMax();
  tl.staggerFrom(".texts", .9,{
    x:+10,
    opacity: 0,
    ease: Power4.easeOut
  }, .5)
  return tl
}




var controller = new ScrollMagic.Controller({addIndicators: true});
var scene1 = new ScrollMagic.Scene({
  triggerElement:" #arabic-morph-section",
  triggerHook: 0,
  duration: "100%"

})
//
// .setTween(tlCirclePop)
.setTween(masterTimeline)
.setClassToggle(".arc", "arc-move")
.setPin("#arabic-morph-section")
.addIndicators({
  name: "#arabic-morph-section",
  colorStart: "red",
  colorEnd: "green"
})

.addTo(controller);
});
