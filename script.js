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

var contenthistory = [];
var currentstep = 0;

contenthistory.push(document.getElementById('editor').innerHTML);

function undo() {
    if (currentstep >=0) {
        currentstep--;
        if (contenthistory[currentstep] !== undefined) {
            document.getElementById('editor').innerHTML = contenthistory[currentstep];
        }
    }
}

function redo() {
    if (currentstep < contenthistory.length - 1) {
        currentstep++;
        if (contenthistory[currentstep] !== undefined) {
            document.getElementById('editor').innerHTML = contenthistory[currentstep];
        }
    }
}

document.querySelectorAll('#editor').forEach(function (element) {
    element.addEventListener('input', function () {
        console.log('typing');
        currentstep++;
        if (currentstep < contenthistory.length) {
            contenthistory = contenthistory.slice(0, currentstep);
        }

        contenthistory.push(document.getElementById('editor').innerHTML);
	});
});