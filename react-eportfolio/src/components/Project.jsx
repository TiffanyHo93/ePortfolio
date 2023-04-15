import React, { useState } from 'react';
import { data } from "./data/data.js";
import Modal from './Modal.jsx';
import Modal2 from './Modal2.jsx';
import Modal3 from './Modal3.jsx';
import lbilogo from '../assets/projects/lbicon.jpg'
import cstcoinlogo from '../assets/projects/cstcoinicon.png'
import liveconnectlogo from '../assets/projects/liveconnectlogo.png'

const Work = () => {

    // projects file
    const project = data;
    // setProject(data);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
  
    return (
        <div name='work' className='w-full md:h-screen text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='pb-16'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        "What I Do"
                    </p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    
                    {/* Gird Item */}
                    {/* {project.map((item, index) => ( */}
                        <div
                            style={{ backgroundImage: `url(${lbilogo})` }}
                            className="shadow-lg shadow-[#040c16] group rounded-md 
                                    flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font-bold text-white tracking-wider ">
                                    Learning Beat
                                </span>
                                <br/>
                                <span className="text-xl font text-white tracking-wider ">
                                    Android Application
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    {/* <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button> */}
                                    
                                    {/* eslint-disable-next-line */}
                                    
                                    <button
                                        onClick={()=>setShowModal(true)}
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        More Info
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    {/* ))} */}

                    <div
                            style={{ backgroundImage: `url(${cstcoinlogo})` }}
                            className="shadow-lg shadow-[#040c16] group rounded-md 
                                    flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font-bold text-white tracking-wider ">
                                    Learning Beat
                                </span>
                                <br/>
                                <span className="text-xl font text-white tracking-wider ">
                                    Android Application
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    {/* <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button> */}
                                    
                                    {/* eslint-disable-next-line */}
                                    
                                    <button
                                        onClick={()=>setShowModal2(true)}
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        More Info
                                    </button>
                                    
                                </div>
                            </div>
                        </div>

                        <div
                            style={{ backgroundImage: `url(${liveconnectlogo})` }}
                            className="shadow-lg shadow-[#040c16] group rounded-md 
                                    flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font-bold text-white tracking-wider ">
                                    Learning Beat
                                </span>
                                <br/>
                                <span className="text-xl font text-white tracking-wider ">
                                    Android Application
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    {/* <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button> */}
                                    
                                    {/* eslint-disable-next-line */}
                                    
                                    <button
                                        onClick={()=>setShowModal3(true)}
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
            <Modal2 isVisible={showModal2} onClose={()=>setShowModal2(false)}/>
            <Modal3 isVisible={showModal3} onClose={()=>setShowModal3(false)}/>
        </div>
    );
};

export default Work;