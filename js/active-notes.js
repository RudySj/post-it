const addDeleteHandlers = () => {
    const deleteIcons = document.querySelectorAll('.delete');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', handleState(false));
    })
}

const loadActiveNotesPage = () => {
    populatePage({
        activeIndicator: true,
        iconClass: 'fa-trash-alt',
        iconAction: 'delete',
    });
    addDeleteHandlers();
}

loadActiveNotesPage();