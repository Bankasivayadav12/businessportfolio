import { cookies } from "next/headers";
import { UserSession } from "@/types";

const COOKIE_NAME = "siva_session";

// In-memory user database
interface StoredUser extends UserSession {
  passwordHash: string; // "Admin@1234" or "User@1234"
}

declare global {
  // eslint-disable-next-line no-var
  var __usersDb: StoredUser[] | undefined;
}

if (!global.__usersDb) {
  global.__usersDb = [
    {
      id: "usr-admin-1",
      name: "Siva (Admin)",
      email: "admin@siva.dev",
      passwordHash: "Admin@1234",
      role: "ADMIN",
      purchasedProductIds: ["prod-1", "prod-2", "prod-3", "prod-5"],
      enrolledCourseIds: ["course-1", "course-2", "course-3"],
      courseProgress: { "course-1": 100, "course-3": 65 },
    },
    {
      id: "usr-demo-1",
      name: "Alex Developer",
      email: "user@siva.dev",
      passwordHash: "User@1234",
      role: "USER",
      purchasedProductIds: ["prod-1", "prod-5"],
      enrolledCourseIds: ["course-1", "course-3"],
      courseProgress: { "course-3": 45 },
    },
  ];
}

export async function getCurrentUser(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    const parsed = JSON.parse(sessionCookie.value) as { id: string; email: string };
    const user = global.__usersDb!.find((u) => u.id === parsed.id || u.email === parsed.email);
    if (!user) return null;

    // Return without sensitive password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...session } = user;
    return session;
  } catch {
    return null;
  }
}

export async function loginUser(email: string, password: string):Promise<{ success: boolean; user?: UserSession; error?: string }> {
  const user = global.__usersDb!.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user || user.passwordHash !== password) {
    return { success: false, error: "Invalid email or password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify({ id: user.id, email: user.email, role: user.role }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "lax",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...session } = user;
  return { success: true, user: session };
}

export async function registerUser(name: string, email: string, password: string): Promise<{ success: boolean; user?: UserSession; error?: string }> {
  const existing = global.__usersDb!.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return { success: false, error: "An account with this email already exists" };
  }

  const newUser: StoredUser = {
    id: `usr-${Date.now()}`,
    name,
    email,
    passwordHash: password,
    role: "USER",
    purchasedProductIds: [],
    enrolledCourseIds: [],
    courseProgress: {},
  };

  global.__usersDb!.push(newUser);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify({ id: newUser.id, email: newUser.email, role: newUser.role }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...session } = newUser;
  return { success: true, user: session };
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return { success: true };
}
