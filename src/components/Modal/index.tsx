import { useEffect, useState, memo, useCallback, useMemo } from 'react';
import TextInput from 'components/TextInput';
import Select from 'components/Select';
import Textarea from 'components/Textarea';
import { TYPES } from 'constants/types';
import Validator from 'validatorjs';

interface ModalProps {
    close: any;
    name?: string;
    description?: string;
    type?: string;
    addContact: any;
    updateContact: any;
    item: any;
}

export default memo((props: ModalProps) => {
    const { close, addContact, updateContact, item} = props
    const { name = '',  description = '', type = '' } = item
    const inputs = useMemo(() => {
        return {
            name: null,
            description: null,
            type: null
        }
    }, [])
    const [descriptionValue, onChangeDescription] = useState(description)
    const [nameValue, onChangeName] = useState(name)
    const [typeValue, onChangeType] = useState(type)
    const [errors, setErrors] = useState(inputs)
    const isEditing = useMemo(() => Object.keys(item).length > 0, [item])
    
    const rules = useMemo(() => {
        return {
            name: ['required', 'max:50'],
            description: ['required', 'max:200'],
            type: ['required', { 'in': TYPES }]
        }
    }, [])

    useEffect(() => {
        let messages = Validator.getMessages('fr');
        messages.required = 'Ce champ est requis.';
        messages.max = 'Ce champ doit contenir moins de :max.'
        Validator.setMessages('en', messages);

        if(typeof document != 'undefined'){
            const body = document.querySelector('body');
            body!.style.overflow = 'hidden';
        }
    }, [])

    const onSubmit = useCallback((event: any) => {
        event.preventDefault()
        const values = {
            name: nameValue,
            type: typeValue,
            description: descriptionValue,
        }
        let validation = new Validator(values, rules);
        if(validation.passes()){
            if(isEditing){
                updateContact({...item,...values})
                close(false)
            } else {
                addContact(values)
                close(false)
            }
        } else {
            setErrors({
                ...inputs,
                ...validation.errors.all()
             })
        }
    }, [descriptionValue, nameValue, item, typeValue, isEditing, addContact, updateContact, close, inputs,rules, setErrors])

    return (
        <> 
            <div className='fixed bottom-0 top-0 right-0 left-0 bg-opaque-grey flex justify-center items-center z-30'>
                <div onClick={() => close(false)} className='fixed bottom-0 top-0 right-0 left-0 z-40'/>
                <div className='bg-slate-50 max-h-screen max-w-screen w-130 h-80 overflow-auto z-50'>
                    <form onSubmit={onSubmit} className='p-5'>
                        <TextInput label='Nom' value={nameValue} onChange={onChangeName} errors={errors['name']}/>
                        <Textarea label='Description' value={descriptionValue} onChange={onChangeDescription}  errors={errors['description']}/>
                        <Select label='Type' value={typeValue} onChange={onChangeType} items={TYPES}  errors={errors['type']}/>
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            {isEditing ? 'Modifier' : 'Ajouter'} le contact
                        </button>
                    </form>                     
                </div>
            </div>
        </> 
    )
})
