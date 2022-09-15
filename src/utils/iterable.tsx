export function iterableObject (item: any){
    if(item != undefined && item != null && typeof item === 'object'){
        return item
    } else {
        return {}
    }
}

export function iterableArray (item: any){
    if(item != undefined && Array.isArray(item)){
        return item
    } else {
        return []
    }
}