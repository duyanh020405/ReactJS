function roiXa(obj) {
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}

// Example usage:
const input = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a'
};

const output = roiXa(input);
console.log(output);
