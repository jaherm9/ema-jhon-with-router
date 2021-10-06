import { useEffect, useState } from "react";
import {getStoredCart} from '../utilities/fakedb'

const useCart = product =>{
    const [cart, setCart] = useState([]);
    useEffect( ()=> {
        if(products.length){
            const savedCart = getStoredCart()
        }
    },[products])
}