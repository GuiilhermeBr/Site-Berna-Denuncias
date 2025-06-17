import { addDoc, collection } from "@firebase/firestore";
import { db } from "./firebase";

document.getElementById('form-denuncia').addEventListener('submit', async () => {
    const denuncia = document.getElementById('txt-denuncia').value;
    const denunciaStatus = await fazerDenuncia(denuncia);

    if (!denunciaStatus) {
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