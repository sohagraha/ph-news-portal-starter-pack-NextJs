import FirsChild from '@/components/context/FirsChild';
import { UserContext } from '@/components/context/UserContext';

const Context = () => {
    return (
        <UserContext.Provider value={
            {
                name: 'Sohag',
                age: 25,
                addFunc: (a, b) => {
                    alert(a + b)
                }
            }
        }>
            Context Practice
            <FirsChild />
        </UserContext.Provider>
    );
};

export default Context;