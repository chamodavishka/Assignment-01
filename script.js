function bold() {
    document.execCommand('bold', true, null)
}

function underline() {
    document.execCommand('underline', true, null)
}

function italic() {
    document.execCommand('italic', true, null)
}

function changeTextColor() {
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function() {
      var selectedColor = colorPicker.value;
      document.execCommand('foreColor', false, selectedColor);
    });

    // Trigger the color picker dialog
     colorPicker.click();
}

    document.querySelectorAll('.left').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign ='left'
        })
    })

    document.querySelectorAll('.center').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign ='center'
        })
    })

    document.querySelectorAll('.right').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign ='right'
        })
    })

    document.querySelectorAll('.justify').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign ='justify'
        })
    })