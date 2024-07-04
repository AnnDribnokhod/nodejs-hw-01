import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
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

async function writeContactsToFile(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error(error);
  }
}

const generateContacts = async (number) => {
  let contacts = await readContactsFromFile();
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  writeContactsToFile(contacts);
};

generateContacts(5);
