const addRevertHandlers = () => {
    const revertIcons = document.querySelectorAll('.revert');
    revertIcons.forEach(icon => {
        icon.addEventListener('click', handleState(true));
    })
}

const loadArchivedNotesPage = () => {
    populatePage({
        activeIndicator: false,
        iconClass: 'fa-history',
        iconAction: 'revert'
    });
    addRevertHandlers();
}

loadArchivedNotesPage();
