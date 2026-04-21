import { Table, Tag } from 'antd';
import { getAllUserAPI } from '../../api/api.service';
import { useState, useEffect } from 'react';
const UserTable = () => {
    const [dataUser, setDataUSer] = useState("")

    useEffect(() => {
        console.log(">>> run useEffect 1")
        loadUser()
    }, [])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }

    ];

    const loadUser = async () => {
        const res = await (getAllUserAPI());
        setDataUSer(res.data)
    }
    console.log(">>> run render 0")
    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
}

export default UserTable