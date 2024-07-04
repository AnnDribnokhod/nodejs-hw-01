import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

async function readContactsFromFile() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function writeContactsToFile() {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');
  } catch (error) {
    console.error(error);
  }
}

export const removeAllContacts = async () => {
  const contacts = await readContactsFromFile();
  if (contacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }
  await writeContactsToFile();
};

removeAllContacts();
