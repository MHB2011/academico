import { FaTimes } from "react-icons/fa";

export const Drawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`drawer ${!isOpen && "closed"}`}>
      <span className="faTimes-wrapper" onClick={() => setIsOpen(false)}>
        <FaTimes size={24} />
      </span>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};
