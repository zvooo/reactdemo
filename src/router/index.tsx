import { Navigate, useRoutes } from 'react-router-dom'
import CardList from '../Components/CardList'
import Login from '../Components/Login'
import Layout from '../Layout/'



function RouterList() {
    const routers = [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/index',
            element: <Layout />,
            children: [
                {
                    path: 'list',
                    element: <CardList />
                }
            ]

        },
        {
            path: '/',
            element: <Navigate to="/index" />
        }
    ]
    return useRoutes(routers)
}



export default RouterList;