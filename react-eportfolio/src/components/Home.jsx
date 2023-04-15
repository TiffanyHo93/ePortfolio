import React from 'react';
import { HiArrowNarrowRight, HiChat } from 'react-icons/hi';
import './style.scss'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJsSquare,faAngular,faHtml5,faCss3,faReact } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] pt-14 mx-auto px-8 grid grid-cols-4 gap-4 justify-center items-center h-full'>
        <div className='col-span-2'>
          <div>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-4xl font-bold text-white'>
              TRACY HO
            </h1>
            <h2 className='text-4xl sm:text-4xl font-bold text-white'>
              I'm a Full Stack Developer.
            </h2>
            <p className='text-white py-4 max-w-[700px] text-justify'>
              Computer system technology student with experience in various programming languages,
              time-management and problem-solving. Hardworking individual able to work independently or
              collaborate with team members. Willing to move to relocate as required.
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            <button className='text-white group mx-3 border-2 px-6 py-3 my-2 flex items-center
            hover:bg-pink-600 hover:border-pink-600 butborder'>
              <Link to='contact' smooth={true} duration={500}>
                Get in touch
              </Link>
              <span className='group-hover:scale-150 duration-300'>
                <HiChat className='ml-3 ' />
              </span>
            </button>
            <button className='text-white group mx-3 border-2 px-6 py-3 my-2 flex items-center
            hover:bg-pink-600 hover:border-pink-600 butborder'>
              <Link to='work' smooth={true} duration={500}>
                View Work
              </Link>
              <span className='group-hover:scale-150 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
        
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
              <div className='face1'>
                  <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className='face3'>
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className='face4'>
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className='face5'>
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className='face6'>
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;