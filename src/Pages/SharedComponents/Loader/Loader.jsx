import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <TailSpin
        height="20"
        width="20"
        color="#9062f4"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} 
        />
    );
};

export default Loader;