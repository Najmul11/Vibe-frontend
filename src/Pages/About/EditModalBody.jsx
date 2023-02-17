import React from 'react';


const EditModalBody = () => {
    return (
        <div className="px-6 py-6 lg:px-8">

            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">
                Edit profile
            </h3>
            <form className="space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required/>
                </div>
                <div>
                    <label for="university" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                    <input type="text" name="university" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="university" required/>
                </div>
                <div>
                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="text" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="address" required/>
                </div>

                <button type="submit" className="w-full font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-50 hover:bg-opacity-75 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                    Save
                </button>

            </form>
        </div>
    );
};

export default EditModalBody;