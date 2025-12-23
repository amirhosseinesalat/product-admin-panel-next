import { useEffect } from "react";
import { useRouter } from "next/router";
import Dashboard from "../features/Dashboard";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/signin");
    }
  }, [router]);

  return <Dashboard />;
}
