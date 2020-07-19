$(document).ready(() => {
  $('#aboutMe').click(() => {
    $('#headTitle').text('About Me')
    $('main').empty()
    var row = $("<div>").addClass('row')
    var container = $("<div>").addClass('jumbotron adjustment')
    var h2 = $("<h2>").text("About Me")
    var hr = $("<hr>").addClass("my-4")
    var img = $("<img>").addClass("float-left col-12 col-sm-8 col-md-7 col-lg-6").attr({ src: './Assets/Images/Wilson-Ruan.jpg', alt: "Wilson Ruan's Profile Picture", width: "390", height: "325" })
    var p = $('<p>').addClass("lead").text("My name is Wilson Ruan. I was born on August 23, 1988 in Ontario Canada. I recently discovered coding through excel's VBA (Visual Basic for Applications). I spend all my free time learning and creating automated tasks to do all my work. I realized I wanted to learn more and ensure it as my dream job. My favorite part of coding is debugging and ensuring it is more user friendly. Each time I am unable to solve a problem. I become more determined to find the solution.")
    $('main').append(row)
    row.append(container)
    container.append(h2, hr, img, p)

  });
});