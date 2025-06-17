import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

const denuncias = await getDenuncias();

if (!denuncias) {
    const denunciasList = document.getElementById('denunciasList');

    denuncias.forEach((denuncia) => {
        const blocoDenuncia = document.createElement('div');
        blocoDenuncia.className = 'bg-white p-6 shadowmd rounded-2xl';
        blocoDenuncia.id = denuncia.id;
        blocoDenuncia.innerHTML = `
            <h3 class="px-20 text-shadow-lg text-2xl font-serif font-bold">Denúncia Anônima</h3>
            <h4 class="m-4 text-xl font-serif my-3">${denuncia.denuncia}</h4>
        `;

        const divDeletarDenuncia = document.createElement('div');
        divDeletarDenuncia.className = 'text-center';
        const botaoDeletarDenuncia = document.createElement('a');
        botaoDeletarDenuncia.className = 'bg-gray-200 border border-gray-400 text-center text-xl p-2 border rounded py-1 px-2';
        botaoDeletarDenuncia.innerHTML = 'Excluir';
        botaoDeletarDenuncia.onclick = () => {
            deleteDenuncia(denuncia.id)
        };

        denunciasList.appendChild(blocoDenuncia);
    });
}

async function getDenuncias() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const listaDenuncias = [];

    querySnapshot.forEach((doc) => {
        const fulldoc = { id: doc.id, ...doc.data() }
        listaDenuncias.push(fulldoc);
    });
}

async function deleteDenuncia(idDenuncia) {
    await deleteDoc(doc(db, 'denuncias', idDenuncia));
}

