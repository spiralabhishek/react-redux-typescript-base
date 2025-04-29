import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./reduxTool/store";
const queryClient = new QueryClient();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* <Loader /> */}
            <BrowserRouter>
              <AuthProvider>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AuthProvider>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
