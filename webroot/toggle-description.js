function toggleDescription(event) {
    var checkbox = event.target;
    var content = document.getElementById('content');
    if (checkbox.checked) {
        content.classList.add('force-descriptions');
    } else {
        content.classList.remove('force-descriptions');
    }
}
