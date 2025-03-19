// Helper function to convert collection to array
function toArray(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
}

function myEach(collection, callback) {
    const values = toArray(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = toArray(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = toArray(collection);
    let accumulator = acc;
    let startIndex = 0;
    
    if (acc === undefined) {
        accumulator = values[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
}

function myFind(collection, predicate) {
    const values = toArray(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = toArray(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return toArray(collection).length;
}


function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
}

function myKeys(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

function myValues(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(object[key]);
        }
    }
    return result;
}

// BONUS: mySortBy
function mySortBy(array, callback) {
    const result = [...array];
    return result.sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        if (typeof aValue === 'string') {
            return aValue.localeCompare(bValue);
        }
        return aValue - bValue;
    });
}

// BONUS: myFlatten
function myFlatten(array, shallow, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && (!shallow || shallow === false)) {
            myFlatten(array[i], shallow, newArr);
        } else if (Array.isArray(array[i]) && shallow) {
            newArr.push(...array[i]);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}