import React from 'react';
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';


function Note({ note }) {
    return (
        <Card className='m-5 p-5 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-all duration-500 ease-in-out transform hover:scale-105'>
            <h5 className="text-3xl font-bold tracking-tight mb-2">
                {note.title}
            </h5>
            <p className="text-lg font-medium mb-3">
                {note.content}
            </p>
            <div className="mt-4 flex gap-2"> 
                <Link to={`/update/${note._id}`}><Button size="md" className="bg-lime-600 text-white hover:bg-gray-100  font-bold rounded">Edit</Button></Link>
                <DeleteNote id={note._id} />   
            </div>
        </Card>
    );
}

export default Note;