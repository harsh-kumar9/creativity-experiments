import React from "react";
import { useNavigate } from 'react-router-dom';

const Generate = () => {
    return (
        <div className="h-screen w-screen items-center justify-center flex text-3xl font-semibold space-y-8 p-14 bg-amber-400">
            <div className="flex flex-row h-full w-full items-center justify-center bg-amber-500 rounded-[60px]">
                <div className="w-1/3 rounded-[60px] bg-orange-500 flex">First</div>
                <div className="w-1/3 rounded-[60px] bg-orange-500 flex">Second</div>
                <div className="w-1/3 rounded-[60px] bg-orange-500 flex">Third</div>
            </div>
        </div>
    );
}

export default Generate;