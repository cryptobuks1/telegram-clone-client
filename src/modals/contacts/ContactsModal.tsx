import React from 'react';

import './ContactsModal.css';
import {SearchInput} from '../../components/input/search-input/SearchInput';
import {Contacts} from '../../components/view/contacts/Contacts';

interface Props {
  closeModal(): void;
}

export const ContactsModal: React.FC<Props> = (props) => {
  return (
    <>
      <div className="modal-backdrop" onClick={props.closeModal}/>
      <div id="contacts" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="title">Contacts</span>
            <button className="edit-btn">Edit</button>
            <button className="close-btn" onClick={props.closeModal}>Close</button>
          </div>
          <div className="modal-body">
            <SearchInput focus={true}/>
            <Contacts/>
          </div>
          <div className="modal-footer">
            <button className="new-contact-btn">New contact</button>
          </div>
        </div>
      </div>
    </>
  );
}
