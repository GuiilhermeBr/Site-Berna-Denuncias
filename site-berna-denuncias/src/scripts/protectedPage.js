import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

const paginasProtegidas = ['/listaDenuncias.html'];

onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname in paginasProtegidas) {
        window.location.href = '/index.html';

        const headerNav = document.getElementById('headerNav');
        const lastLi = [...headerNav.querySelectorAll('li')].at(-1);
        lastLi.innerHTML = `
            <a href="denuncia.html" class="p-2 border rounded py-1 px-2 bg-[#ffffff20]">Denuncie já!</a>
        `;
    } else if (user) {
        const headerNav = document.getElementById('headerNav');
        const lastLi = [...headerNav.querySelectorAll('li')].at(-1);
        lastLi.innerHTML = `
            <a href="listaDenuncias.html" class="p-2 border rounded py-1 px-2 bg-[#ffffff20]">Lista de Denúncias</a>
        `;
    }
});
