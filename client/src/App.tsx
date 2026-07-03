import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Audit from "./pages/Audit";
import Payment from "./pages/Payment";
import FinalPayment from "./pages/FinalPayment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancelled from "./pages/PaymentCancelled";
import Maintenance from "./pages/Maintenance";
import Onboarding from "./pages/Onboarding";
import AdminDashboard from "./pages/AdminDashboard";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/audit"} component={Audit} />
      <Route path={"/pay/:proposalId"} component={Payment} />
      <Route path={"/deposit/:proposalId"} component={Payment} />
      <Route path={"/pay/standard"} component={Payment} />
      <Route path={"/final-payment/:projectId"} component={FinalPayment} />
      <Route path={"/maintenance"} component={Maintenance} />
      <Route path={"/onboarding/:clientId"} component={Onboarding} />
      <Route path={"/success"} component={PaymentSuccess} />
      <Route path={"/cancelled"} component={PaymentCancelled} />
      <Route path={"/payment-success"} component={PaymentSuccess} />
      <Route path={"/payment-cancelled"} component={PaymentCancelled} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
