import React from "react";
import { useNavigate } from 'react-router-dom';

const Absent = () => {
    const ideas = [];

    return (
    <div className="h-screen w-screen items-center justify-center flex text-3xl font-semibold space-y-8 p-14 bg-amber-400">
        <div className="flex flex-col h-full w-full items-center justify-center bg-amber-500 rounded-[60px]">
            <text className="text-2xl">For the following objects, come up with alternative uses that are different from it's typical intended use.</text>
            <text className="text-2xl mb-8">The ideas don't have to be practical/realistic, so long as they strike people as clever, original, unusual, and innovative.</text>
            <div className="flex flex-row w-full justify-evenly">
                <div className="w-1/3">
                    <div className="w-full h-96 rounded-[60px] bg-orange-500"></div>
                    <h1 className="mt-4">Item</h1>
                </div>
                <div className="w-1/3">
                    <h2 className="mb-4">Enter Ideas below</h2>
                    <div className="flex flex-row space-x-4 justify-between">
                        <input className="w-80"/>
                        <button className="outline outline-offset-2 outline-2 text-xl px-2">Submit</button>
                    </div>
                    <div className="w-full h-3/4 bg-orange-500 mt-4"></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Absent;