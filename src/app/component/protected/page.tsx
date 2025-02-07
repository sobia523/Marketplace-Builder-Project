// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, ReactNode } from "react";

// // Explicit type for the props
// interface ProtectedRouteProps {
//   children: ReactNode;
// }

// const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//   const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (!isLoggedIn) {
//       router.push("/admin");
//     }
//   }, [router]);

//   return <>{children}</>;
// };

// export default ProtectedRoute;




"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

// Explicit type for the props
interface ProtectedRouteProps {
  children?: ReactNode; // Make children optional, with ReactNode type
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;


