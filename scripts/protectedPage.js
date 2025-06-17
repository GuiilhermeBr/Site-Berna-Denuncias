import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const paginasProtegidas = ['/listaDenuncias.html'];

onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname in paginasProtegidas) {
        window.location.href = '/index.html';
    } else {
        
    }
});
