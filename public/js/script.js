// Delete
const deleteFormHandler = async (event) => {
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
// Login
const deleteForm = document.querySelector('#delete-form');
if (deleteForm) {
    deleteForm.addEventListener('submit', deleteFormHandler);
}
