import { useCallback } from "react";

interface TextareaProps {
   label: string;
   value: string;
   onChange: any;
   errors: any;
}
const Textarea = (props: TextareaProps) => {
    const { label, value, onChange, errors } = props

    const onChangeText = useCallback((e: any) => {
        onChange(e.target.value)
    }, [onChange])

    return (
        <div className='relative my-2'>
            <label className={`absolute duration-150 ${value.length === 0 ? 'top-2 left-5' : 'top-0 left-1 text-xs'}`}>
                {label}
            </label>                    
            <textarea className='rounded-md w-full' value={value} onChange={onChangeText}/> 
            {
                errors?.[0] ?
                <span className="text-red-500">{errors[0]}</span> 
                : null
            }
        </div> 
    )
}

export default Textarea;