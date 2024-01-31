import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import AdminLayout from "../components/layout/AdminLayout"
import Dashboard from "../pages/Admin/Dashboard"
import AddEventItem from "../pages/Admin/AddEventItem"
import EventItemList from "../pages/Admin/AddEventItem/EventItemList"
import UpdateEvent from "../pages/Admin/AddEventItem/UpdateEvent"
import AddService from "../pages/Admin/Services/AddService"
import ServiceList from "../pages/Admin/Services/ServiceList"
import UpdateServices from "../pages/Admin/Services/UpdateServices"
import AddRecentEvent from "../pages/Admin/UpcomingEvent/AddRecentEvent"
import RecentEventList from "../pages/Admin/UpcomingEvent/RecentEventList"
import UpdateRecentEvent from "../pages/Admin/UpcomingEvent/UpdateRecentEvent"

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
      {
        path: "updateEvent/:id",
        element: <UpdateEvent />,
        loader: ({ params }) =>
          fetch(`https://event-360-liart.vercel.app/events/${params.id}`),
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "updatedservice/:id",
        element: <UpdateServices />,
        loader: ({ params }) =>
          fetch(`https://event-360-liart.vercel.app/services/${params.id}`),
      },
      {
        path: "add-recent-event",
        element: <AddRecentEvent />,
      },
      {
        path: "recent-event-list",
        element: <RecentEventList />,
      },
      {
        path: "update-recent-event/:id",
        element: <UpdateRecentEvent />,
        loader: ({ params }) =>
          fetch(
            `https://event-360-liart.vercel.app/recent-events/${params.id}`
          ),
      },
    ],
  },
])
