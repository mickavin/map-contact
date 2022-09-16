import { useCallback, useEffect, useState } from 'react';
import Map from 'components/Map';
import Sidebar from 'components/Sidebar';
import Modal from 'components/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { iterableObject } from 'utils/iterable';
import { addContact, updateContact, reset, removeContact } from 'store/actions/contactAction';
function Main() {
  const contacts = useSelector((state: any) => state?.contacts?.contacts) || []
  const dispatch = useDispatch();
  const [showModal, setOpenModal] = useState(false)
  const [address, setAddress] = useState('')
  const [informations, setInformations] = useState({} as any)

  useEffect(() => {
    if(!localStorage.getItem('isInit')){
      dispatch(reset())
      localStorage.setItem('isInit', 'true')
    }
  },[])

  const addToContacts = useCallback((informations: any) => {
    const contact = {
        ...iterableObject(informations),
        ...iterableObject(address),
        id: Date.now()
    }
    dispatch(addContact(contact))
    setInformations({})
    setAddress('')
  }, [address, dispatch, setInformations, setAddress])

  const updateAContact = useCallback((informations: any) => {
    const contact = {
        ...iterableObject(informations),
    }
    dispatch(updateContact(contact))
    setInformations({})
    setAddress('')
  }, [dispatch, setInformations, setAddress])

  const removeAContact = useCallback((informations: any) => {
    const contact = {
        ...iterableObject(informations),
    }
    dispatch(removeContact(contact))
  }, [dispatch])

  return (
    <div className="App lg:flex lg:h-screen">
      <Map 
      contacts={contacts}
      openModal={setOpenModal} 
      selectAddress={setAddress}  
      chooseInfo={setInformations}/>
      <Sidebar 
      contacts={contacts}
      removeContact={removeAContact}
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
