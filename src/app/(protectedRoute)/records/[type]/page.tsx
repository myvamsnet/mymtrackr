import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const RecordTypeLists = dynamic(() => import("./components/RecordTypeLists"));
const TypeLayout = dynamic(() => import("./components/TypeLayout"));
const RecordType = async () => {
  return (
    <TypeLayout>
      <RecordTypeLists />
    </TypeLayout>
  );
};

export default RecordType;
