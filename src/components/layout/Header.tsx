import { ChevronDown, PersonCircle } from "react-ionicons";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-4 bg-white h-[70px] flex items-center">
      <div className="ml-auto mr-2">
        <div className="flex items-center gap-3 cursor-pointer">
          <PersonCircle color="#f43f5e" width="28px" height="28px" />
          <span className="text-primary font-semibold md:text-lg text-sm whitespace-nowrap">
            Board Name
          </span>
          <ChevronDown color="#f43f5e" width="16px" height="16px" />
        </div>
      </div>
    </header>
  );
};

export default Header;
