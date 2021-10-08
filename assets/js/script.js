$(document).ready(function () {
  // CAMERA SETTINGS.
  Webcam.set({
    width: 750,
    height: 450,
    image_format: 'jpeg',
    jpeg_quality: 100,
  })
  // Webcam.attach('#camera')

  // TAKE A SNAPSHOT.
  takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
      const data = data_uri
      Webcam.reset('#camera')
      $('#camera-off').attr('disabled', true)
      $('#camera-on').attr('disabled', false)
      $('#capture-image').attr('disabled', true)
      $('#webcam').hide()

      $('#btn-upload').show(
        'slide',
        {
          direction: 'right',
        },
        1500
      )

      // downloadImage('eye-image', data_uri)
      document.getElementById('label_1').innerHTML = 'captured-image.jpeg'
      $('#eye-image').attr('src', data)

      // var output = document.getElementById('eye-image')
      // output.src = window.URL.createObjectURL(data)
      // output.onload = function () {
      //   URL.revokeObjectURL(output.src) // free memory
      // }
    })
    $('#without-webcam').show()
  }

  // DOWNLOAD THE IMAGE.
  // downloadImage = function (name, datauri) {
  //   var a = document.createElement('a')
  //   a.setAttribute('download', name + '.png')
  //   a.setAttribute('href', datauri)
  //   a.click()
  // }

  $('#show-webcam').click(() => {
    $('#without-webcam').hide()
    $('#webcam').show()
  })

  $('#camera-on').click(() => {
    $('#camera-on').attr('disabled', true)
    $('#camera-off').attr('disabled', false)
    $('#capture-image').attr('disabled', false)
    Webcam.attach('#camera')
  })

  $('#camera-off').click(() => {
    Webcam.reset('#camera')
    $('#camera-off').attr('disabled', true)
    $('#camera-on').attr('disabled', false)
    $('#capture-image').attr('disabled', true)
    const video = $('<video />', {
      class: 'default-video',
      type: 'video/mp4',
      controls: true,
      width: 750,
      height: 450,
    })
    video.appendTo($('#camera'))
  })

  //display image filename
  function showname() {
    $('#btn-upload').show(
      'slide',
      {
        direction: 'right',
      },
      1500
    )
    loadFile(event)
    var name_1 = document.getElementById('file-upload_1')
    document.getElementById('label_1').innerHTML = name_1.files.item(0).name
  }
  var loadFile = function (event) {
    var output = document.getElementById('eye-image')
    output.src = URL.createObjectURL(event.target.files[0])
    output.onload = function () {
      URL.revokeObjectURL(output.src) // free memory
    }
  }

  $('#back-btn').click(() => {
    $('#without-webcam').show()
    $('#webcam').hide()
  })
})