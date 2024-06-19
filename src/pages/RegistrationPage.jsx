import { Link } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';

const RegistrationPage = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link 
              to={'/authen'}
              className='flex items-center text-indigo-500 hover:text-indigo-700'
          >
              <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>
      <section>
        <div className="text-center text-3xl mt-8">RegistrationPage</div>
      </section>
    </>
    
  )
}

export default RegistrationPage