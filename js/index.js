const isValid = input => {
    return input && input != '';
}

const saveSticky = ({ title, content, isActive }) => {
    // creates a hash for the sticky note 
    const key = Object.keys(sessionStorage).length;
    sessionStorage.setItem(key, JSON.stringify({ title, content, isActive, key }));
}

const handleSubmit = event => {
    event.preventDefault();

    const stickyNote = document.querySelector('#sticky-form');
    const title = stickyNote.querySelector('input[name="post-it-title"]').value;
    const content = stickyNote.querySelector('textarea[name="post-it"]').value;

    if (isValid(content)) {
        saveSticky({
            title,
            content,
            isActive: true,
        })
        window.location.href = "./active-notes.html";
    }
    else {
        alert('Must enter at least a note...please try again');
    }

}

const countCharacters = event => {
    const counterNode = document.querySelector('.text-indicator');
    counterNode.textContent = `${event.target.value.length}/160`;
}

const loadLandingPage = () => {
    document.querySelector('#sticky-button').addEventListener('click', handleSubmit);
    document.querySelector('textarea[name="post-it"]').addEventListener('keyup', countCharacters);
}

loadLandingPage();