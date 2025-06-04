import Sidebar from './Sidebar'
import Home from './Home'

const Dashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main>
                <Home />
            </main>
        </div>
    )
}

export default Dashboard