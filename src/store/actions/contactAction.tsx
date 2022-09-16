export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const REMOVE_ALL_CONTACTS = "REMOVE_ALL_CONTACTS";
export const RESET = "RESET";

export function reset() {
  return {
    type: RESET
  }
}

export function addContact(value: any) {
  return {
    type: ADD_CONTACT,
    value
  }
}

export function updateContact(value: any) {
  return {
    type: UPDATE_CONTACT,
    value
  }
}

export function removeContact(value: any) {
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