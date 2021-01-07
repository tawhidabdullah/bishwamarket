import React from 'react';
import spinner from '../../assets/loading.gif';




const Spinner = () => {
    return (
        <div
            style={{
                width: '110px',
                display: 'block',
                margin: 'auto',
                padding: '50px 0',
            }}
        >
            <img
                src={spinner}
                style={{ width: '110px', display: 'block', margin: 'auto' }}
                alt='Loading...'
            />
        </div>
    );
};

export default Spinner;
