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
            // document.getElementById('error-message').textContent = 'User Successfully Deleted.';
            // showModal();
            return;
        } else {
            console.log('Something went wrong');
        }
    }
};
// Create User
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
            // document.getElementById('error-message').textContent = 'User Successfully Created.';
            // showModal();
            const updateToUsers = await response.json();
            window.updateDisplay(updateToUsers);
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
            // document.getElementById('error-message').textContent = 'User Successfully Updated.';
            // showModal();
            const updateToUsers = await response.json();
            window.updateDisplay(updateToUsers);
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
            // document.getElementById('error-message').textContent = 'Friend Successfully Added.';
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
            // document.getElementById('error-message').textContent = 'Friend Successfully Removed.';
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
// Delete User
const deleteUserForm = document.querySelector('#delete-user-form');
if (deleteUserForm) {
    deleteUserForm.addEventListener('submit', deleteUserHandler);
}
// Update User
const updateUserForm = document.querySelector('#update-user-form');
if (updateUserForm) {
    updateUserForm.addEventListener('submit', updateUserHandler);
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