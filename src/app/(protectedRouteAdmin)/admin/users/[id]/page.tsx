import AdminLayout from "@/app/(protectedRouteAdmin)/__components/AdminLayout";
import ReferalPage from "@/app/(protectedRouteAdmin)/features/users/referals";
import { getUserById } from "@/app/actions/getUserById";
import { User } from "@/types/auth";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getUserById(params.id);

  return (
    <AdminLayout>
      <ReferalPage user={data?.data as User} />
    </AdminLayout>
  );
};

export default page;
