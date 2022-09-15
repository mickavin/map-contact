import { useCallback } from "react";

interface SelectProps {
   value: string;
   onChange: any;
   items: any;
   label: string;
   errors: any;
}
const Select = (props: SelectProps) => {
    const { items, value, onChange, label, errors } = props

    const onChangeText = useCallback((e: any) => {
        onChange(e.target.value)
    }, [onChange])

    return (
        <div className='relative my-2'>                  
            <select className='rounded-md w-full' value={value} onChange={onChangeText}>
                <option value="">{label}</option>
                {
                    items.map((i: any, index: number) => 
                        <option key={index} value={i}>{i}</option>
                        )
                }
            </select> 
            {
                errors?.[0] ?
                <span className="text-red-500">{errors[0]}</span> 
                : null
            } 
        </div> 
    )
}

export default Select;