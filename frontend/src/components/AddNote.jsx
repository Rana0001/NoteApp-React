import React from "react";
import {BsPlusCircleFill} from 'react-icons/bs';

const AddNote = ()=>{
    

    return(
        <a href="/create"><button title="Add Note"
        class="fixed z-90 bottom-10 right-8 bg-[#289AE2] w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#289AE2] hover:drop-shadow-2xl hover:animate-bounce duration-300"><BsPlusCircleFill size={25}></BsPlusCircleFill></button></a>  
    )
}

export default AddNote;