const filterNew = (current, incoming) => {
    const changes = {
        add: {
            ...incoming
        },
        purge: {}
    };
    for (let wks in current) {
        for (let spec in current[wks]) {
            if (changes.add[wks] && changes.add[wks][spec]) {
                delete changes.add[wks][spec];
            } else {
                if (!changes.purge[wks]) {
                    changes.purge[wks] = {};
                } 
                changes.purge[wks][spec] = true;
            }
        }
    }
    return changes;
}

export default filterNew;
