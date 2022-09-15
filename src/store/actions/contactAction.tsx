export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const REMOVE_ALL_CONTACTS = "REMOVE_ALL_CONTACTS";
export const RESET = "RESET";


type Contact = {
    id: number;
    name: string,
    description: string,
    type: string,
    lat: number,
    lng: number,
    address: string;
}

export function reset() {
  return {
    type: RESET
  }
}

export function addContact(value: Contact) {
  return {
    type: ADD_CONTACT,
    value
  }
}

export function updateContact(value: Contact) {
  return {
    type: UPDATE_CONTACT,
    value
  }
}

export function removeContact(value: Contact) {
  return {
    type: REMOVE_CONTACT,
    value
  }
}

export function removeAllContacts() {
  return {
    type: REMOVE_ALL_CONTACTS
  }
}