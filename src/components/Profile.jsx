import Card from "./Card"
import Context, { gencontext } from "../store/Context";
import { useContext } from "react";
const Profile = () =>{
  const {setValue , value} = useContext(gencontext)
    return <>
          <div className="my-8">
            <div>
                <h2 className="text-3xl font-extrabold">Profiles</h2>
            </div>
            <div className="my-5">
                <div className="bg-gray-300 px-4 py-3 flex justify-end">
                    <input className="border-2 border-black px-4 py-3" type="text"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    placeholder="enter the name or location"/>
                </div>
                <div className="mx-7 my-7 grid grid-cols-1 place-items-center md:grid-cols-5 gap-8">
                <Card></Card>
                </div>
            </div>
          </div>
    </>
}

export default Profile