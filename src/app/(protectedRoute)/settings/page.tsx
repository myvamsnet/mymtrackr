import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import React from "react";
import SettingsEntry from "./__components/SettingsEntry";
import { BusinessData } from "@/types/business";

const Settings = async () => {
  const data = (await getUserBusiness()) as BusinessProfilePayload;
  return <SettingsEntry businessData={(data.data as BusinessData) ?? null} />;
};

export default Settings;
