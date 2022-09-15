import { AnyAction } from 'redux'
import {ADD_CONTACT, REMOVE_CONTACT, REMOVE_ALL_CONTACTS, UPDATE_CONTACT, RESET} from "../actions/contactAction";

interface ContactState {
  contacts: any
}

const initialState : ContactState = { contacts: [{
    id: 1,
    name: "John Doe",
    description: "",
    type: "particulier",
    lat: 40.05026719450453,
    lng: -74.24182128906294,
    address: "Fort Dix, New Jersey 08068, United States"
  },
  {
    id: 2,
    name: "Burger King",
    description: "",
    type: "entreprise",
    lat: 40.03575869755147,
    lng: -74.65243530273521,
    address: "Fort Dix, New Jersey 08068, United States"
  },
] 
}

function contactReducer(state = initialState, action: AnyAction) {
  let nextState
  const contactIndex = state.contacts.findIndex((item : any) => item?.id === action.value?.id)
  switch (action.type) {
    case RESET:
      return initialState
    case ADD_CONTACT:
      nextState = {
        ...state,
        contacts: [...state.contacts, action.value]
      }
      
      return nextState || state
    case UPDATE_CONTACT:
      if (contactIndex !== -1) {
        let contacts = [...state.contacts]
        contacts.splice(contactIndex, 1, action.value) 
        nextState = {
          ...state,
          contacts
        }
      }
      else {
        nextState = {
          ...state,
          contacts: [...state.contacts, action.value]
        }
      }
      return nextState || state
    case REMOVE_CONTACT:
      if (contactIndex !== -1) {
        nextState = {
          ...state,
          contacts: state.contacts.filter((item: any, index: number) => index !== contactIndex)
        }
      }
      return nextState || state
    case REMOVE_ALL_CONTACTS:
      nextState = {
        ...state,
        contacts: []
      }
      return nextState || state
  default:
    return state
  }
}

export default contactReducer;