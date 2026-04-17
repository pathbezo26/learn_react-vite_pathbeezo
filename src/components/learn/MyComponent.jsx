const MyComponent = () => {
    const Me = {
        name: "Nguyen Tan Phat",
        age: 19
    }
    //fragment
    return (
        <>
            <h2>Chúc buổi sáng vui vẻ!</h2>
            <div>Tên của tôi là {JSON.stringify(Me)}</div>
            <div>{console.log("javascript")}</div>
            <div className="days"
                style={{ borderRadius: "15px" }
                }
            > Hôm nay là thứ 7</div>
        </>
    );
}
export default MyComponent;