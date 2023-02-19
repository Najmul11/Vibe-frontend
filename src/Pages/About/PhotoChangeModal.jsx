import React from 'react';
import PhotoChangeModalBody from './PhotoChangeModalBody';

const PhotoChangeModal = ({ setIsModalOpen, isLoading, setIsLoading}) => {
    return (
        <div>
            <input type="checkbox" id="change-photo-modal" className="modal-toggle" />
            <label htmlFor="change-photo-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <PhotoChangeModalBody setIsModalOpen={setIsModalOpen} isLoading={isLoading} setIsLoading={setIsLoading}/>
                    <div className="modal-action ">
                        <label htmlFor="change-photo-modal" className="cursor-pointer font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-10 hover:bg-opacity-25 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                            Cancel
                        </label>
                    </div>
                </label>
            </label>
            
        </div>
    );
};

export default PhotoChangeModal;