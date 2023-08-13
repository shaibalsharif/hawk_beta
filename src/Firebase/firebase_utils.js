
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from './firebase_config';

export const getDocumentByRef = async (memberdataRef, setter) => {
    const memberdataSnapshot = await getDoc(memberdataRef);
    if (memberdataSnapshot.exists()) {
        const memberdata = memberdataSnapshot.data();

        setter(memberdata)
    }
    else {
        console.log("Referenced document does not exist.");
    }
}


export const getDocumentByRefList = async (documentReferences, setDocuments) => {
    try {
        const fetchedDocuments = [];

        for (const docRef of documentReferences) {
            const documentSnapshot = await getDoc(docRef);
            if (documentSnapshot.exists()) {
                const documentData = documentSnapshot.data();
                fetchedDocuments.push(documentData);
            }
        }

        setDocuments(fetchedDocuments);
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};



export const fetchAboutData = async () => {

    getDocs(collection(db, "about"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
            const memberdataRefs = newData[2].data().members;
            memberdataRefs.map(memberdataRef => {

                getDoc(memberdataRef).then(res => {
                    console.log(res.data());
                })
            })
        })

}

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
export const fetchPortFolioData = async (collectionName, documentName, setter) => {
    const documentRef = doc(db, collectionName, documentName);
    try {
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
            const documentData = documentSnapshot.data();

            setter(documentData);



        } else {
            console.log("Document does not exist.");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}



export const fetchDocumentByName = async (collectionName, documentName, setter) => {
    const documentRef = doc(db, collectionName, documentName);

    try {
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const documentData = documentSnapshot.data();

            getDocumentByRefList(documentData.content, setter)


        } else {
            console.log("Document does not exist.");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}

export const getEmbedLink = (url) => {
    if (url) {
        const found = url.split('/d/')[1]?.split('/')[0]
        if (!found) {
            return null
        }
        const new_url = 'https://drive.google.com/uc?export=view&id=' + found;
        return new_url
        

    }
}

