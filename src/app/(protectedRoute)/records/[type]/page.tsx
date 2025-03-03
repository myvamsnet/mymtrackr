import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const RecordTypeLists = dynamic(() => import("./components/RecordTypeLists"));
const TypeLayout = dynamic(() => import("./components/TypeLayout"));
const RecordType = async ({ params }: RecordTypeProps) => {
  const { type } = await params;
  return (
    <TypeLayout route={type}>
      <RecordTypeLists />
    </TypeLayout>
  );
};

export default RecordType;
interface RecordTypeProps {
  params: Promise<{
    type: string;
  }>;
}
