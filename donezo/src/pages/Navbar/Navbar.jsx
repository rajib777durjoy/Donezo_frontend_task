import React from 'react';

const Navbar = () => {
    return (
            <div className="w-full navbar text-black bg-transparent shadow-sm px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal ">
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
    );
};

export default Navbar;