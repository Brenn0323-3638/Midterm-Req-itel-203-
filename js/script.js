$(document).ready(function() {
  // Initialize Isotope
  var $grid = $('.menu-list').isotope({
    itemSelector: '.col-md-6', // This targets the individual menu items
    layoutMode: 'fitRows' // Arranges items in rows
  });

  // Filter items on button click
  $('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns(); // Reset filter buttons
    $(this).addClass('active-filter-btn'); // Highlight the clicked button
    $grid.isotope({ filter: filterValue }); // Apply the filter
  });

  // Function to reset all filter buttons
  function resetFilterBtns() {
    $('.filter-button-group').find('button').removeClass('active-filter-btn');
  }
});
