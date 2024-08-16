import { CloseIcon } from "@/components/atoms/common/Icon";
import Logo from "@/components/atoms/common/Logo";
import ScrollBar from "../ScrollBar";
type DrawerWrapperProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const DrawerWrapper: React.FC<DrawerWrapperProps> = ({ children, onClose }) => {
    return (
        <div className="flex flex-col h-full relative">
            <div className="flex items-center justify-between px-5 md:py-5 md:px-8 mb-4 md:mb-6 border-b border-border-200 border-opacity-75 absolute top-0 start-0 w-full h-16 z-30">
                <Logo className="w-24 md:w-auto" />
                <button
                    onClick={onClose}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-body bg-gray-200 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
                >
                    <CloseIcon className="w-2.5 h-2.5" />
                </button>
            </div>
            <div className="pt-16 h-full">
                <ScrollBar className="w-full h-full">{children}</ScrollBar>
            </div>
        </div>
    );
};

export default DrawerWrapper;
