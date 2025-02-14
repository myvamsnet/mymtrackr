import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import React from "react";
import SettingsEntry from "./__components/SettingsEntry";
import { BusinessData } from "@/types/business";

const Settings = async () => {
  try {
    const data = (await getUserBusiness()) as BusinessProfilePayload;

    if (!data?.data) {
      throw new Error("No business data found");
    }

    return <SettingsEntry businessData={data.data as BusinessData} />;
  } catch (error) {
    console.error("Error fetching business data:", error);

    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500">Failed to load business settings.</p>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    );
  }
};

export default Settings;
