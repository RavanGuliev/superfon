import React from 'react'

function Login() {
  return (
      <div className="flex justify-center min-h-screen rubik ">
      <div className="w-full max-w-lg   p-8">
        <h2 className="text-center text-xl font-bold mb-6">Giriş</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm  text-[#444] mb-1">
              Mobil nömrə
            </label>
            <select className="w-[80px] border text-sm mb-2">
              <option>+994 10</option>
              <option>+994 50</option>
              <option>+994 55</option>
              <option>+994 70</option>
              <option>+994 77</option>
            </select>
            <input
              type="text"
              placeholder="Mobil nömrə"
              className="w-full px-3 py-4 border border-gray-300 text-sm focus:outline-0 "
            />
          </div>
          <div>
            <label className="block text-sm  text-[#444] mb-1">
              Şifrə
            </label>
            <input
              type="password"
              placeholder="Şifrə"
              className="w-full px-3 py-4 border border-gray-300 text-sm focus:outline-0 "
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-[#021523] text-white  font-medium hover:bg-[#0a2030] transition"
          >
            Daxil ol
          </button>
        </form>
        <div className="mt-5 text-center space-y-1">
          <a href="/register" className="block text-sm text-[#021523] hover:underline underline-offset-4">
            Yeni hesab aç
          </a>
          <a href="/forgot-password" className="block text-sm text-[#021523] hover:underline underline-offset-4">
            Şifrəni unutmusunuz?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login