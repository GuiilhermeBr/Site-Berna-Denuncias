import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "./firebase";

const paginasProtegidas = ['/listaDenuncias.html'];

onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname in paginasProtegidas) {
        window.location.href = '/index.html';

        const headerNav = document.getElementById('headerNav');
        const liList = [...headerNav.querySelectorAll('li')];
        const lastLi = liList.at(-1);
        
        lastLi.innerHTML = `
            <a href="denuncia.html" class="p-2 border rounded py-1 px-2 bg-[#ffffff20]">Denuncie já!</a>
        `;


    } else if (!user) {
        const headerNav = document.getElementById('headerNav');

        const newLi = document.createElement('li');
        const denuncieButton = document.createElement('a');
        denuncieButton.className = 'p-2 border rounded py-1 px-2 bg-[#ffffff20]';
        denuncieButton.innerHTML = 'Denuncie já!';

        if (window.location.pathname === '/' | window.location.pathname === '/index.html') {
            denuncieButton.href = 'src/views/denuncia.html';
        } else {
            denuncieButton.href = 'denuncia.html';
        }

        newLi.appendChild(denuncieButton);

        headerNav.appendChild(newLi);
    } else if (user) {
        const headerNav = document.getElementById('headerNav');
        const newLi = document.createElement('li');
        if (window.location.pathname === '/' | window.location.pathname === '/index.html') {
            newLi.innerHTML = `
                <a href="src/views/listaDenuncias.html" class="p-2 border rounded py-1 px-2 bg-[#ffffff20]">Lista de Denúncias</a>
            `;
        } else {
            newLi.innerHTML = `
                <a href="listaDenuncias.html" class="p-2 border rounded py-1 px-2 bg-[#ffffff20]">Lista de Denúncias</a>
            `;
        }


        const logOutButtonLi = document.createElement('li');
        const logOutButton = document.createElement('a');
        logOutButton.className = 'p-2 border rounded py-1 px-2 bg-[#ffffff20] hover:cursor-pointer';
        logOutButton.innerHTML = 'Deslogar';
        logOutButton.onclick = () => {
            logOut();
        };
        logOutButtonLi.appendChild(logOutButton);

        headerNav.appendChild(newLi);
        headerNav.appendChild(logOutButtonLi);
    }
});

async function logOut() {
    await signOut(auth).then(() => {
        console.log('Deslogado com sucesso.')
        window.location.href = '/index.html';
    })
    .catch(() => {
        alert('Erro ao deslogar.')
        console.error('Erro ao deslogar.')
    })
}
