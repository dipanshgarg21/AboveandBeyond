$(document).ready(function() {
  // Select all color pickers and add a change event listener
  $('input[type="color"]').change(function() {
    // Get the value of the color picker
    var color = $(this).val();
    // Get the ID of the light element
    var lightID = $(this).closest('.light').attr('id');
    // Set the background color of the light element
    // $('#' + lightID).css('background-color', color);
    // $('#' + swithID).css('background-color', color);
  });
})
