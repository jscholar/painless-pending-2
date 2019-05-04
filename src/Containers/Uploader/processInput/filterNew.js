const filterNew = (current, incoming) => {
    const changes = {
        add: {
            ...incoming
        },
        purge: {}
    };
    for (let wks in current) {
        for (let spec in current[wks]) {
            if (incoming[wks] && incoming[wks][spec]) {
                delete changes.add[wks][spec];
            } else {
                if (!changes.purge[wks]) {
                    changes.purge[wks] = {};
                } 
                changes.purge[wks][spec] = true;
            }
        }
        if (changes.add[wks] && Object.entries(changes.add[wks]).length === 0 ) delete changes.add[wks]
    }
    return changes;
}

export default filterNew;
