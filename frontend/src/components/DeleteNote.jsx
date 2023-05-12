import React, { useState } from 'react';
import noteServices from '../services/noteServices';
import { Button,Modal } from 'flowbite-react';

function DeleteNote({ id }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    setShowModal(false);
    await noteServices.deleteNote(id);
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Button onClick={() => setShowModal(true)} color="failure">
        Delete
      </Button>
      <Modal
        show={showModal}
        size="sm"
        popup={true}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={handleDelete}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => setShowModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteNote;
