
// DYNAMIC SEARCH FUNCTION

var $cells = $(".tag-title");
$(".headerSearchBar").keyup(function() {
    var val = $.trim(this.value).toUpperCase();
    if (val === "")
        $cells.parents(".box").show();
    else {
        $cells.parents(".box").hide();
        $cells.filter(function() {
            return -1 != $(this).text().toUpperCase().indexOf(val); }).parents(".box").show();
    }
});


// COPY TO CLIPBOARD
var clipboard = new ClipboardJS('.clipboardBtn');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
  });
