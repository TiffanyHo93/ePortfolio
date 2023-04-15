import React from 'react'
import lb1 from '../assets/projects/lb1.png'
import { Link } from 'react-scroll';

const Modal = ({isVisible, onClose}) => {
  if(!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === "wrapper") onClose();
  }

  return (
    <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex
    justify-center items-center' onClick={handleClose} id="wrapper">
      <div className="relative w-full max-w-2xl max-h-full">
      
        <div className="relative rounded-lg shadow bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Learning Beat - Android Application
              </h3>
              <button onClick={()=>onClose()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
          </div>
          
          <div className='max-w-[1000px] h-full mx-auto px-8 grid grid-cols-3 gap-4 justify-center items-center'>
            <div className='col-span-2'>
              <p className='text-white py-4 max-w-[700px] text-right'>
                “Learning Beat” is an android application, which allows users to login, or create new account,track their points
                  as well as estimate needed points to achieve the initial target for each subject in a specific semester.
              </p>
            </div>
            <div className="my-auto">
                <img src={lb1} className="w-100 py-5" alt="LearningBeat"/>
            </div>
          </div>
        
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button onClick={()=>onClose()} className="text-white group mx-3 border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-green-700 to-blue-800 hover:from-pink-500 hover:to-yellow-500">Close</button>
              <button className="text-white group mx-3 border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-green-700 to-blue-800 hover:from-pink-500 hover:to-yellow-500">
                <Link to='contact' onClick={()=>onClose()} smooth={true} duration={500}>
                  Get in touch
                </Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal