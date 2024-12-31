/*
 * File: layout.tsx
 * Created Date: Sunday, December 29th 2024
 * Author: Aaron Hall
 * -----
 * Last Modified: Sunday, 29th December 2024 8:14:55 am
 * Modified By: Aaron Hall
 * -----
 * Copyright (c) 2020 - 2024
 */

import { JSX } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}