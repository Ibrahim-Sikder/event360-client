import { NavLink } from "react-router-dom"
import { LayoutDashboard, ListChecks } from "lucide-react"
import { cn } from "../../lib/utils"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Sidebar = () => {
  return (
    <aside className="bg-black text-white col-span-2 overflow-y-scroll h-full sticky top-0 left-0">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
              {
                " text-white bg-[#0F172A] ": isActive,
              }
            )
          }
        >
          <LayoutDashboard />
          <h3 className="text-2xl font-bold ">Dashboard</h3>
        </NavLink>

        <Accordion className="dashboardAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Services
          </AccordionSummary>
          <NavLink
            to="/admin/add-service"
            className={({ isActive }) =>
              cn(
                "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                {
                  " text-white bg-[#0F172A] ": isActive,
                }
              )
            }
          >
            <ListChecks />
            <span>Add Service </span>
          </NavLink>
          <Typography>
            <NavLink
              to="/admin/service-list"
              className={({ isActive }) =>
                cn(
                  "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                  {
                    " text-white bg-[#0F172A] ": isActive,
                  }
                )
              }
            >
              <ListChecks />
              <span>Service List </span>
            </NavLink>
          </Typography>
        </Accordion>

        <Accordion className="dashboardAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Event Item Management
          </AccordionSummary>
          <NavLink
            to="/admin/add-event"
            className={({ isActive }) =>
              cn(
                "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                {
                  " text-white bg-[#0F172A] ": isActive,
                }
              )
            }
          >
            <ListChecks />
            <span>Add Event Items </span>
          </NavLink>
          <NavLink
            to="/admin/event-list"
            className={({ isActive }) =>
              cn(
                "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                {
                  " text-white bg-[#0F172A] ": isActive,
                }
              )
            }
          >
            <ListChecks />
            <span>Event Items List </span>
          </NavLink>
        </Accordion>
        <Accordion className="dashboardAccordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Recent Event
          </AccordionSummary>
          <NavLink
            to="/admin/add-recent-event"
            className={({ isActive }) =>
              cn(
                "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                {
                  " text-white bg-[#0F172A] ": isActive,
                }
              )
            }
          >
            <ListChecks />
            <span>Add Recent Event </span>
          </NavLink>
          <NavLink
            to="/admin/recent-event-list"
            className={({ isActive }) =>
              cn(
                "p-2 bg-[#01000D] rounded-md transition-all truncate flex items-center gap-2 lg:gap-5 ",
                {
                  " text-white bg-[#0F172A] ": isActive,
                }
              )
            }
          >
            <ListChecks />
            <span>Recent Event List </span>
          </NavLink>
        </Accordion>
      </nav>
    </aside>
  )
}

export default Sidebar
