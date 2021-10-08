$(document).ready(() => {
  var current_content, current_step
  const steps = $('.steps').length - 1
  const steps_alt = $('.steps-alt').length - 1
  let curr = 0, curr_alt = 0




  
  $('#next').click(() => {
    $('#prev').removeClass('disabled')

    current_content = $('#next').parent().siblings().children()
    current_step = $('#next').parent().parent().parent().prev().find('li')

    if (curr < steps) {
      current_content.eq(curr).removeClass('active')
      //   current_step.eq(curr).removeClass('active')
      curr++
      current_content.eq(curr).addClass('active')
      current_step.eq(curr).addClass('active')

      curr >= 2 ? $('#next').addClass('disabled') : ''
    }
  })

  $('#prev').click(() => {
    $('#next').removeClass('disabled')
    current_content = $('#prev').parent().siblings().children()
    current_step = $('#prev').parent().parent().parent().prev().find('li')

    if (curr > 0) {
      current_content.eq(curr).removeClass('active')
      current_step.eq(curr).removeClass('active')
      curr--
      current_content.eq(curr).addClass('active')
      current_step.eq(curr).addClass('active')

      curr <=0 ? $('#prev').addClass('disabled') : ''
    }
  })

 $('#next-alt').click(() => {
   $('#prev-alt').removeClass('disabled')

   current_content = $('#next-alt').parent().siblings().children()
   current_step = $('#next-alt').parent().parent().parent().prev().find('li')
   
   if (curr_alt < steps_alt) {
     current_content.eq(curr_alt).removeClass('active')
     //   current_step.eq(curr).removeClass('active')
     curr_alt++
     current_content.eq(curr_alt).addClass('active')
     current_step.eq(curr_alt).addClass('active')

     curr_alt >= 3 ? $('#next-alt').addClass('disabled') : ''
   }
 })

 $('#prev-alt').click(() => {
   $('#next-alt').removeClass('disabled')
   current_content = $('#prev-alt').parent().siblings().children()
   current_step = $('#prev-alt').parent().parent().parent().prev().find('li')

   if (curr_alt > 0) {
     current_content.eq(curr_alt).removeClass('active')
     current_step.eq(curr_alt).removeClass('active')
     curr_alt--
     current_content.eq(curr_alt).addClass('active')
     current_step.eq(curr_alt).addClass('active')

     curr_alt <= 0 ? $('#prev-alt').addClass('disabled') : ''
   }
 })
})
