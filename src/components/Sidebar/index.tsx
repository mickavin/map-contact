import { useCallback } from 'react';
import ListItem from 'components/ListItem';

interface SidebarProps {
  openModal: any; 
  chooseInfo: any;
  contacts: any;
  removeContact: any;
}
const Sidebar = (props: SidebarProps) => {
  const {openModal, chooseInfo, contacts, removeContact} = props

  // Enregistre les informations du contact sélectionné et ouvre le modal
  const chooseContact = useCallback((info: any) => {
    chooseInfo(info)
    openModal(true)
  }, [openModal, chooseInfo])

    return (
      <ul className="h-2/6 lg:w-1/4 lg:h-auto divide-y divide-slate-100 overflow-auto">
        {
          contacts.map((i: any, index: number) =>
            <ListItem key={index} item={i} chooseInfo={chooseContact} removeContact={removeContact}/>
          )
        }
      </ul>
    )
}

export default Sidebar;