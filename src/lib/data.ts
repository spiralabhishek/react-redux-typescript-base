import {
  District,
  NotificationResponse,
  Taluka,
  UserResponse,
} from "@/types/ResponseType";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  districtId: string | null;
  talukaId: string | null;
  district?: District;
  taluka?: Taluka;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  _id: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  id: string;
  title: string;
  subtitle?: string;
  price?: number;
  yearOld?: number;
  content: string;
  authorId: string;
  categoryId?: string;
  category?: Category;
  imageUrls?: string[];
  author?: User;
  createdAt: Date;
  updatedAt: Date;
};

export type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  authorId: string;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  sent: boolean;
  sentAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export const districts: District[] = [
  {
    _id: "1",
    name: "Ahmedabad",
    isActive: true,
    __v: 0,
  },
  {
    _id: "2",
    name: "Surat",
    isActive: true,
    __v: 0,
  },
  {
    _id: "3",
    name: "Vadodara",
    isActive: true,
    __v: 0,
  },
  {
    _id: "4",
    name: "Rajkot",
    isActive: true,
    __v: 0,
  },
  {
    _id: "5",
    name: "Bhavnagar",
    isActive: true,
    __v: 0,
  },
];

export const talukas: Taluka[] = [
  {
    _id: "1",
    name: "Ahmedabad City",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "2",
    name: "Daskroi",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "3",
    name: "Surat City",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "4",
    name: "Chorasi",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "5",
    name: "Vadodara City",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "6",
    name: "Padra",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "7",
    name: "Rajkot City",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "8",
    name: "Lodhika",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "9",
    name: "Bhavnagar City",
    district: "1",
    isActive: true,
    __v: 0,
  },
  {
    _id: "10",
    name: "Ghogha",
    district: "1",
    isActive: true,
    __v: 0,
  },
];

export const users: User[] = Array.from({ length: 30 }, (_, i) => {
  const id = (i + 1).toString();
  const districtId = Math.floor(Math.random() * 5 + 1).toString();
  const district = districts.find((d) => d._id === districtId);
  const talukaOptions = talukas.filter((t) => t._id === districtId);
  const talukaId =
    talukaOptions[Math.floor(Math.random() * talukaOptions.length)]._id;
  const taluka = talukas.find((t) => t._id === talukaId);

  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
    role: i === 0 ? "admin" : "user",
    status: Math.random() > 0.2 ? "active" : "inactive",
    districtId,
    talukaId,
    district,
    taluka,
    createdAt: new Date(2023, 0, parseInt(id)),
    updatedAt: new Date(2023, 0, parseInt(id)),
  };
});

export const categories: Category[] = [
  {
    _id: "1",
    name: "Electronics",
    isActive: true,
    createdAt: new Date(2023, 0, 1),
    updatedAt: new Date(2023, 0, 1),
  },
  {
    _id: "2",
    name: "Furniture",
    isActive: true,
    createdAt: new Date(2023, 0, 2),
    updatedAt: new Date(2023, 0, 2),
  },
  {
    _id: "3",
    name: "Clothing",
    isActive: true,
    createdAt: new Date(2023, 0, 3),
    updatedAt: new Date(2023, 0, 3),
  },
  {
    _id: "4",
    name: "Vehicles",
    isActive: true,
    createdAt: new Date(2023, 0, 4),
    updatedAt: new Date(2023, 0, 4),
  },
  {
    _id: "5",
    name: "Books",
    isActive: true,
    createdAt: new Date(2023, 0, 5),
    updatedAt: new Date(2023, 0, 5),
  },
];

export const posts: Post[] = Array.from({ length: 20 }, (_, i) => {
  const id = (i + 1).toString();
  const authorId = Math.floor(Math.random() * 30 + 1).toString();
  const author = users.find((u) => u.id === authorId);
  const categoryId = Math.floor(Math.random() * 5 + 1).toString();
  const category = categories.find((c) => c._id === categoryId);

  return {
    id,
    title: `Post ${id}`,
    subtitle: i % 2 === 0 ? `Subtitle for post ${id}` : undefined,
    price: i % 3 === 0 ? i * 100 : undefined,
    yearOld: i % 4 === 0 ? i : undefined,
    content: `This is the content for post ${id}. It contains some text about various topics.`,
    authorId,
    categoryId,
    category,
    imageUrls:
      i % 2 === 0 ? [`https://picsum.photos/seed/${id}/300/200`] : undefined,
    author,
    createdAt: new Date(2023, 1, parseInt(id)),
    updatedAt: new Date(2023, 1, parseInt(id)),
  };
});

