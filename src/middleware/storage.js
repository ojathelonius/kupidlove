import { AsyncStorage } from 'react-native';

/**
 * Storage class
 */
export default class Storage {

    constructor() {
    }

    static store(key, value) {
        return AsyncStorage.setItem(key, value);
    }

    static retrieve(key) {
        return AsyncStorage.getItem(key);
    }

    static remove(key) {
        return AsyncStorage.removeItem(key);
    }
}