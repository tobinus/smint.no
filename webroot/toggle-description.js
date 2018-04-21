// Wait until the DOM is ready before registering event listeners
document.addEventListener('DOMContentLoaded', onLoaded, false);

function onLoaded() {
    var checkbox = document.getElementById('description-checkbox');
    // Register so we update when checkbox is checked or unchecked
    checkbox.addEventListener('change', toggleDescription, false);
    // Sometimes the browser remembers the state of the checkbox. Ensure we are
    // in sync with it upon loading.
    toggleDescription({target: checkbox});
}

function toggleDescription(event) {
    var checkbox = event.target;
    var content = document.getElementById('content');
    if (checkbox.checked) {
        content.classList.add('force-descriptions');
    } else {
        content.classList.remove('force-descriptions');
    }
}
