/*======add active class=======*/
$(".navitems").click(function () {
  $(".navitems").removeClass('active')
  $(this).addClass('active')
})


$(".course").click(function () {
  $(".course").removeClass('activeCourse')
  $(this).addClass('activeCourse')
})




/*=====progress bar=====*/

$('.percent').percentageLoader({
  valElement: 'h4',
  strokeWidth: 12,
  bgColor: '#d9d9d9',
  ringColor: '#EE3124',
  stroke: 'green',
  textColor: '#3d3d3d',
  fontSize: '38px',
  fontWeight: '600',
  strokeLinecap: 'round'
});