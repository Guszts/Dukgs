import { createElement } from "react";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Audit from "./pages/Audit";
import Payment from "./pages/Payment";
import FinalPayment from "./pages/FinalPayment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Maintenance from "./pages/Maintenance";
import Onboarding from "./pages/Onboarding";
import OfferScope from "./pages/OfferScope";
import LeadCRM from "./pages/LeadCRM";
import AdminDashboard from "./pages/AdminDashboard";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const h = createElement;

export default function App() {
  return h(
    Switch,
    null,
    h(Route, { path: "/", component: Home }),
    h(Route, { path: "/audit", component: Audit }),
    h(Route, { path: "/pay/:proposalId", component: Payment }),
    h(Route, { path: "/deposit/:proposalId", component: Payment }),
    h(Route, { path: "/final-payment/:projectId", component: FinalPayment }),
    h(Route, { path: "/maintenance", component: Maintenance }),
    h(Route, { path: "/onboarding/:clientId", component: Onboarding }),
    h(Route, { path: "/scope", component: OfferScope }),
    h(Route, { path: "/crm", component: LeadCRM }),
    h(Route, { path: "/success", component: PaymentSuccess }),
    h(Route, { path: "/payment-success", component: PaymentSuccess }),
    h(Route, { path: "/terms", component: LegalPage }),
    h(Route, { path: "/privacy", component: LegalPage }),
    h(Route, { path: "/cookies", component: LegalPage }),
    h(Route, { path: "/refunds", component: LegalPage }),
    h(Route, { path: "/admin", component: AdminDashboard }),
    h(Route, { component: NotFound })
  );
}
