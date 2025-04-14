import { FC, JSX, useState } from "react";

import IconDice from "../assets/icon-dice.svg";

const Button: FC<{ fetchData: () => void }> = ({ fetchData }): JSX.Element => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleClick = () => {
        setIsAnimating(true);
        fetchData();
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

	const buttonClasses = {
		base: "group absolute p-4 -bottom-7 left-1/2 -translate-x-1/2 rounded-full cursor-pointer transition-shadow duration-300",
		background: "bg-green-3 shadow-green-3/80",
		hover: "hover:shadow-[0_0_10px_4px]",
		icon: "group-hover:rotate-12 transition-transform duration-300",
	};

	return (
		<button onClick={handleClick} className={`${buttonClasses.base} ${buttonClasses.background} ${buttonClasses.hover}`}>
			<img src={IconDice} alt="Dice Icon" className={`${buttonClasses.icon} ${isAnimating ? "animate-spin" : ""}`} />
		</button>
	);
};

export default Button;
