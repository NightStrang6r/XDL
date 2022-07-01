class Storage {
    constructor() {

    }

    setValue(name, value, isGlobal = false) {
        let values = {};
        if(!isGlobal) {
            values[name] = value;
        } else {
            values = value;
        }
        
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set(values, function() {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
    
                resolve(true);
            });
        });
    }
    
    getValue(name) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(name, (items) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
    
                if(name == null) {
                    resolve(items);
                } else {
                    resolve(items[name]);
                }
            });
        });
    }
    
    clearStorage() {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.clear(function() {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
    
                resolve(true);
            });
        });
    }
}