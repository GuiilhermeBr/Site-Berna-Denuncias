import { collection, doc, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

const denuncias = await getDenuncias();

async function getDenuncias() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const listaDenuncias = [];

    querySnapshot.forEach((doc) => {
        const fulldoc = { id: doc.id, ...doc.data() }
        listaDenuncias.push(fulldoc);
    });
}

