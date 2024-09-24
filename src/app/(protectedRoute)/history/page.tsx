import React from "react";
import { FilterHistory } from "./__components/FilterHistory";
import { RecordHeader } from "../_components/common/records/RecordHeader";
import { HistoryLists } from "./__components/HistoryLists";

const History = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <RecordHeader title={`History`} />
      <section className="bg-off-white-300 relative h-screen">
        <FilterHistory />
        <HistoryLists />
      </section>
    </main>
  );
};

export default History;
