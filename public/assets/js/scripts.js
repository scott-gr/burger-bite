$(() => {
  $('#submitBtn').on('click', (event) => {
    event.preventDefault();
    const newBurger = {
      name: $('#burgerEnter').val().trim(),
      devoured: false,
    };
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $('.devourBtn').on('click', function (event) {
    const id = $(this).data('id');
    const isDevoured = {
      devoured: 1,
    };
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: isDevoured,
    }).then(() => {
      location.reload();
    });
  });
});
