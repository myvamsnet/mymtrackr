import React from "react";
import AdminLayout from "../../__components/AdminLayout";
import { ContentLists } from "../../features/content/ContentLists";
import { AddContentForm } from "../../features/content/AddContentForm";
import { AddFormMobile } from "../../features/content/AddFormMobile";
import { getAdminUser } from "@/app/actions/getAdminUser";

const ContentPage = async () => {
  const data = await getAdminUser();
  return (
    <AdminLayout>
      <AddFormMobile />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_358px]">
        <ContentLists />
        <AddContentForm />
      </div>
    </AdminLayout>
  );
};

export default ContentPage;
