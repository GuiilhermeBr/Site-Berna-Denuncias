import { addDoc, collection } from "@firebase/firestore";
import { db } from "./firebase";

document.getElementById('').addEventListener('submit', async () => {
    const denuncia = document.getElementById('').value;

    await fazerDenuncia(denuncia);
});



async function fazerDenuncia(denuncia) {
    try {
        const docRef = await addDoc(collection(db, "denuncias"), {
            denuncia: denuncia
        });
        console.log('Documento escrito com sucesso');
    } catch (e) {
        console.error('Erro ao adicionar o documento: ', e);
    }
}