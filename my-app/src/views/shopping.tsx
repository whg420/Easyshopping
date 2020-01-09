import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../util/useStore'
const Shopping: React.FC = () => {
    let store = useStore();
    let { shop } = store;
    useEffect(() => {
        shop.shopActions()
    }, [shop])
    return useObserver(() => (
        <div>
           shopping
        </div>
            )
            )
        }
        
        export default Shopping
