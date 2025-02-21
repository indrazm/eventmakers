import React from "react";

export const SectionEventsSkeleton = () => {
  return (
    <section className="space-y-4">
      <h1>Popular Events</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex gap-3">
          <div className="w-20 h-24 bg-indigo-100 rounded-lg" />
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-8 animate-pulse rounded-lg" />
            <div className="w-12 bg-slate-100 h-4 animate-pulse rounded-lg" />
            <div className="w-24 bg-slate-100 h-4 animate-pulse rounded-lg" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-20 h-24 bg-indigo-100 rounded-lg" />
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-8 animate-pulse rounded-lg" />
            <div className="w-12 bg-slate-100 h-4 animate-pulse rounded-lg" />
            <div className="w-24 bg-slate-100 h-4 animate-pulse rounded-lg" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-20 h-24 bg-indigo-100 rounded-lg" />
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-8 animate-pulse rounded-lg" />
            <div className="w-12 bg-slate-100 h-4 animate-pulse rounded-lg" />
            <div className="w-24 bg-slate-100 h-4 animate-pulse rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
