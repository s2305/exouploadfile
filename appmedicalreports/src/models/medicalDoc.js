
export const medicalDoc = {
    state: "no file selected",
    reducers: {
        // handle state changes with pure functions
        setFileNameToDisplay(state, payload) {
            return  payload
        }
    },
    effects: (dispatch) => ({

        async uploadFile(payload, rootState) {

            const response = await fetch('https://fhirtest.uhn.ca/baseDstu3/Binary',  { method: 'POST', body: payload.fileToUpload });
            const rep = await response;
            console.log(rep)
            await dispatch.nbrDocs.getNbrDocsAsync()
        }
    })
}

export const nbrDocs = {
    state: 0,
    reducers: {
        // handle state changes with pure functions
        setNbrDocs(state, payload) {
            return  payload
        }
    },
    effects: (dispatch) => ({

        async getNbrDocsAsync(payload, rootState) {

            await new Promise(resolve => setTimeout(resolve, 1000));
            dispatch.nbrDocs.setNbrDocs(Math.floor(Math.random() * Math.floor(10000)));

        }
    })
}