import Bar from "../pages/bar";
import Calendar from "../pages/calendar";
import Contacts from "../pages/contacts";
import Dashboard from "../pages/dashboard";
import FAQ from "../pages/faq";
import Form from "../pages/form";
import Geography from "../pages/geography";
import Invoices from "../pages/invoices";
import Line from "../pages/line";
import Pie from "../pages/pie";
import Team from "../pages/team";
import { ErrorPage } from "../components/Utiliities";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/team", element: <Team /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/invoices", element: <Invoices /> },
  { path: "/form", element: <Form /> },
  { path: "/bar", element: <Bar /> },
  { path: "/pie", element: <Pie /> },
  { path: "/line", element: <Line /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/geography", element: <Geography /> },
  { path: "*", element: <ErrorPage /> },
];
