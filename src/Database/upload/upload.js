import database from '../instance';

const upload = async (payload) => {
    const date = new Date().toLocaleString('en-US', {hour12: false})
    for (let wks in payload.add) {
        for (let spec in payload.add[wks]) {
            const specNode = {
                wksNum: wks,
                dateAdded: date,
                status: 'unresolved'
            }
            database.ref(`worksheets/${wks}/${spec}`).set('unresolved')
            database.ref(`specimens/${spec}/worksheets/${wks}`).update(specNode)
            database.ref(`specimens/${spec}/history`).push().set({
                date: date,
                message: `Added worksheet ${wks}`
            })
        }
    }
    for (let wks in payload.purge) {
        for (let spec in payload.purge[wks]) {
            database.ref(`worksheets/${wks}/${spec}`).set(null);
        }
    }
}

export default upload;
