import CryptoJS from 'crypto-js';

class LocalStorageHandler {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  private encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  private decrypt(encryptedValue: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  setItem<T>(key: string, value: T): void {
    const valueToStore = JSON.stringify(value);
    const encryptedValue = this.encrypt(valueToStore);
    if (
      typeof window !== 'undefined' &&
      window !== null &&
      window.localStorage !== null &&
      window.localStorage !== undefined &&
      key !== null &&
      key !== undefined &&
      encryptedValue !== null &&
      encryptedValue !== undefined
    ) {
      localStorage.setItem(key, encryptedValue);
    }
  }

  getItem<T>(key: string): T | void {
    const encryptedItem = localStorage.getItem(key);
    if (
      typeof window !== 'undefined' &&
      window !== null &&
      window.localStorage !== null &&
      window.localStorage !== undefined &&
      key !== null &&
      key !== undefined &&
      encryptedItem !== null &&
      encryptedItem !== undefined
    ) {
      try {
        const decryptedValue = this.decrypt(encryptedItem);
        return JSON.parse(decryptedValue) as T;
      } catch (error) {
        return;
      }
    }

    return;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAllItems(): void {
    localStorage.clear();
  }
}

const localStorageHandler = new LocalStorageHandler(
  'Cp4yrEM6rr9tBztvcPh6JwcFIQvzSVSq'
);

export default localStorageHandler;
