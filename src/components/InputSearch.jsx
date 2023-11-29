/* eslint-disable react/prop-types */
import '../styles/InputSearch.css'
import { useRef, useState } from "react";
import MessageRequired from './MessageRequired';

const InputSearch = ({ setSearch }) => {

    const [inputIsEmpty, setInputIsEmpty] = useState(false)

    const searchId = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = searchId.current.value.trim()
        if (inputValue === '') {
            setInputIsEmpty(true)
            setTimeout(() => {
                setInputIsEmpty(false)
            }, 3000 )
        } else {
            setSearch(inputValue)
        }
        searchId.current.value = ""
    }

    return (
        <div className="form__location">
            <form  className="form__Submit" onSubmit={handleSubmit}>
                <input className="input__location" type="text" placeholder="Enter Id Location" ref={searchId} />
                <button className="button__location">
                Search
                </button>
            </form>
            <div className="message__location">
                {
                    inputIsEmpty && <MessageRequired/>
                    
                }
            </div>
        </div>
    );
};

export default InputSearch;