$('a.original-filter').on('click', function () {
  console.log('you just clicked to hide anything not original')

  $('.work').hide()
  $('.no-work').hide()
  
  $('img').addClass('smaller')
  $('.original-work').show()
  return false
})

$('a.ecommerce-filter').on('click', function () {
  console.log('you just clicked to only show e-commerce-related projects')

  $('.work').hide()
  $('.no-work').hide()
  
  $('img').addClass('smaller')
  $('.ecommerce').show()
  return false
})

$('a.reset-filters').on('click', function () {
  console.log('you just clicked to show everything')
  
  $('img').removeClass('smaller')
  $('.work').show()
  return false
})