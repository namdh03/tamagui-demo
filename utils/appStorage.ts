import { MMKV } from 'react-native-mmkv';

class AppStorage {
  private readonly storage = new MMKV({ id: 'local-storage' });

  set(name: string, value: string | number | boolean) {
    this.storage.set(name, value);
  }

  setJson<T extends object>(name: string, value: T) {
    const jsonString = JSON.stringify(value);
    this.storage.set(name, jsonString);
  }

  getString(name: string) {
    const value = this.storage.getString(name);
    return value ?? null;
  }

  getNumber(name: string) {
    const value = this.storage.getNumber(name);
    return value ?? null;
  }

  getBoolean(name: string) {
    const value = this.storage.getBoolean(name);
    return value ?? null;
  }

  getJson<T extends object>(name: string) {
    const jsonString = this.storage.getString(name);
    return jsonString ? (JSON.parse(jsonString) as T) : null;
  }

  keys() {
    return this.storage.getAllKeys();
  }

  remove(name: string) {
    this.storage.delete(name);
  }

  clear() {
    this.storage.clearAll();
  }
}

const appStorage = new AppStorage();

export default appStorage;
