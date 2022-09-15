import { useCallback, useState } from 'react';
import Map from 'components/Map';
import Sidebar from 'components/Sidebar';
import Modal from 'components/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { iterableObject } from 'utils/iterable';
import { addContact, updateContact } from 'store/actions/contactAction';

function Main() {
  const contacts = useSelector((state: any) => state?.contacts?.contacts) || []
  const dispatch = useDispatch();
  const [showModal, setOpenModal] = useState(false)
  const [address, setAddress] = useState('')
  const [informations, setInformations] = useState({} as any)

  const addToContacts = useCallback((informations: any) => {
    const contact = {
        ...iterableObject(informations),
        ...iterableObject(address),
        id: Date.now()
    }
    dispatch(addContact(contact))
  }, [address])

  const updateAContact = useCallback((informations: any) => {
    const contact = {
        ...iterableObject(informations),
        ...iterableObject(address),
    }
    dispatch(updateContact(contact))
  }, [address])

  return (
    <div className="App lg:flex lg:h-screen">
      <Map 
      contacts={contacts}
      openModal={setOpenModal} 
      selectAddress={setAddress}  
      chooseInfo={setInformations}/>
      <Sidebar 
      contacts={contacts}
      openModal={setOpenModal} 
      chooseInfo={setInformations}/>
      {
        showModal &&
        <Modal 
        updateContact={updateAContact}
        item={informations}
        close={setOpenModal} 
        addContact={addToContacts}/>
      }
    </div>
  );
}

export default Main;
