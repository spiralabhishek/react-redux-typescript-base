export type LoginResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  accessToken: string;
  refreshToken: string;
};

export type District = {
  _id: string;
  isActive?: boolean;
  __v?: number;
  name: string;
};

export type Taluka = {
  _id: string;
  district?: string;
  isActive?: boolean;
  __v?: number;
  name: string;
};

export type UserResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  district: District;
  taluka: Taluka;
  village: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Category = {
  _id: string;
  name: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type PostResponse = {
  _id: string;
  category: Category;
  title: string;
  subtitle: string;
  yearOld: string;
  price: string;
  media: string[]; // Assuming media is an array of URLs or file paths
  description: string;
  postedBy: User;
  district: District;
  taluka: Taluka;
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};

export type NewsResponse = {
  _id: string;
  title: string;
  media: string;
  description: string;
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export type NotificationStatus = "sent" | "draft" | "failed";

export type NotificationResponse = {
  _id: string;
  title: string;
  status: NotificationStatus;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
};

export type PriceListResponse = {
  _id: string;
  name: string;
  date: string;
  yardName: string;
  items: {
    commodity: string;
    variety: string;
    minPrice: number;
    maxPrice: number;
  }[];
  createdAt: string;
  updatedAt: string;
};

export type DashboardStats = {
  totalUsers: number;
  totalDistricts: number;
  totalTalukas: number;
  totalPosts: number;
  totalNews: number;
  totalNotifications: number;
};
