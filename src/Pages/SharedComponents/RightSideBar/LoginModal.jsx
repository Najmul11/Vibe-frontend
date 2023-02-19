import React, { useState } from 'react';
import ModalBody from './ModalBody';
import SignupModalBody from './SignupModalBody';


const LoginModal = ({setIsLoginModalOpen}) => {
    const [loginModal, setLoginModal]=useState(true)

    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box dark:bg-gray-800" >
                    {
                        loginModal ?
                             <ModalBody setLoginModal={setLoginModal} setIsLoginModalOpen={setIsLoginModalOpen}/>
                            :
                             <SignupModalBody setLoginModal={setLoginModal} setIsLoginModalOpen={setIsLoginModalOpen}/>
                    }
                    <div className="modal-action">
                        <label htmlFor="login-modal" className="cursor-pointer font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-10 hover:bg-opacity-25 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;