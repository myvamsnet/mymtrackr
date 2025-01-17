import AdminLayout from "@/app/(protectedRouteAdmin)/__components/AdminLayout";
import ReferalPage from "@/app/(protectedRouteAdmin)/features/users/referals";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const page = () => {
  return (
    <AdminLayout>
      <ReferalPage />
    </AdminLayout>
  );
};

export default page;
