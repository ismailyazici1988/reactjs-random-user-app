import {useState,useEffect} from "react";
import UserCards from "./UserCards";

const Users = () => {

    const [user, setUser] = useState("")
    //js
    const randomUser = () => {
        fetch("https://randomuser.me/api/").then((response)=> response.json()).then((data)=> setUser(data.results[0]))
    }

    useEffect(() => {
      randomUser()
    }, [])
    
// console.log(user)

const {name,location,email,phone,picture,dob} = user;

  return (
    <div className="my-5">
      <h1>Users</h1>
      <button className="btn btn-dark" onClick={randomUser}>Random User</button>
      <UserCards name={name} location={location} email={email} phone={phone} picture={picture} dob={dob}/>
    </div>
  );
};

export default Users;
