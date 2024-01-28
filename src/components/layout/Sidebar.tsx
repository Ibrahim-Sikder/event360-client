import { NavLink } from "react-router-dom"
import { LayoutDashboard } from "lucide-react"
import { cn } from "../../lib/utils"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <aside className="bg-[#01000D] text-white col-span-2 h-screen sticky top-0 left-0">
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
          <span>Dashboard</span>
        </NavLink>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
         <b> Event Items Management </b>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          <span>Event Items List </span>
        </NavLink>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </nav>
    </aside>
  )
}

export default Sidebar
