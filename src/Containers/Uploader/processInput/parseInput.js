const regex = {
    wks: /^\s+\d\d\d\d(?!-|\d)/,
    wksBreak: /WS #/,
    specID: /\d\d\d-\d\d\d-\d\d\d\d-\d/g,
    specBreak: /(?=\n.+\d\d\d-\d\d\d-\d\d\d\d-\d)/,

}

const getAllSpecID = (specText) => {
    const specID = specText.match(regex.specID);
    return specID || [];
}

const getWks = (wks) => {
    const wksNumber = wks.match(regex.wks);
    return wksNumber && wksNumber[0].trim();
}

const splitWks = (input) => {
    const wks = input.split(regex.wksBreak).slice(1);
    return wks;
}

/**
 * @param {string} text Raw standard format pending list
 * @returns {object} PendingList as object of wks properties pointing to array of specs
 */
const parseInput = (input) => {
    if (!input.length || typeof input !== "string") return null;
    let WKSs = splitWks(input);
    const pendingList = {};
    WKSs.forEach((pendingWks) => {
        const wksKey = getWks(pendingWks);
        const wksPendings = {};
        getAllSpecID(pendingWks).forEach((spec) => wksPendings[spec] = true);
        pendingList[wksKey] = wksPendings;
    })
    return pendingList;
}

export default parseInput;
