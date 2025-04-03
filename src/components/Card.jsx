import { useState,useEffect, useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { gencontext } from "../store/Context";



const Card = () =>{
    const [profile,setprofile] = useState([]);
    useEffect(() => {

const fetchProfiles =async ()=>{
  const res = await fetch(`https://randomuser.me/api/?results=15`)
 const data =await res.json();
 const fetchedProfile = data.results.map((profile)=>({
     name: `${profile.name.first} ${profile.name.last}`,
     description : profile.email,
     img: profile.picture.large,
     location:profile.location.country,
 }))
 setprofile(fetchedProfile)
 console.log(data)
 

};
fetchProfiles()
    },[]);
    const [selectedProfile,setselectedProfile] = useState(false)
     const {value,setValue} =useContext(gencontext)
    const filterProf = profile.filter((p)=>p.name.toLowerCase().includes(value.toLowerCase())||p.location.toLowerCase().includes(value.toLowerCase()));

    return <>
    {filterProf.map((e,idx)=>(
         <div onClick={()=> setselectedProfile(e)} className=" w-64 flex flex-col items-center py-3 px-4 gap-5">
        <div className="">
            <img className="rounded-full w-30 h-30" src={e.img} alt="" />
        </div>
        <div className="flex text-center flex-col items-center gap-4 px-2 py-2">
            <h2 className="font-bold text-2xl">{e.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab eum hic iusto id delectus! Quae, assumenda!</p>
            <h2 className="font-semibold">{e.location}</h2>
        </div>
        <button className="bg-blue-300 px-4 py-2 rounded-2xl cursor-pointer">Summary</button>
    </div>
    ))}

    {/* Pop up */}
       {selectedProfile && (
        <div className=" fixed inset-0 flex justify-center items-center">
          <div className="bg-blue-200 border border-gray-400 rounded-2xl w-full md:max-w-xl h-auto flex flex-col items-center justify-center px-40 py-16 relative ">
            <button className="absolute top-2 right-2" onClick={()=>setselectedProfile(null)}><FaWindowClose />
            </button>
            <div className="flex flex-col items-center text-center md:flex-row justify-center px-30 py-8 gap-6 ">
                <img className="w-32 h-32  md:w-48 md:h-48 rounded-full object-cover" src={selectedProfile.img} alt="" />
                <div className="flex flex-col gap-3 text-2xl text-black">
                <h2 className="font-bold">{selectedProfile.name}</h2>
                <p className="text-xl">{selectedProfile.description}</p>
                <h4>{selectedProfile.location}</h4>
                <h5>Trial</h5>
                </div>
            </div>
          </div>
        </div>
       )}
    </>
}

export default Card