var portfolioStorage = [{
  href: 'https://scratch.mit.edu/projects/366012034',
  src: './Assets/Images/Rocket-Shooter.jpg',
  alt: 'Rocket Shooter',
  Date: '9 Feb 2017',
  github: "https://scratch.mit.edu/projects/366012034",
}, {
  href: 'https://wilsonruan.github.io/6-Weather-Dashboard/',
  src: './Assets/Images/Weather-Dashboard.jpg',
  alt: 'Weather Dashboard',
  Date: '2 July 2020',
  github: "https://github.com/Wilsonruan/6-Weather-Dashboard",
}, {
  href: 'https://wilsonruan.github.io/4-Code-Quiz/',
  src: './Assets/Images/Code-Quiz.jpg',
  alt: 'Code Quiz',
  Date: '18 June 2020',
  github: "https://github.com/Wilsonruan/4-Code-Quiz",
}, {
  href: 'https://wilsonruan.github.io/Flight-Search/',
  src: './Assets/Images/Flight-Search.png',
  alt: 'Flight Search',
  Date: '9 July 2020',
  github: "https://github.com/Wilsonruan/Flight-Search",
}, {
  href: 'https://wilsonruan.github.io/3-Password-Generator/',
  src: './Assets/Images/Password-Generator.jpg',
  alt: 'Password Generator',
  Date: '11 June 2020',
  github: "https://github.com/Wilsonruan/3-Password-Generator",
}, {
  href: 'https://wilsonruan.github.io/5-Day-Planner/',
  src: './Assets/Images/Day-Planner.jpg',
  alt: 'Day Planner',
  Date: '25 June 2020',
  github: "https://github.com/Wilsonruan/5-Day-Planner",
}]

$(document).ready(() => {
  $('#portfolio').click(() => {
    $('#headTitle').text('Portfolio')
    $('main').empty()
    var row = $("<div>").addClass('row')
    
    var col = $("<div>").addClass('col')
    var container = $("<div>").addClass('jumbotron adjustment float-left')
    var h2 = $("<h2>").text("Portfolio")
    var hr = $("<hr>").addClass("my-4")

    $('main').append(row)
    row.append(col)
    col.append(container)
    container.append(h2, hr)
    for (let i = 0; i < portfolioStorage.length; i++) {
      let newRow = $("<div>").addClass('row')
      let divClass = $('<div>').addClass('col-12 col-sm-12 col-md-12 col-lg-6')
      let tag = $('<a>').addClass('container-inside').attr({href: portfolioStorage[i].href})
      let img = $('<img>').addClass('img-thumbnail image').attr({alt: portfolioStorage[i].alt, src: portfolioStorage[i].src})
      let divMiddle = $("<div>").addClass('middle')
      let divText = $("<div>").addClass('text')
      let pName = $('<p>').text(portfolioStorage[i].alt)
      let pDate = $('<p>').text(portfolioStorage[i].Date)
      let divInner = $('<div>').addClass('inner')


      container.append(newRow, divClass, tag, img, divMiddle, divText)
      divText.append(pName, $("<hr>"), pDate)
      divMiddle.append(divInner)
      divInner.append(`<a href="${portfolioStorage[i].github}" target="_blank"><i class="fa fa-github"></i> ${portfolioStorage[i].alt} Github Link</a>`)
    }
    
  });
});