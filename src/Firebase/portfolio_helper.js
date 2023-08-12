
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from './firebase_config';

// export const sub = async (memberdataRef) => {
//     const memberdataSnapshot = await getDoc(memberdataRef);

//     if (memberdataSnapshot.exists()) {
//         const memberdata = memberdataSnapshot.data();
//         return memberdata
//     }
//     else {
//         console.log("Referenced document does not exist.");
//     }
// }



