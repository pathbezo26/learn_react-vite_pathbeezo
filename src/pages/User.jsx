import UserForm from "../components/user/User.Form";
import UserTable from "../components/user/UserTable";
import { useState, useEffect } from 'react';
import { getAllUserAPI } from '../api/api.service';


const UserPage = () => {

    const [dataUser, setDataUSer] = useState("")

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await (getAllUserAPI());
        setDataUSer(res.data)
    }

    return (

        <div style={{ padding: "20px" }}>
            <UserForm
                loadUser={loadUser} />
            <UserTable
                dataUser={dataUser} />
        </div>
    )
}
export default UserPage;