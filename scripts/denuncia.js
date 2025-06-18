import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

document.getElementById('form-denuncia').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const denuncia = document.getElementById('txt-denuncia').value;
    const denunciaStatus = await fazerDenuncia(denuncia);
    
    if (denunciaStatus) {
        alert("Denúncia registrada com sucesso!")
        window.location.href = '/index.html';
    } else {
        alert('Ocorreu um erro ao fazer a denúncia.')
    }
});

async function fazerDenuncia(denuncia) {
    try {
        await addDoc(collection(db, "denuncias"), {
            denuncia: denuncia
        });
        console.log('Documento escrito com sucesso');
        return true;
    } catch (e) {
        console.error('Erro ao adicionar o documento: ', e);
        return false;
    }
}