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
// Highlight nav links
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
});
  
