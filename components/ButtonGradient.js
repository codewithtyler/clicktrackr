"use client";

import { Button } from "@/components/ui/button";

const ButtonGradient = ({ title = "Gradient Button", onClick = () => {} }) => {
    return (
        <Button
            variant="default"
            className="animate-shimmer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={onClick}
        >
            {title}
        </Button>
    );
};

export default ButtonGradient;
