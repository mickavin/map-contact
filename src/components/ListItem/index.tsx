import { memo } from "react"

interface ListItemProps {
  item: any;
  chooseInfo: any;
}


const ListItem = memo((props: ListItemProps) => {
  const { item, chooseInfo } = props
  const {type, name} = item
  return (
    <li onClick={() => chooseInfo(item)} className="flex items-start space-x-6 p-6 cursor-pointer">
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20 text-left">{name}</h2>
        <dd>
          {type}
        </dd>
      </div>
    </li>
  )
})

export default ListItem