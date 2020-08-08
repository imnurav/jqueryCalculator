function insert(num) {
    $(".calc-display").val($(".calc-display").val() + num)
}
function equal() {
    $(".calc-display").val(eval($(".calc-display").val()))
}
$("body").css("background-color", "skyblue")
function clea() {
    $('.calc-display').val('')
}
function del() {
    let value = $('.calc-display').val()
    $(".calc-display").val(value.substring(0, value.length - 1))
}