import ChromeLogo from "../assets/images/logo-chrome.svg";
import FirefoxLogo from "../assets/images/logo-firefox.svg";
import OperaLogo from "../assets/images/logo-opera.svg";

export default function DownloadBoxes() {
  return (
    <section id="download-boxes" className="py-32">
      {/* Boxes Container */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
        {/* Box 1 */}
        <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
          {/* Image */}
          <div className="flex justify-center">
            <img src={ChromeLogo} alt="" />
          </div>

          {/* Text */}
          <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
          <p className="text-gray-400">Minimum Version 62</p>

          {/* Dots */}
          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="#"
              className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
            >
              Add & Install Extension
            </a>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-1/3">
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8">
            {/* Image */}
            <div className="flex justify-center">
              <img src={FirefoxLogo} alt="" />
            </div>

            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p className="text-gray-400">Minimum Version 55</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-1/3">
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-16">
            {/* Image */}
            <div className="flex justify-center">
              <img src={OperaLogo} alt="" />
            </div>

            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
            <p className="text-gray-400">Minimum Version 46</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
