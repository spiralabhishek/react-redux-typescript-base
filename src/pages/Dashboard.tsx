import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  Users,
  MapPin,
  FileText,
  Newspaper,
  Bell,
  TrendingUp,
} from "lucide-react";
import {
  districts,
  news,
  notifications,
  posts,
  talukas,
  users,
} from "@/lib/data";
import { useAppDispatch } from "@/reduxTool/store";
import { getDashboardAction } from "@/reduxTool/users/middleware";
import { useSelector } from "react-redux";
import { userSelector } from "@/reduxTool/users/usersSlice";
import { DashboardStats } from "@/types/ResponseType";

const Dashboard = () => {
  const activeUsers = users.filter((user) => user.status === "active").length;
  const activePercentage = Math.round((activeUsers / users.length) * 100);
  const dispatch = useAppDispatch();
  const dashboardStats = useSelector(userSelector).dashboard as DashboardStats;

  const statsCards = [
    {
      title: "Total Users",
      value: dashboardStats.totalUsers,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Total Districts",
      value: dashboardStats.totalDistricts,
      icon: MapPin,
      color: "bg-green-500",
    },
    {
      title: "Total Talukas",
      value: dashboardStats.totalTalukas,
      icon: MapPin,
      color: "bg-yellow-500",
    },
    {
      title: "Total Posts",
      value: dashboardStats.totalPosts,
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      title: "Total News",
      value: dashboardStats.totalUsers,
      icon: Newspaper,
      color: "bg-red-500",
    },
    {
      title: "Notifications",
      value: dashboardStats.totalNotifications,
      icon: Bell,
      color: "bg-indigo-500",
    },
  ];

  useEffect(() => {
    dispatch(getDashboardAction());
  }, []);
  return (
    <AdminLayout>
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your admin dashboard
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statsCards.map((card, i) => (
            <Card key={i} className="overflow-hidden hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <div className={`rounded-full ${card.color} p-1.5`}>
                  <card.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>
                User statistics and growth metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Active Users</span>
                    </div>
                    <span className="text-sm font-medium">
                      {activeUsers}/{users.length} ({activePercentage}%)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${activePercentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium">Recent User Activity</h4>
                  <div className="rounded-md border">
                    {users.slice(0, 5).map((user, i) => (
                      <div
                        key={user.id}
                        className={`flex items-center justify-between p-3 ${
                          i !== 0 ? "border-t" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`rounded-full h-2 w-2 ${
                              user.status === "active"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          />
                          <span className="ml-2 text-xs text-muted-foreground capitalize">
                            {user.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Content Overview</CardTitle>
              <CardDescription>
                Posts and news publication statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                    <h4 className="text-sm font-medium">Content Growth</h4>
                  </div>

                  <div className="flex items-end space-x-2 pt-2">
                    {[40, 60, 28, 80, 48, 50, 75].map((height, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className="w-9 rounded bg-primary/80"
                          style={{ height: `${height}px` }}
                        />
                        <span className="mt-1.5 text-xs text-muted-foreground">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium">Recent Publications</h4>
                  <div className="rounded-md border">
                    {news.slice(0, 3).map((item, i) => (
                      <div
                        key={item.id}
                        className={`flex items-center p-3 ${
                          i !== 0 ? "border-t" : ""
                        }`}
                      >
                        <div className="h-10 w-10 rounded bg-secondary/60 flex-shrink-0" />
                        <div className="ml-3 flex-1 overflow-hidden">
                          <p className="truncate text-sm font-medium">
                            {item.title}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>
                              Published{" "}
                              {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                            <span className="mx-1">•</span>
                            <span>By {item.author?.name || "Unknown"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
