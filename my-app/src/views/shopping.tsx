
import React from "react"
import { useObserver } from 'mobx-react-lite'

import '../style/home.css'
const Shopping: React.FC = () => {
    return useObserver(() => (
        <div className= 'main' >
        Shopping
        </div>
    ))
}

export default Shopping