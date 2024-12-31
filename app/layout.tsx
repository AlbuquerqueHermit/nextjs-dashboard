/*
 * File: layout.tsx
 * Created Date: Friday, December 27th 2024
 * Author: Aaron Hall
 * -----
 * Last Modified: Sunday, 29th December 2024 8:59:01 am
 * Modified By: Aaron Hall
 * -----
 * Copyright (c) 2020 - 2024
 */

import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
import { JSX } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
