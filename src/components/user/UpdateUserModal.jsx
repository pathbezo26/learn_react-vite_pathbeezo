import { Input, notification, Modal } from "antd"
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../api/api.service";
import UserTable from "./UserTable";


const UpdateUserModal = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCreateButton = async () => {
        try {
            const res = await createUserAPI(fullName, email, password, phone)
            if (res && res.data) {
                notification.success({
                    message: "Create user",
                    description: "Tạo user thành công!"
                })
                resetAndCloseModal();
                // await loadUser();
            }
        } catch (error) {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(error.response?.data?.message) || "Lỗi khi tạo user"
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setEmail("");
        setFullName("");
        setPassword("");
        setPhone("");
    }

    return (
        <Modal
            title="Update User"
            open={isModalOpen}
            onOk={handleCreateButton}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input
                        type="password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
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