import FooterLogo from "../assets/images/logo-bookmark-footer.svg";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkBlue py-16">
      {/* Footer Flex Container */}
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        {/* Logo/Menu Container */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue md:flex-row md:space-x-14 md:space-y-0">
          <img src={FooterLogo} alt="Bookmark" className="mb-8 md:mb-1" />

          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>

          <a href="#download" className="uppercase hover:text-softRed">
            Download
          </a>

          <a href="#faq-accordion" className="uppercase hover:text-softRed">
            FAQ
          </a>
        </div>

        {/* Social Container */}
        <div className="flex space-x-10">
          <a href="#">
            <img src={FacebookIcon} alt="Facebook" className="h-6 ficon" />
          </a>

          <a href="#">
            <img src={TwitterIcon} alt="Twitter" className="h-6 ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
