"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data - replace this with your actual data
const userData = [
  { date: "Jan 1", dailyUsers: 100, activeUsers: 80, pendingUsers: 20 },
  { date: "Jan 2", dailyUsers: 120, activeUsers: 90, pendingUsers: 30 },
  { date: "Jan 3", dailyUsers: 110, activeUsers: 85, pendingUsers: 25 },
  { date: "Jan 4", dailyUsers: 130, activeUsers: 100, pendingUsers: 30 },
  { date: "Jan 5", dailyUsers: 140, activeUsers: 110, pendingUsers: 30 },
  { date: "Jan 6", dailyUsers: 125, activeUsers: 95, pendingUsers: 30 },
  { date: "Jan 7", dailyUsers: 135, activeUsers: 105, pendingUsers: 30 },
];

export const ChartComp = () => {
  return (
    <section className=" bg-off-white-300 w-full">
      <ChartContainer
        config={{
          dailyUsers: {
            label: "Daily Users",
            color: "hsl(var(--chart-1))",
          },
          activeUsers: {
            label: "Active Users",
            color: "hsl(var(--chart-2))",
          },
          pendingUsers: {
            label: "Pending Users",
            color: "hsl(var(--chart-3))",
          },
        }}
        className="h-[400px] w-full"
      >
        <BarChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="dailyUsers"
            fill="var(--color-dailyUsers)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="activeUsers"
            fill="var(--color-activeUsers)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="pendingUsers"
            fill="var(--color-pendingUsers)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </section>
  );
};
