import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import AdminLayout from "../components/layout/AdminLayout"
import Dashboard from "../pages/Admin/Dashboard"
import AddEventItem from "../pages/Admin/AddEventItem"
import EventItemList from "../pages/Admin/AddEventItem/EventItemList"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {},
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-event",
        element: <AddEventItem />,
      },
      {
        path: "event-list",
        element: <EventItemList />,
      },
    ],
  },
])
