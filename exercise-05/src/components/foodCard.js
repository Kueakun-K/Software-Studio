import { useState } from "react";

export const FoodCard = ({ title, name , img}) => {
    const [vote, setVote] = useState(0)
    const handleVote = () => {
        if (vote <= 9){
            setVote(vote + 1)
        }
        else {
            alert("Cannot Vote more")
        }
    }
    const handleUnvote = () => {
        if (vote >= 1){
            setVote(vote - 1)
        }
        else {
            alert("Cannot Unvote")
        }
    }
    return (
        <div className="flex justify-center">
            <div className="w-3/5 bg-[#fcefdb] rounded-xl border-black border-2 p-5">
                <div className="flex flex-row justify-between mb-2">
                    <div className="">
                        <p className="text-lg font-bold my-2">{title}</p>
                        <p className="text-sm font-bold mb-2">{name}</p>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <img
                        src={img}
                        alt=""
                        className="w-40 h-40"
                    />
                </div>
                <div className="flex justify-center space-x-3">
                    <button className="bg-[#f2f0f3] hover:bg-[#e0e0e0] p-1 rounded-sm border-black border text-sm" onClick={handleVote}>Click to Vote</button>
                    <div className="bg-[#83e600] text-[#904ade] font-extrabold p-2 border-black border-2 rounded-lg text-lg ">{vote === 10 ? "MAX" : vote === 0 ? "MIN" : vote}</div>
                    <button className="bg-[#f2f0f3] hover:bg-[#e0e0e0] p-1 rounded-sm border-black border text-sm" onClick={handleUnvote}>Click to Unvote</button>
                </div>
            </div>
        </div>
    );
};
