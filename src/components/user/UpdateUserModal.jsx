import { Input, notification, Modal } from "antd"
import axios from "axios";
import { useEffect, useState } from "react";
import { createUserAPI, updateUserAPI } from "../../api/api.service";
import UserTable from "./UserTable";


const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    useEffect(() => {
        console.log("check props data: ", dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.email);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleCreateButton = async () => {
        try {
            const res = await updateUserAPI(id, fullName, phone)
            if (res && res.data) {
                notification.success({
                    message: "Update user",
                    description: "Cập nhật user thành công!"
                })
                resetAndCloseModal();
                await loadUser();
            }
        } catch (error) {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(error.response?.data?.message) || "Lỗi khi tạo user"
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setPhone("");
        setId("");
        setDataUpdate(null)
    }

    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={handleCreateButton}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>


                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal