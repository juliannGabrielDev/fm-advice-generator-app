import { FC, JSX } from "react";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div className="bg-blue-95 w-full h-dvh flex justify-center items-center p-5">
            {children}
        </div>
    )
};

export default Layout;
