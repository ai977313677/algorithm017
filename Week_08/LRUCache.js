/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.length === 0) { return -1; }
    for (let i = 0; i < this.cache.length; i++) {
        if (this.cache[i].key === key) {
            const value = this.cache[i].value;
            delete this.cache[i];
            this.cache = this.cache.filter(item => item);
            this.cache.unshift({ key: key, value: value });
            return value;
        }
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const idx = this.get(key);
    if (idx > 0) {
        this.cache[0].value = value;
    } else {
        if (this.cache.length >= this.capacity) {
            this.cache.length = this.capacity - 1;
            this.cache.unshift({ key: key, value: value });
        } else {
            this.cache.unshift({ key: key, value: value });
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */