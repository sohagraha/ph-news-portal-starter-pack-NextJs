import React from 'react';
import SecondChild from './SecondChild';

const FirsChild = () => {
    return (
        <div>
            First Child
            <SecondChild />
        </div>
    );
};

export default FirsChild;