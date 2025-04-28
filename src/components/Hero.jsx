import yashImage from '../assets/yash2.jpg'

const HeroBanner = () => {
  return (
    <section className="bg-white text-gray-800 w-full min-h-screen flex items-center justify-center ">
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl ml-1 font-medium text-gray-500">Hello, I'm</h2>
              <h1 className="text-5xl font-bold text-gray-900 mb-5">Yashraj Chouhan</h1>
              <div className="text-lg leading-8 text-gray-700 space-y-4 tracking-widest">
                <p>
                  Designs with purpose, codes with passion — <br className="hidden md:block"/> 
                  from <span className="font-mono">Flexbox</span> to <span className="font-mono">Fibonacci</span>, 
                  engineering creative design with calculated logic that transforms complexity into clarity.
                </p>
                <p className="text-lg font-medium text-gray-800 font-manrope">
                  Currently at 
                  <a href="https://www.newtonschool.co/newton-school-of-technology-nst/home" 
                     className="ml-2 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    @NST
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <a href="https://drive.google.com/file/d/1M6biyRrmuJxEXkXIs2zfJpx4aq04m-C7/view?usp=sharing" 
                 className="px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all w-fit">
                View CV
              </a>
              <a href="#contact" 
                 className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all w-fit">
                Contact Info
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={yashImage}
              alt="Yashraj"
              className="rounded-xl shadow-xl object-cover w-full max-w-md h-auto grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;