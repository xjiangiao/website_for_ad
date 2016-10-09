var avtgHeader = function() {
  $('.avtg').css('display', 'none');
  $('#avtg').css('display', 'block');
  console.log('success');
}
function avtg(e){
  if(e.target !== e.currentTarget){
    var clickedItem = e.target.id;
    var showAreaId='#'+clickedItem.match(/(.*?)_btn/)[1];
    $('.avtg').css('display', 'none');
    $('#avtg').css('display', 'none');
    $(showAreaId).css('display', 'block');
    console.log(showAreaId);
  }
  e.stopPropagation();
}
$('#avtg_btn').click(avtgHeader).hover(avtgHeader);

var theParent = document.querySelector('#eventForListener');//use querySelector to reduce code using
/*add multiple eventListener for vertical nav area*/
("mousemove click".split(" ")).forEach(function(evt){
  theParent.addEventListener(evt,avtg,false);
});
