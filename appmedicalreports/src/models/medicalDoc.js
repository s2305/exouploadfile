
export const medicalDoc = {
    state: {fileNameToDisplay :"no file selected",
            file: null}, // initial state
    reducers: {
        // handle state changes with pure functions
        setFileNameToDisplay(state, payload) {
            return {...state, fileNameToDisplay:payload}
        },
        setFile(state, payload) {
            return {...state, file:payload}
        }
    },
    effects: (dispatch) => ({

        async uploadFile(payload, rootState) {


            const response = await fetch('https://fhirtest.uhn.ca/baseDstu3/Binary',  { method: 'POST', body: payload.fileToUpload });
            const json = await response.json();
            console.log(json);
            //dispatch.count.increment(payload)
        }
    })
}