export const news: News[] = Array.from({ length: 15 }, (_, i) => {
  const id = (i + 1).toString();
  const authorId = Math.floor(Math.random() * 30 + 1).toString();
  const author = users.find((u) => u.id === authorId);

  return {
    id,
    title: `News ${id}`,
    content: `This is news item ${id} with important information about recent events.`,
    imageUrl: `https://picsum.photos/seed/${id}/300/200`,
    authorId,
    author,
    createdAt: new Date(2023, 2, parseInt(id)),
    updatedAt: new Date(2023, 2, parseInt(id)),
  };
});

export const notifications: Notification[] = Array.from(
  { length: 10 },
  (_, i) => {
    const id = (i + 1).toString();
    const sent = i < 5;

    return {
      id,
      title: `Notification ${id}`,
      message: `This is an important notification message ${id} for all users.`,
      sent,
      sentAt: sent ? new Date(2023, 3, parseInt(id)) : null,
      createdAt: new Date(2023, 3, parseInt(id)),
      updatedAt: new Date(2023, 3, parseInt(id)),
    };
  }
);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDistricts() {
  await delay(500);
  return [...districts];
}

export async function fetchTalukas(talukaList: Taluka[], districtId?: string) {
  await delay(500);
  if (districtId) {
    return talukaList.filter((t) => t.district === districtId);
  }
  return talukaList;
}

export async function fetchUsers(
  userList: UserResponse[],
  page = 1,
  limit = 10,
  filters: any = {}
) {
  await delay(800);

  let filteredUsers = [...userList];

  if (filters.status) {
    filteredUsers = filteredUsers.filter((u) => u.isActive === filters.status);
  }

  if (filters.districtId) {
    filteredUsers = filteredUsers.filter(
      (u) => u.district === filters.districtId
    );
  }

  if (filters.search) {
    const search = filters.search.toLowerCase();
    filteredUsers = filteredUsers.filter(
      (u) =>
        u.firstName.toLowerCase().includes(search) ||
        u.lastName.toLowerCase().includes(search)
    );
  }

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    data: paginatedUsers,
    meta: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
  };
}

export async function fetchPosts(
  postList,
  page = 1,
  limit = 10,
  filters: any = {}
) {
  await delay(600);
  console.log("fetchPosts called with:", { page, limit, filters });

  let filteredPosts = [...postList];

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(search) ||
        p.content.toLowerCase().includes(search)
    );
  }

  if (filters?.categoryId) {
    console.log("Filtering by category:", filters.categoryId);
    filteredPosts = filteredPosts.filter(
      (p) => p.categoryId === filters.categoryId
    );
  }

  if (filters?.districtId) {
    console.log("Filtering by district:", filters.districtId);
    filteredPosts = filteredPosts.filter((p) => {
      const author = users.find((u) => u.id === p.authorId);
      return author?.districtId === filters.districtId;
    });
  }

  if (filters?.talukaId && filters.talukaId !== "_all") {
    console.log("Filtering by taluka:", filters.talukaId);
    filteredPosts = filteredPosts.filter((p) => {
      const author = users.find((u) => u.id === p.authorId);
      return author?.talukaId === filters.talukaId;
    });
  }

  const totalItems = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedPosts = filteredPosts.slice(startIndex, endIndex).map((p) => ({
    ...p,
    author: users.find((u) => u.id === p.authorId),
  }));

  console.log("Filtered posts:", {
    total: filteredPosts.length,
    paginated: paginatedPosts.length,
    page,
    totalPages,
  });

  return {
    data: paginatedPosts,
    meta: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
  };
}

export async function fetchNews(
  newsList,
  page = 1,
  limit = 10,
  filters: any = {}
) {
  await delay(700);

  let filteredNews = [...newsList];

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filteredNews = filteredNews.filter(
      (n) =>
        n.title.toLowerCase().includes(search) ||
        n.content.toLowerCase().includes(search)
    );
  }

  const totalItems = filteredNews.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedNews = filteredNews.slice(startIndex, endIndex).map((n) => ({
    ...n,
    author: users.find((u) => u.id === n.authorId),
  }));

  return {
    data: paginatedNews,
    meta: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
  };
}

export async function fetchNotifications(
  notificationList: NotificationResponse[],
  page = 1,
  limit = 10,
  filters: any = {}
) {
  await delay(500);

  let filteredNotifications = [...notificationList];

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filteredNotifications = filteredNotifications.filter(
      (n) =>
        n.title.toLowerCase().includes(search) ||
        n.status.toLowerCase().includes(search)
    );
  }

  const totalItems = filteredNotifications.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedNotifications = filteredNotifications.slice(
    startIndex,
    endIndex
  );

  return {
    data: paginatedNotifications,
    meta: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
  };
}

export async function fetchCategories() {
  await delay(500);
  return [...categories];
}
