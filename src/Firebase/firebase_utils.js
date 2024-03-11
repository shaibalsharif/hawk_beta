
import { collection, getDocs, doc, getDoc, updateDoc, setDoc, arrayUnion, arrayRemove, deleteDoc } from "firebase/firestore";
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
                fetchedDocuments.push({ ...documentData, ref: docRef });
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
                    // console.log(res.data());
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
            console.log("setting", documentData);
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

export const getPhotoUrl = (type, url) => {
    if (url) {
        switch (type) {
            case 'g-drive':
                const found = url.split('/d/')[1]?.split('/')[0]
                if (!found) {
                    return url
                }
                const new_url = 'https://drive.google.com/uc?export=view&id=' + found;
                return new_url
            case 'g-drive-video':
                return
            default:
                return url
        }

    }
}


export const getServicePageContent = async (collectionName, documentName, setter) => {
    const documentRef = doc(db, collectionName, documentName);

    try {
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const documentData = documentSnapshot.data();

            setter(documentData)


        } else {
            console.log("Document does not exist.");
        }
    } catch (error) {
        console.log("Error fetching document:", error);
    }
}

export const getServicePageContent_all = async (doc_name_list, setter) => {

    let data = {}
    doc_name_list.map(async (el) => {
        const documentRef = doc(db, 'services', el);
        try {
            const documentSnapshot = await getDoc(documentRef);

            if (documentSnapshot.exists()) {
                const documentData = documentSnapshot.data();

                data[`${el}`] = documentData
                console.log(data);
                setter(data)

            } else {
                console.log("Document does not exist.");
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        }
    })


}





export const getContactPageContent = async (collectionName, documentName, setter) => {
    const documentRef = doc(db, collectionName, documentName);

    try {
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
            const documentData = documentSnapshot.data();

            setter(documentData)


        } else {
            console.log("Document does not exist.");
        }
    } catch (error) {
        console.error("Error fetching document:", error);
    }
}

const addMember = async (docName, name, photoType, photoUrl, position) => {
    try {
        const memberRef = doc(collection(db, 'members'), docName);

        await setDoc(memberRef, {
            name: name,
            photo: {
                type: photoType,
                url: photoUrl
            },
            position: position
        });
        const teamMembersDocRef = doc(db, 'about', 'team_members');
        await updateDoc(teamMembersDocRef, {
            members: arrayUnion(memberRef)
        });
        console.log('Document successfully written!');
        return memberRef; // Return the reference to the newly created document
    } catch (error) {
        console.log('Error writing document: ', error);
        return null;
    }
};
export const deleteMember = async (docName) => {
    try {
        const memberRef = doc(collection(db, 'members'), docName);
        await deleteDoc(memberRef);
        console.log('Document successfully deleted!');
        // Now remove the reference from team_members document
        const teamMembersDocRef = doc(db, 'about', 'team_members');
        await updateDoc(teamMembersDocRef, {
            members: arrayRemove(memberRef)
        });
        console.log('Member reference removed from team_members.');
        return true;
    } catch (error) {
        console.log('Error deleting document: ', error);
        return false;
    }
};

export const handleAddEditMember = async (data) => {

    console.log(data) //{ name, position, photo_object }
    const newMemberRef = await addMember(data.name.split(" ").join('-'), data.name, data.photo_object.type, data.photo_object.url, data.position);
    ;
    if (newMemberRef) {
        console.log('Reference to the new member:', newMemberRef);
        // Use newMemberRef as needed
    } else {
        console.log('Failed to create a new member.');
    }
}

export const updateCoverData = async (title, subtitle, coverType, coverUrl) => {
    try {
        const coverDocRef = doc(db, 'services', 'cover');
        await updateDoc(coverDocRef, {
            title: title,
            sub: subtitle,
            image: {
                type: coverType,
                url: coverUrl
            }
        });
        console.log('Cover data successfully updated!');
        return true;
    } catch (error) {
        console.log('Error updating cover data: ', error);
        return false;
    }
};

export const updateInnerPageData = async (title, sub, imageType, imageUrl, details) => {
    try {
        const innerPageDocRef = doc(db, 'services', 'inner_page');
        await updateDoc(innerPageDocRef, {
            title: title,
            sub: sub,
            image: {
                type: imageType,
                url: imageUrl
            },
            details: details
        });
        console.log('Inner page data successfully updated!');
        return true;
    } catch (error) {
        console.log('Error updating inner page data: ', error);
        return false;
    }
};



export const updateServicesList = async (sub, title, content) => {
    try {
        const servicesListDocRef = doc(db, 'services', 'services_list');
        await updateDoc(servicesListDocRef, {
            sub: sub,
            title: title,
            content: content
        });
        console.log('Services list data successfully updated!');
        return true;
    } catch (error) {
        console.log('Error updating services list data: ', error);
        return false;
    }
};

export const updateClientList = async (title, sub, details="", content,test) => {
    

    try {
        const clientListDocRef = doc(db, 'services', 'client_list');
        await updateDoc(clientListDocRef, {
            title: title,
            sub: sub,
            details: details,
            content: content,
        });
        return true;
    } catch (error) {
        console.log('Error updating client list data: ', error);
        return false;
    }
};