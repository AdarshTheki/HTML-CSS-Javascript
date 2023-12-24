const data = [
    { name: 'adarsh', count: 20 },
    { name: 'gopal', count: 10 },
    { name: 'ayush', count: 30 },
    { name: 'ankita', count: 40 },
];

// 1. Object Property Sum:
function objectSum() {
    const result = Object.values(data).reduce((sum, value) => sum + value.count, 0);
    console.log(result);
}

// 2. Object Key Count:
function objectKeyCount() {
    const result = Object.values(data).length;
    console.log(result);
}

// 3. Object Key Existence:
function objectExist(key) {
    // return key in data;
    return data.hasOwnProperty(key);
}

// 4. Object Deep Copy:
function objectDeepCopy() {
    const result = JSON.parse(JSON.stringify(data));
    console.log(result);
}

// 5. Object Key Sorting:
function ObjectKeySort() {
    const result = Object.keys(data).sort();
    console.log(result);
}

// 6. Object Property Renaming
function objectRename(obj, oldKey, newKey) {
    if (obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
    return obj;
}

// 7. Object Merging
function objectMerging(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
    // or return { ...obj1, obj2 };
}

// 8. Nested object access:
function objectAccess(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}
