import { Outlet } from "react-router-dom"
import Header from "../../Components/Header"
import { Container, Main } from "./stylus"

const Dashboard = () => {
    return(
        <>
        <Container>
            <Header />
            <Main>
               <Outlet />  
            </Main>           
        </Container>        
        </>
    )
}

export default Dashboard