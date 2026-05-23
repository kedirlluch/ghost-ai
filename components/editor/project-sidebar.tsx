'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-16 bottom-0 w-64 z-40',
          'bg-slate-800 border-r border-slate-700/50',
          'flex flex-col',
          'transition-transform duration-200 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700/50">
          <h2 className="text-lg font-semibold text-slate-100">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs defaultValue="my-projects" className="flex flex-col flex-1">
            <TabsList className="w-full rounded-none border-b border-slate-700/50 bg-transparent p-0">
              <TabsTrigger
                value="my-projects"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <TabsContent value="my-projects" className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400">No projects yet</p>
              </div>
            </TabsContent>

            <TabsContent value="shared" className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400">No shared projects</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* New Project Button */}
        <div className="px-4 py-4 border-t border-slate-700/50">
          <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
