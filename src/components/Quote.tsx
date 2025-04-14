import {FC, JSX, ReactNode} from "react";

const Quote:FC<{children: ReactNode}> = ({children}): JSX.Element => {
	return (
		<p className="text-blue-1 font-bold text-2xl text-center">
			{children}
		</p>
	);
};

export default Quote;