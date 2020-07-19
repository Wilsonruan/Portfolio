$(document).ready(() => {
  $('#contact').click(() => {
    $('#headTitle').text('Contact')
    $('main').empty()
    var row = $("<div>").addClass('row')
    var col12 = $("<div>").addClass('col-12')
    var container = $("<div>").addClass('jumbotron adjustment')
    var h2 = $("<h2>").text("Contact")
    var hr = $("<hr>").addClass("my-4")
    var form = $("<form>").attr({ action: 'mailto:wilsonruan23@gmail.com', method: "post", enctype: "text/plain" })
    var labelName = $('<label>').addClass('lead').text(`Name`)
    var inputName = $('<input>').addClass('form-control input-group flex-nowrap').attr({ placeholder: 'Wilson Ruan', required: "true" })
    var labelEmail = $('<label>').addClass('lead').text(`Email`)
    var inputEmail = $('<input>').addClass('form-control input-group flex-nowrap').attr({ placeholder: 'wilsonruan23@gmail.com', type: 'text', required: "true" })
    var labelMessage = $('<label>').addClass('lead').text(`Message`)
    var inputMessage = $('<textarea>').addClass('form-control input-textarea input-group flex-nowrap').attr({ id: 'comments', name: 'comment', required: "true" })
    var br = $('<br>')
    var buttonSumbit = $('<button>').addClass('submit-button form-group').attr({ type: 'submit', id: 'submit' }).text('Sumbit')

    $('main').append(row)
    row.append(col12)
    col12.append(container)
    container.append(h2, hr, form)
    form.append(labelName, inputName, br, labelEmail, inputEmail, br, labelMessage, inputMessage, br, buttonSumbit)
  });
});