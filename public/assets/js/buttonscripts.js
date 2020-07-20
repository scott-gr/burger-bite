$(function () {
  $('.devourBtn').on('click', function (event) {
    var id = $(this).data('id');
    var newDevoured = $(this).data('devoured');

    var newEatenState = {
      devoured: newDevoured,
    };
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newEatenState,
    }).then(() => {
      location.reload();
    });
  });

  $('#submitBurger').on('submit', (event) => {
    event.preventDefault();
    var newBurger = {
      name: $('#addBurger').val().trim(),
      devoured: $("[name=devoured]").val().trim()
    };
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });
});
