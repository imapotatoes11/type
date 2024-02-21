document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.querySelector('#colorPicker')
    var textrgb = document.querySelector('#textrgb')
    var texthex = document.querySelector('#texthex')
    var textcss = document.querySelector('#textcss')

    // only need to call one
    updatePicker()


    colorPicker.addEventListener('input', function() {
        updatePicker()
    })
    textrgb.addEventListener('input', function() {
        updateRGB()
    })
    texthex.addEventListener('input', function() {
        updateHEX()
    })
    textcss.addEventListener('input', function() {
        updateCSS()
    })
})

function updatePicker() {
    var color = colorPicker.value

    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);
    textrgb.textContent = r + ', ' + g + ', ' + b;

    texthex.textContent = color

    textcss.textContent = 'rgb(' + r + ', ' + g + ', ' + b + ');'

    document.querySelector('#color').style.backgroundColor = color
}
function updateRGB() {
    var color = textrgb.value
    var r = color.split(',')[0]
    var g = color.split(',')[1]
    var b = color.split(',')[2]

    texthex.textContent = '#' + parseInt(r).toString(16) + parseInt(g).toString(16) + parseInt(b).toString(16)

    textcss.textContent = 'rgb(' + r + ', ' + g + ', ' + b + ');'

    colorPicker.value = '#' + parseInt(r).toString(16) + parseInt(g).toString(16) + parseInt(b).toString(16)

    document.querySelector('#color').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
function updateHEX() {
    var color = texthex.value

    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);
    textrgb.textContent = r + ', ' + g + ', ' + b;

    textcss.textContent = 'rgb(' + r + ', ' + g + ', ' + b + ');'

    colorPicker.value = color

    document.querySelector('#color').style.backgroundColor = color
}
function updateCSS() {
    var color = textcss.value

    var r = color.split('(')[1].split(',')[0]
    var g = color.split(',')[1].split(',')[0]
    var b = color.split(',')[2].split(')')[0]

    textrgb.textContent = r + ', ' + g + ', ' + b;

    texthex.textContent = '#' + parseInt(r).toString(16) + parseInt(g).toString(16) + parseInt(b).toString(16)

    colorPicker.value = '#' + parseInt(r).toString(16) + parseInt(g).toString(16) + parseInt(b).toString(16)

    document.querySelector('#color').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function copyRGB() {
    var copyText = document.getElementById("textrgb");
    copyText.select();
    document.execCommand("copy");
}
function copyHEX() {
    var copyText = document.getElementById("texthex");
    copyText.select();
    document.execCommand("copy");
}
function copyCSS() {
    var copyText = document.getElementById("textcss");
    copyText.select();
    document.execCommand("copy");
}