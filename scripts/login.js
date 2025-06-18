import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById('form-login').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const senha = document.getElementById('input-senha').value;
    const login = await signIn(email, senha);
    
    if (login) {
        window.location.href = '/listaDenuncias.html';
    } else {
        alert('Ocorreu um erro ao fazer o login.')
    }
});

async function signIn(email, password) {
    let loginSuccessful = false;

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login successfull');
            loginSuccessful = true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error('Um erro ocorreu ao fazer o login' + `[${errorCode}] ${errorMessage}`);
        });
    
        return loginSuccessful;
}
