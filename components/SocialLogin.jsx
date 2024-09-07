import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function SocialLogin() {
  const handleLogin = async () => {};
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="btn text-primary px-4 hover:bg-gray-800">
        <FaGoogle className="text-xl" />
      </button>
      <button className="btn text-primary px-4 hover:bg-gray-800">
        <FaGithub className="text-xl" />
      </button>
    </div>
  );
}
