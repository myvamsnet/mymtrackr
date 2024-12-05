import { CustomHeader } from "@/components/CustomHeader";
import { FilterAnalytics } from "./__components/FilterAnalytics";
import { AnalyticsLists } from "./__components/AnalyticsLists";
import ProtectedLayout from "../_components/layout/ProtectedLayout";

const Analytics: React.FC = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Analytics" />
      <div className="rounded-t-xl px-4 pt-4 pb-2 bg-off-white-400">
        <FilterAnalytics />
      </div>
      <AnalyticsLists />
    </main>
  );
};

export default Analytics;
