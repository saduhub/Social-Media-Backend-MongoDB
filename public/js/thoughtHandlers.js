// Delete Thought
const deleteThoughtHandler = async (event) => {
    event.preventDefault();
    const deleteId = document.querySelector('#delete-thought').value.trim();

    // if (!deleteId) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (deleteId) {
        const response = await fetch(`/api/thought/${deleteId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought Successfully Deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Create Thought
const createThoughtHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const thoughtText = document.querySelector('#thought-text').value.trim();
    // const userId = document.querySelector('#user-id').value.trim();
    // if (!thoughtText || !username) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (username && thoughtText) {
        const response = await fetch(`/api/thought/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: username,
                thoughtText: thoughtText,
                // userId: userId,
            }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought Successfully Created.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Update Thought
const updateThoughtHandler = async (event) => {
    event.preventDefault();
    const thoughtId = document.querySelector('#thought-id').value.trim();
    const newThought = document.querySelector('#new-thought').value.trim();

    // if (!thoughtId || !newThought) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (thoughtId && newThought) {
        const response = await fetch(`/api/thought/${thoughtId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                thoughtId: thoughtId,
                newThought: newThought,
                thoughts: '',
                friends: '',
            }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought Successfully Updated.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Create Reaction
const createReactionHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const reactionBody = document.querySelector('#reaction-body').value.trim();
    const thoughtId = document.querySelector('#thought-id').value.trim();
    // if (!reactionBody || !username || !thoughtId) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (username && reactionBody && thoughtId) {
        const response = await fetch(`/api/thought/reaction/${thoughtId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: username,
                reactionBody: reactionBody,
            }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Reaction Successfully Created.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Delete Reaction
const deleteReactionHandler = async (event) => {
    event.preventDefault();
    const thoughtId = document.querySelector('#thought-id').value.trim();
    const deleteId = document.querySelector('#delete-reaction').value.trim();

    // if (!deleteId || !thoughtId) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (deleteId && thoughtId) {
        const response = await fetch(`/api/thought/reaction/${thoughtId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reactionId: deleteId }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Reaction Successfully Deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Create Thought
const createThoughtForm = document.querySelector('#create-thought-form');
if (createThoughtForm) {
    createThoughtForm.addEventListener('submit', createThoughtHandler);
}
// Delete Thought
const deleteThoughtForm = document.querySelector('#delete-thought-form');
if (deleteThoughtForm) {
    deleteThoughtForm.addEventListener('submit', deleteThoughtHandler);
}
// Update Thought
const updateThoughtForm = document.querySelector('#update-thought-form');
if (updateThoughtForm) {
    updateThoughtForm.addEventListener('submit', updateThoughtHandler);
}
// Create Reaction
const createReactionForm = document.querySelector('#create-reaction-form');
if (createReactionForm) {
    createReactionForm.addEventListener('submit', createReactionHandler);
}
// Delete Reaction
const deleteReactionForm = document.querySelector('#delete-reaction-form');
if (deleteReactionForm) {
    deleteReactionForm.addEventListener('submit', deleteReactionHandler);
}

  
