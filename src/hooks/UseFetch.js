import axios from "axios"
import { useState } from "react"

const UseFetch = url => {
    const [ resApi, setResp ] = useState()
    const [ hassErrorr, setHassErrorr ] = useState(false)

    const getAppi = () => {
            axios.get(url)
            .then(res => {
                setResp(res.data)
                setHassErrorr(false)
            })
            .catch(err => {
                console.log(err)
                setHassErrorr(true)
            })
    }

    return [ resApi, getAppi, hassErrorr]

}

export default UseFetch