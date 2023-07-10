import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const transaction = jateDb.transaction("jate", "readwrite");
  const objStore = transaction.objectStore("jate");
  const count = (await objStore.get("counter")) || 0;
  count++;
  const request = store.put({ id: count, value: content });
  const result = await request;
  return result;
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB("jate", 1);
  const transaction = jateDb.transaction("jate", "readonly");
  const objStore = transaction.objectStore("jate");
  const request = objStore.getAll();
  const result = await request;
  return result.value;
};

initdb();
