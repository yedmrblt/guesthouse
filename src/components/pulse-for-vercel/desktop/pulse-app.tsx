"use client";

import { RefreshCcw, LogOutIcon, PowerIcon, GitBranchIcon } from "lucide-react";

interface Deployment {
  title: string;
  project: string;
  branch: string;
  timestamp: string;
  status: "building" | "ready" | "error";
}

export default function PulseApp() {
  const deployments: Deployment[] = [
    {
      title: "feat: add status filtering",
      project: "pulse-web",
      branch: "main",
      timestamp: "Building...",
      status: "building",
    },
    {
      title: "fix: resolve sync issue",
      project: "pulse-web",
      branch: "main",
      timestamp: "10 minutes ago",
      status: "ready",
    },
    {
      title: "chore: update packages",
      project: "side-project",
      branch: "main",
      timestamp: "2 hours ago",
      status: "error",
    },
    {
      title: "feat: improve UI clarity",
      project: "pulse-web",
      branch: "main",
      timestamp: "5 days ago",
      status: "ready",
    },
    {
      title: "fix: correct date format",
      project: "side-project",
      branch: "main",
      timestamp: "6 days ago",
      status: "ready",
    },
  ];

  return (
    <div className="absolute top-24 right-0 z-10 flex h-[420px] w-[350px] items-center justify-center p-4 sm:right-28">
      <div className="relative w-full max-w-2xl rounded-xl bg-zinc-900 p-4 text-gray-300 shadow-2xl">
        <div className="absolute -top-3 left-1/2 h-0 w-0 -translate-x-1/2 border-r-[12px] border-b-[12px] border-l-[12px] border-r-transparent border-b-zinc-900 border-l-transparent"></div>
        <div className="mb-6 flex items-center justify-between text-zinc-500">
          <div className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4" />
            <h2 className="text-sm font-medium text-zinc-500">
              Last 5 deployments
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <LogOutIcon className="h-4 w-4" />
            <PowerIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-2">
          {deployments.map((deployment, index) => (
            <div
              key={index}
              className="-mx-3 cursor-pointer rounded-md border-b border-zinc-800 px-3 py-2 text-sm last:border-0 hover:bg-zinc-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-4 w-4 rounded-full ${deployment.status === "ready" && "bg-[#50E3C2]"} ${deployment.status === "building" && "animate-pulse bg-[#F5A623]"} ${deployment.status === "error" && "bg-[#FF0000]"}`}
                  />
                  <span className="font-semibold">{deployment.title}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <GitBranchIcon className="h-4 w-4" />
                  <span>{deployment.branch}</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-zinc-500">{deployment.project}</span>
                <span className="text-zinc-500">{deployment.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
