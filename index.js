

let ipcRenderer = require('electron').ipcRenderer;
//when form is submitted send it
document.getElementById('form').addEventListener('submit', function(e)
{
    e.preventDefault();
    let formData = {
        field1: document.getElementById('form-field').value,
        field2: 'Not yet implemented'
    }
    document.getElementById('form-field-value').textContent = formData.field1;
    ipcRenderer.send('submitForm', formData);
}
)