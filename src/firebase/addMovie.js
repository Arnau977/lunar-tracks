import { doc, setDoc } from "firebase/firestore"; 
import { initFirebase } from "./config";
 

export function addMovie() {

    initFirebase()

    // Get image, synopsis from api
    await setDoc(doc(db, "movies"), {
        id: uuidv4(),
        title: movie.title,
        status: movie.status,
        // image: "fdfasfsa.png",
        // synopsis: "A movie very very good",
        user: "testUserId", //user id
    });
}
