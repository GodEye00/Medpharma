import { useState, useEffect } from 'react'

function Hooks(path) {

const [state, setState] = useState([])
        
// fetch initial data
useEffect(() => {
fetch(path)
.then(res => res.json())
.then(setState)
}, [])

return state

}

export default Hooks
