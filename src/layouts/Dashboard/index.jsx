import { Outlet } from "react-router-dom"
import Header from "../../Components/Header"

const Dashboard = () => {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Dashboard