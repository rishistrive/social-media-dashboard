import React from "react";
import "chart.js/auto";
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Scatter,
  Bubble,
} from "react-chartjs-2";
import { IoStatsChart } from "react-icons/io5";
import { motion } from "framer-motion";
import ChartCard from "@/components/ChartCard";
import SocialMediaNavBar from "@/components/SocialMediaNavBar";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const Age = ["10-20", "20-30", "30-50", ">50"];
const data = [12, 19, 3, 5, 2, 3];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const value = context.raw;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
  },
};

export default function Dashboard() {
  const charts = [
    {
      title: "Monthly Engagement",
      chart: (
        <Bar
          data={{
            labels,
            datasets: [
              { label: "Engagement", data, backgroundColor: "#3B82F6" },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Monthly Reach",
      chart: (
        <Line
          data={{
            labels,
            datasets: [{ label: "Reach", data, borderColor: "#10B981" }],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Age Distribution %",
      chart: (
        <Pie
          data={{
            labels: Age,
            datasets: [
              {
                label: "Age",
                data: [20, 40, 30, 10],
                backgroundColor: ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"],
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Share Count Breakdown",
      chart: (
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                label: "Shared",
                data,
                backgroundColor: [
                  "#EF4444",
                  "#3B82F6",
                  "#10B981",
                  "#F59E0B",
                  "#8B5CF6",
                  "#EC4899",
                ],
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "User Behavior Profile",
      chart: (
        <Radar
          data={{
            labels,
            datasets: [
              {
                label: "Radar",
                data,
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                borderColor: "#22C55E",
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Activity Distribution",
      chart: (
        <PolarArea
          data={{
            labels,
            datasets: [
              {
                label: "Polar",
                data,
                backgroundColor: [
                  "#E879F9",
                  "#6366F1",
                  "#FACC15",
                  "#34D399",
                  "#F87171",
                ],
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Engagement vs Performance",
      chart: (
        <Scatter
          data={{
            datasets: [
              {
                label: "Scatter",
                data: [
                  { x: 4.5, y: 7 },
                  { x: 6, y: 5 },
                ],
                backgroundColor: "#4BC0C0",
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Reach Impact",
      chart: (
        <Bubble
          data={{
            datasets: [
              {
                label: "Bubble",
                data: [{ x: 5, y: 10, r: 10 }],
                backgroundColor: "#FF6384",
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Follower Growth",
      chart: (
        <Line
          data={{
            labels,
            datasets: [
              {
                label: "Followers",
                data: [10, 20, 15, 30, 25, 40],
                borderColor: "#8B5CF6",
              },
            ],
          }}
          options={options}
        />
      ),
    },
    {
      title: "Comment Volume",
      chart: (
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: "Comments",
                data: [5, 10, 8, 6, 12, 7],
                backgroundColor: "#F97316",
              },
            ],
          }}
          options={options}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black from-blue-50 to-purple-100 py-12 px-6">
      <motion.div
        className="flex w-full gap-2 justify-center items-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <IoStatsChart className="text-4xl text-white" />
        <h1 className="text-4xl font-extrabold text-white text-center">
          Social Media Analytics Dashboard
        </h1>
      </motion.div>
      <SocialMediaNavBar />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {charts.map((item, i) => (
          <ChartCard key={i} title={item.title} chart={item.chart} index={i} />
        ))}
      </div>
    </div>
  );
}
