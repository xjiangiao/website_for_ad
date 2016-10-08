/*This is for intro element, which make nav-element of intro section will change via hover or click*/
var avtgHeader = function() {
  $('.avtg').css('display', 'none');
  $('#avtg').css('display', 'block');
//  console.log('success');//only for code test
}
function avtg(e){
  if(e.target !== e.currentTarget){
    var clickedItem = e.target.id;
    var showAreaId='#'+clickedItem.match(/(.*?)_btn/)[1];
    $('.avtg').css('display', 'none');
    $('#avtg').css('display', 'none');
    $(showAreaId).css('display', 'block');
//    console.log(showAreaId);//only for code test
  }
  e.stopPropagation();
}
$('#avtg_btn').click(avtgHeader).hover(avtgHeader);

var theParent = document.querySelector('#eventForListener');//use querySelector to reduce code using
/*add multiple eventListener for vertical nav area*/
("mousemove click".split(" ")).forEach(function(evt){
  theParent.addEventListener(evt,avtg,false);
});
/*Add scroll effect for elelemt*/
(function($) {

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
