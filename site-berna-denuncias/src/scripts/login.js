import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

document.getElementById('form-login').addEventListener('submit', async () => {
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
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login successfull');
            return true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error('Um erro ocorreu ao fazer o login', `[${errorCode}] ${errorMessage}`);
            return false;
        });
}
