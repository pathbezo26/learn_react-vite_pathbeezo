import { Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from "react";
import { getAllUserAPI } from '../../api/api.service';
import UpdateUserModal from './UpdateUserModal';
const UserTable = (props) => {
    const { dataUser, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' > {record._id} </a >
                )
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                    />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        }
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
        </>
    )
}

export default UserTable