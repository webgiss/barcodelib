$(function(n){var e,a;return barcodelib.draw_barcodes(n,{replacekey:1}),e=function(){return n("#main-code").attr("barcode",n("#input-code").val()),n("#main-code")[0].draw_barcode()},a=function(){return n("#main-name").text(n("#input-name").val())},n("#input-code").on("input",e),n("#input-name").on("input",a),e(),a()});