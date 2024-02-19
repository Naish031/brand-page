import brandLogo from "../assets/brand_logo.png";

const Navbar = () => {
  const anchorLinks = ["Menu", "Location", "About", "Contact"];
  return (
    <nav className="flex justify-between items-center px-[7%] my-5">
      <img src={brandLogo} alt="brand logo" />

      <div className="flex justify-center items-center gap-6">
        {anchorLinks.map((link, index) => (
          <a
            key={index}
            className="text-[#2E2E2E] text-base text-center font-semibold p-1 uppercase"
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="bg-[#D01C28] items-start inline-flex gap-[10px] py-[6px] px-[16px] rounded-sm">
        <button className="text-white text-base font-semibold leading-normal">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
