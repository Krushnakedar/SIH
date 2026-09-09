import Dexie from 'dexie';

class OrcaCacheDatabase extends Dexie {
  snapshots;
  constructor() {
    super('orca-marine-intelligence-cache');
    this.version(1).stores({ snapshots: 'id' });
  }
}

const CACHE_KEY = 'orca-demo-cache';
const database = typeof indexedDB !== 'undefined' ? new OrcaCacheDatabase() : null;
export const cacheService = {
  save: (value) => {
    const record = { id: 'latest', savedAt: new Date().toISOString(), value };
    localStorage.setItem(CACHE_KEY, JSON.stringify(record));
    if (database) void database.snapshots.put(record);
  },
  read: () => { try { return JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch { return null; } },
  readAsync: async () => database?.snapshots.get('latest'),
};