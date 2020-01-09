jQuery('html,body').bind('mousewheel', function(event) {
    event.preventDefault();
    var scrollTop = this.scrollTop;
    this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
    //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
  });
