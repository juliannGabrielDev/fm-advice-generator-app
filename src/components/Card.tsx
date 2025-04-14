import { FC, JSX, useEffect, useState } from "react";
import Quote from "./Quote"
import Button from "./Button";

import DividerDesktop from "../assets/pattern-divider-desktop.svg";
import DividerMobile from "../assets/pattern-divider-mobile.svg";

interface Slip {
    id: number;
    advice: string;
}

interface ApiResponse {
    slip: Slip;
}

const Card: FC = (): JSX.Element => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setError(null);
            const response = await fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
            }
            const json: ApiResponse = await response.json();
            setData(json);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const classes = {
        main: "relative flex flex-col justify-between gap-4 bg-blue-9 p-8 pb-12 rounded-lg w-full max-w-md min-h-52",
        advice: "block text-center text-green-3 font-semibold",
    };

	return (
		<main className={classes.main}>
            <span className={classes.advice}>ADVICE #{loading ? "..." : data?.slip?.id}</span>
			<Quote>
                {error ? error.message : loading ? "Loading..." : data?.slip?.advice}
            </Quote>
            <img src={DividerMobile} alt="Divider" className="md:hidden mx-auto" />
            <img src={DividerDesktop} alt="Divider" className="hidden md:block mx-auto" />
            <Button fetchData={fetchData} />
		</main>
	);
};

export default Card;
