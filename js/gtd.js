window.onload = function() {
  var classDiv = document.getElementById("classDiv");
  var taskDiv = document.getElementById("taskDiv");
  var detailDiv = document.getElementById("detailDiv");


  EventUtil.addHandler(classDiv,"touchstart",test);
  EventUtil.addHandler(classDiv,"touchmove",test);
  EventUtil.addHandler(classDiv,"touchend",test);
}

function test(ev) {
  //console.log(ev.touches,ev.type);
  target = EventUtil.getTarget(ev);
  console.log(target);
}

