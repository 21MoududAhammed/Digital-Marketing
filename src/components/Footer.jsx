import logo from "../assets/logo-white.webp";
export default function Footer() {
  return (
    <footer className='bg-black'>
      {/* first part  */}
      <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-5  border-b-2 border-gray-600 p-8 md:p-0">
        <div>
          <img className="mb-7" src={logo} alt="logo" />

          <div className="">
            <p className="text-sm text-gray-500 max-w-60">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
        </div>
        <div className='text-center text-white'>
          <div className="md:p-8 py-8  border-2 border-gray-600   ">
            <a className="text-xl" href="">
              Facebook
            </a>
          </div>
          <div className="p-8  border-2 border-gray-600">
            <a className="text-xl" href="">
              Twitter
            </a>
          </div>
          <div className="p-8  border-2 border-gray-600">
            <a className="text-xl" href="">
              LinkedIn
            </a>
          </div>
          <div className="p-8  border-2 border-gray-600">
            <a className="text-xl" href="">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl md:text-9xl text-center text-white font-bold font-sans">{`Let's Talk`}</h1>
        </div>
      </div>
      {/* bottom  */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 px-7 py-12 text-white'>
        <div>
          <p className='text-lg font-semibold'>© 2022 - 2025 | Alrights reserved</p>
          <p className='text-lg font-semibold'>by Wealcoder</p>
        </div>
        <div>
            <ul className='flex md:justify-end items-center gap-5 md:gap-10 font-bold'>
                <li>ABOUT US</li>
                <li>CONTACT </li>
                <li>CAREER</li>
                <li>FAQS</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
