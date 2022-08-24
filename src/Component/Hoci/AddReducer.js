/* eslint-disable import/no-anonymous-default-export */
export default function(states, action) {
    
    switch(action.type){
        case 'add':
            return [
                ...states,
                {
                    id: action.id,
                    name: action.state.name,
                    email: action.state.email,
                    phoneNumber: action.state.phoneNumber,
                    gender: action.state.gender,
                    read: true
                }
            ]

        case 'change':
            return states.map(todoState => {
                if(todoState.id === action.id){
                    return {...todoState, read: !todoState.read}
                }
                return todoState
            })

        case 'remove':
            return states.filter(todo => 
                    todo.id !== action.id
                )

        case 'chengeNames':
            return states.map(state => {
                if(state.id === action.id){

                    if(action.name === 'name'){
                        return {
                            ...state, name: action.values
                        }
                    }

                    if(action.name === 'email'){
                        return {
                            ...state, email: action.values
                        }
                    }

                    if(action.name === 'phoneNumber'){
                        return {
                            ...state, phoneNumber: action.values
                        }
                    }

                    if(action.name === 'gender'){
                        return {
                            ...state, gender: action.values
                        }
                    }
                }
                return state
            })
            

        default: return states
    }
}