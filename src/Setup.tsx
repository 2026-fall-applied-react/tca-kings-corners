import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

type SetUpProps = {
    setTitle: (title: string) => void;
}





export const Setup: React.FC<SetUpProps> = ({
    setTitle,
}) => {

    useEffect(
                () => setTitle("Setup"),
                []
            )

    const nav = useNavigate();

    return (
        <div>
            <button
            className="btn btn-soft btn-lg mt-3"
            onClick={
                () => nav('../play')
            }>
                Play the game
            </button>
        </div>
    );
};