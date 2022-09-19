import { memo, useCallback } from "react"

interface ListItemProps {
  item: any;
  chooseInfo: any;
  removeContact: any;
}


const ListItem = memo((props: ListItemProps) => {
  const { item, chooseInfo, removeContact } = props
  const {type, name, address} = item

  // supprime un contact sélectionné
  const removeThisContact = useCallback(() => {
    if(typeof window != 'undefined' && window.confirm('Êtes-vous sûre de vouloir supprimer ce contact ?')){
      removeContact(item)
    }
  }, [item, removeContact])

  return (
    <li className="flex items-start space-x-6 p-6">
      <div onClick={() => chooseInfo(item)}  className="min-w-0 relative flex-auto cursor-pointer">
        <h2 className="font-semibold text-slate-900 truncate pr-20 text-left">{name}</h2>
        <p>
          {type}
        </p>
        <p className="text-truncate">
          {address}
        </p>
      </div>
      <div className="m-auto">
        <div 
        onClick={removeThisContact}
        className="rotate-45 bg-red-500 rounded-2xl w-5 h-5 justify-center items-center text-white ml-0 flex m-auto cursor-pointer" 
        style={{fontSize: '14px'}}>
            +
        </div>
      </div>
    </li>
  )
})

export default ListItem