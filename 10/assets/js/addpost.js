ClassicEditor.create(document.querySelector('#editor'))
    .then(editor => {
        editor.ui.view.editable.element.style.height = '700px';
    })
    .catch(error => {
        console.error(error);
    });
CKEDITOR.replace('editor', {
    height: '100%',
}) 