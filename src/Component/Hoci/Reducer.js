/* eslint-disable import/no-anonymous-default-export */

export default function(addTitles, action){
    switch(action.type){
        case 'name':
            return {
                ...addTitles, 
                name: action.names
            }
        case 'email':
            return {
                ...addTitles,
                email: action.email
            }
        case 'phoneNumber':
            return {
                ...addTitles,
                phoneNumber: action.phoneNumber
            }
        case 'gender':
            return {
                ...addTitles,
                gender: action.gender
            }
    }
}