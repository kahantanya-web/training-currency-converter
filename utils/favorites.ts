type Subscriber = (list: string[]) => void;

const STORAGE_KEY = 'tcc.favorites';
const MAX_ITEMS = 20;

function isValidCurrency(code: string) {
  return /^[A-Z]{3}$/.test(code);
}

class Favorites {
  private inMemory: string[] = [];
  private subscribers: Subscriber[] = [];
  private useLocalStorage: boolean = true;

  constructor() {
    this.init();
    try {
      window.addEventListener('storage', this.handleStorageEvent.bind(this));
    } catch (e) {
      // ignore in non-browser environments
    }
  }

  private handleStorageEvent(e: StorageEvent) {
    if (e.key === STORAGE_KEY) {
      this.loadFromStorage();
      this.notify();
    }
  }

  private loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { this.inMemory = []; return; }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) { this.inMemory = []; return; }
      const filtered = parsed.filter((c) => typeof c === 'string' && isValidCurrency(c));
      this.inMemory = Array.from(new Set(filtered)).slice(0, MAX_ITEMS);
    } catch (e) {
      // malformed JSON or localStorage not available
      this.inMemory = [];
      this.useLocalStorage = false;
    }
  }

  private saveToStorage() {
    if (!this.useLocalStorage) { return; }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inMemory));
    } catch (e) {
      // storage quota or disabled
      this.useLocalStorage = false;
    }
  }

  private init() {
    try {
      if (typeof localStorage === 'undefined') { this.useLocalStorage = false; }
    } catch (e) {
      this.useLocalStorage = false;
    }
    this.loadFromStorage();
  }

  list() {
    return [...this.inMemory];
  }

  add(code: string) {
    if (!isValidCurrency(code)) { return; }
    if (this.inMemory.includes(code)) { return; }
    this.inMemory.push(code);
    if (this.inMemory.length > MAX_ITEMS) { this.inMemory = this.inMemory.slice(-MAX_ITEMS); }
    this.saveToStorage();
    this.notify();
  }

  remove(code: string) {
    const idx = this.inMemory.indexOf(code);
    if (idx === -1) { return; }
    this.inMemory.splice(idx, 1);
    this.saveToStorage();
    this.notify();
  }

  subscribe(cb: Subscriber) {
    this.subscribers.push(cb);
    cb(this.list());
    return () => {
      this.subscribers = this.subscribers.filter((s) => s !== cb);
    };
  }

  private notify() {
    const snapshot = this.list();
    this.subscribers.forEach((s) => { try { s(snapshot); } catch (e) { /* ignore */ } });
  }
}

const favorites = new Favorites();

export default favorites;
