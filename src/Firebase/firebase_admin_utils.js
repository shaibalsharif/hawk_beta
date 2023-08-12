import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from './firebase_config';


export const getCategoryList = async (setter) => {

    getDocs(collection(db, "portfolio_category"))
        .then((querySnapshot) => {

            const category_docs_snapshot = querySnapshot.docs


            const category_ref_collection = category_docs_snapshot.map(doc => {
                return { id: doc.id, data: doc.data() }
            })

            setter(category_ref_collection)
        })

}