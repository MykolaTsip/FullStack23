import React, {useState} from 'react';
import { useMyFirstCustomHook, useWindowWidth, useCounter } from './myHook';

import Button from '@mui/material/Button';


// function CustomH() {
//     const F = () => useMyFirstCustomHook(a + 1);
//     const a = useMyFirstCustomHook(1);
  
//     return (
//       <div>
//         <Button color="success" onClick={F}>
//           New BTN
//         </Button>
//         {a}
//       </div>
//     );
//   }

const CustomH = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const width = useWindowWidth();
    const {count, setCount} = useCounter(10);
    
    return (
    <div>
    {/* <button onClick={openModal}>Open modal</button>
    <Button isOpen={isModalOpen} onClose={closeModal}>SSS</Button> */}
    width: 
    {width}
    <div onClick={() => setCount(count+1)}>
       My count: {count}
    </div>
    </div>
    );
    };

export default CustomH