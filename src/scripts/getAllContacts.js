import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data || '[]');
    if (contacts.length > 0) {
      return contacts;
    } else {
      return 'File is empty';
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

console.log(await getAllContacts());
