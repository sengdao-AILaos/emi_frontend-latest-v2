
import { Link } from "react-router-dom"
import emi_logo from'../assets/images/emi_logo.png'

const AuthenticationPage = ({onLogin}) => {
  return (
    <>
      {/* <section className="bg-green-50 h-screen w-screen">
        <section >
          <div className="flex gap-8 justify-center   ">
            <div>
              <Link 
                to='/3-in-1-credit'
                onClick={onLogin}
                className="bg-blue-500 py-4 px-6 text-white rounded-md"
              >
                Login
              </Link>
            </div>
            <div>
              <Link 
                to='/register'
                className="bg-green-600 py-4 px-4 text-white rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
        </section>
      </section> */}

      <div className="flex w-full h-screen bg-gray-100">
          <div className="w-full flex items-center justify-center lg:w-2/2">
          <Link 
            to='/3-in-1-credit'
            onClick={onLogin}
            className="bg-blue-500 py-4 px-6 text-white rounded-md"
          >
            Login
          </Link>
          </div>
          <div className="hidden lg:flex h-full w-full items-center justify-center bg-white">
            <div className="w-full h-full p-8">
                <img 
                  className='w-full h-full object-contain'
                  src={emi_logo} alt="emi image" />
            </div>
          </div>
      </div>
    </>
  )
}

export default AuthenticationPage