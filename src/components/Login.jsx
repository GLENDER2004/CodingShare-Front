import fondo from "../assets/fondo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen">

      {/* Lado izquierdo con fondo y texto */}
      <div
        className=" w-full hidden sm:flex md:w-1/2 lg:w-3/4 flex-col justify-center items-center text-white bg-cover bg-center p-6 md:p-10"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Codingshare</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8">Welcome Back .!</h2>
        <button className="px-4 py-2 border border-white rounded-lg text-base italic hover:bg-white hover:text-black transition">
          Do you need help?
        </button>
      </div>

      {/* Lado derecho con login */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center p-6 sm:p-8 bg-black text-white">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Login!</h2>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">Sign in or create an account with:</p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Correo o username"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-400 hover:underline text-xs sm:text-sm">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90"
            >
              Login
            </button>
          </form>

          {/* Separador */}
          <div className="my-6 flex items-center justify-center">
            <hr className="w-full border-gray-600" />
            <span className="px-2 text-gray-400 text-xs sm:text-sm">Or</span>
            <hr className="w-full border-gray-600" />
          </div>

          {/* Botones sociales */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs sm:text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/registrar" className="text-blue-400 hover:underline">Sign up</Link>
          </p>

          <div className="mt-4 text-xs flex justify-between text-gray-600">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Customer Care</a>
          </div>
        </div>
      </div>
    </div>
  );
}
