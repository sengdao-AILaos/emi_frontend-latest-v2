import { Link } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';


const LoginPage = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link 
              to={'/authen'}
              className='flex items-center text-green-500 hover:text-green-700'
          >
              <FaArrowLeft className='mr-2' /> Back to authentication page
          </Link>
        </div>
      </section>
      <section>
        <Link 
            to='/home'
            className="text-center text-3xl mt-8 bg-green-600  text-white rounded-md  "
        >
            Go to Homepage
        </Link>
       
      </section>
    </>
  )
}

export default LoginPage