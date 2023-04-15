import React from 'react'
import cstcoin1e from '../assets/projects/cstcoin1e.png'
import { Link } from 'react-scroll';

const Modal2 = ({isVisible, onClose}) => {
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
                CSTCoin - Website
              </h3>
              <button onClick={()=>onClose()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
          </div>
          
          <div className='max-w-[1000px] h-full mx-auto px-8 grid grid-cols-3 gap-4 justify-center items-center'>
            <div className='col-span-2 text-white py-4 max-w-[700px] text-right'>
              <p className='mb-3'>
                CSTCoin is inspired from Binance.com which is a cryptocurrency trading platform.
                Due to time constraints, CSTCoin only focuses on create new user accounts, login into user accounts, simple trading function,
                display the current market’s prices, personal wallet, and profile information
              </p>
              <p className='mb-3'>
                Back-end: TypeOrm, Class-validator, SQLite, and Nodejs API
              </p>
              <p>
                Font-end: Vuejs, Bootstrap-vue, cliend-side, props/emits (or Vuex)
              </p>
            </div>
            <div className="my-auto">
                <img src={cstcoin1e} className="w-100 py-5" alt="LearningBeat"/>
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

export default Modal2