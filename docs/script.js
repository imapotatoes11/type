document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.querySelector('textarea');

    textArea.addEventListener('input', function () {
        var value = textArea.value;

        // store as cookie
        document.cookie = 'textAreaValue=' + value;
    })
})
document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.querySelector('textarea');
    var value = document.cookie.replace(/(?:(?:^|.*;\s*)textAreaValue\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    textArea.value = value;
})