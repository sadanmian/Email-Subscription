
const scriptURL = 'https://script.google.com/macros/s/AKfycbxeJAOeKxTYmwdEA5jHxKscB_eFB4hi5f9gnP2fcbPFSWcRts4IgCOq1Gu8k1IKr9Co/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})
