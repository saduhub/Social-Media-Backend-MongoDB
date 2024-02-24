// Delete User
const deleteUserHandler = async (event) => {
    event.preventDefault();
    const deleteId = document.querySelector('#delete-user').value.trim();

    // if (!deleteId) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (deleteId) {
        const response = await fetch(`/api/user/${deleteId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'User successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
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
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Remove Friend
const removeFriendHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const deleteId = document.querySelector('#remove-friend').value.trim();

    // if (!deleteId || !username) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (deleteId && username) {
        const response = await fetch(`/api/user/remove/${username}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: deleteId }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Add Friend
const addFriendHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const addId = document.querySelector('#add-friend').value.trim();

    // if (!addId || !username) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (addId && username) {
        const response = await fetch(`/api/user/add/${username}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ addId: addId }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Friend successfully added.';
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
    const userId = document.querySelector('#user-id').value.trim();
    const deleteId = document.querySelector('#delete-reaction').value.trim();

    // if (!deleteId || !username) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (deleteId && userId) {
        const response = await fetch(`/api/thought/reaction/${userId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reactionId: deleteId }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// create User
const createUserHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();

    // if (!newUsername || !username || !newEmail) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (username && email) {
        const response = await fetch(`/api/user/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email,
                username: username,
            }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// create Thought
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
            // document.getElementById('error-message').textContent = 'Thought successfully created.';
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
            // document.getElementById('error-message').textContent = 'Reaction successfully created.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Update User
const updateUserHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const newUsername = document.querySelector('#new-username').value.trim();
    const newEmail = document.querySelector('#new-email').value.trim();

    // if (!newUsername || !username || !newEmail) {
    //     document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
    //     showModal();
    //     return;
    // }

    if (newUsername && username && newEmail) {
        const response = await fetch(`/api/user/${username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                newEmail: newEmail,
                newUsername: newUsername,
            }),
        });

        if (response.ok) {
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
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
            // document.getElementById('error-message').textContent = 'Thought successfully deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Create User
const createUserForm = document.querySelector('#create-user-form');
if (createUserForm) {
    createUserForm.addEventListener('submit', createUserHandler);
}
// Create Reaction
const createReactionForm = document.querySelector('#create-reaction-form');
if (createReactionForm) {
    createReactionForm.addEventListener('submit', createReactionHandler);
}
// Create Thought
const createThoughtForm = document.querySelector('#create-thought-form');
if (createThoughtForm) {
    createThoughtForm.addEventListener('submit', createThoughtHandler);
}
// Delete User
const deleteUserForm = document.querySelector('#delete-user-form');
if (deleteUserForm) {
    deleteUserForm.addEventListener('submit', deleteUserHandler);
}
// Delete Thought
const deleteThoughtForm = document.querySelector('#delete-thought-form');
if (deleteThoughtForm) {
    deleteThoughtForm.addEventListener('submit', deleteThoughtHandler);
}
// Remove Friend
const removeFriendForm = document.querySelector('#remove-friend-form');
if (removeFriendForm) {
    removeFriendForm.addEventListener('submit', removeFriendHandler);
}
// Add Friend
const addFriendForm = document.querySelector('#add-friend-form');
if (addFriendForm) {
    addFriendForm.addEventListener('submit', addFriendHandler);
}
// Delete Reaction
const deleteReactionForm = document.querySelector('#delete-reaction-form');
if (deleteReactionForm) {
    deleteReactionForm.addEventListener('submit', deleteReactionHandler);
}
// Update User
const updateUserForm = document.querySelector('#update-user-form');
if (updateUserForm) {
    updateUserForm.addEventListener('submit', updateUserHandler);
}
// Update Thought
const updateThoughtForm = document.querySelector('#update-thought-form');
if (updateThoughtForm) {
    updateThoughtForm.addEventListener('submit', updateThoughtHandler);
}
// Highlight nav links
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
});
  
