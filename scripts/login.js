import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

document.getElementById('').addEventListener('submit', async () => {
    await signIn();
    
});

async function signIn(email, password) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login successfull');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error('Um erro ocorreu ao fazer o login', `[${errorCode}] ${errorMessage}`);
        });
}
