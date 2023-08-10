import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const SecondChild = () => {
    const data = useContext(UserContext);
    console.log(data)
    return (
        <div onClick={
            () => {
                data.addFunc(10, 20)
            }
        }>
            Second Child
        </div>
    );
};

export default SecondChild;