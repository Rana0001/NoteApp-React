import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateNote from '../components/UpdateNote';
import noteServices from '../services/noteServices';

function UpdateNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await noteServices.getNote(id);
        setNote(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className='text-bold text-center text-xl'>Update Note</p>
      <UpdateNote note={note} />
    </div>
  );
}

export default UpdateNotePage;
