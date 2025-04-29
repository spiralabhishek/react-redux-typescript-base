import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Loader2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("test1456@gmail.com");
  const [password, setPassword] = useState("password23");
  const { login, isAuthenticated, isLoading } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      await login(email, password);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
      <div className="animate-fade-in w-full max-w-md">
        <Card className="form-card">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <BarChart3 className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test1456@gmail.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          <span className="mr-1">Demo credentials:</span>
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            admin@example.com / password
          </code>
        </p>
      </div>
    </div>
  );
};

export default Login;
