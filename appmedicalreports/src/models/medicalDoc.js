
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
            const json = await response;
            console.log(json);
            //dispatch.count.increment(payload)
        }
    })
}