$( function() {
  $( "#executor" ).sortable({
  revert: true
  });
  $( ".instrução" ).draggable({
  connectToSortable: "#executor",
  helper: "clone",
  revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
  $('#campode_exclusao').droppable({
      drop: function(event, ui) {
          $(ui.draggable).remove();
      }
  });
});