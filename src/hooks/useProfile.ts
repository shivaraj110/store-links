import axios from "axios"
import { useEffect, useState } from "react"
import { backendUrl } from "../config/url";
interface userDetails{
    fname:string,
lname :string,
    email: string,
    joinedOn:string
}

export const useProfile = () => {
const [loading,setLoading] = useState(true) 
const [details,setDetails] = useState<userDetails>()
    useEffect(() => {
        axios.get(backendUrl + "/api/v1/personal/profile", {
            headers: {
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setDetails(res.data.user)
            setLoading(false)
        })
    },[])
    return {loading,details}
}