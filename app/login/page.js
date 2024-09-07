import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/images/login.svg';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function page() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="w-1/2 mr-12">
          <Image src={img} alt="login page image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              New to Car Doctors{' '}
              <Link className="text-orange-600 font-bold hover:underline" href="/signup">
                Sign Up
              </Link>{' '}
              here
            </p>
            <div className="flex items-center justify-center">
              <hr className="h-1 bg-orange-100 flex-1 " />
              <p className="text-center text-sm my-2 text-gray-400 flex-1">or sign in with</p>
              <hr className="h-1 bg-orange-100 flex-1" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className="btn text-primary px-4 hover:bg-gray-800">
                <FaGoogle className="text-xl" />
              </button>
              <button className="btn text-primary px-4 hover:bg-gray-800">
                <FaGithub className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
