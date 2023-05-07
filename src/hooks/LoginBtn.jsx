import React from 'react';

const LoginBtn = ({ children }) => {
    return (
        <button className='px-4 py-2 bg-green-500 rounded-md'>{children}</button>
    );
};

export default LoginBtn;