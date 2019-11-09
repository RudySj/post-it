/*
Icon class options 
Delete icon: 'fa-trash-alt'
Revert icon: 'fa-history'
*/
const stickyTemplate = ({ title, content, key, iconClass, iconAction }) => {
    return `
    <div class="saved-sticky-note" id=${key}>
        <div class="row space-between">
            <p class="sticky-title"> ${title} </p>
            <i class="fas ${iconClass} ${iconAction}"></i>
        </div>
        <div class="row">
            <p>
                ${content}
            </p>
        </div>
    </div>
    `
}

const fetchStickyNotes = activeIndicator => {
    const stickyNotesKeys = Object.keys(sessionStorage);

    // we filter in case there are default properties set by a 3rd party
    // and only return active notes
    return stickyNotesKeys
        .map(key => JSON.parse(sessionStorage.getItem(key)))
        .filter(({ key, isActive }) => !isNaN(key) && isActive == activeIndicator);
}

const populatePage = ({ activeIndicator, iconClass, iconAction }) => {
    const stickyNotes = fetchStickyNotes(activeIndicator);
    let stickyHTML = '';

    stickyNotes.forEach(stickyNote => {
        stickyHTML += stickyTemplate({ ...stickyNote, iconClass, iconAction });
    })

    document.querySelector('.saved-container').innerHTML = stickyHTML;
}

const handleState = state => event => {
    const target = event.target;
    const parentContainer = target.parentNode.parentNode;
    const stickyId = parentContainer.id;

    // update the status of the entry
    const stickyData = JSON.parse(sessionStorage.getItem(stickyId))
    sessionStorage.setItem(stickyId, JSON.stringify({ ...stickyData, isActive: state }));

    // delete parent node after we update the status
    parentContainer.remove();
}