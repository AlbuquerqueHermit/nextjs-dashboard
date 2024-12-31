/*
 * File: acme-logo.tsx
 * Created Date: Friday, December 27th 2024
 * Author: Aaron Hall
 * -----
 * Last Modified: Sunday, 29th December 2024 8:46:26 am
 * Modified By: Aaron Hall
 * -----
 * Copyright (c) 2020 - 2024
 */

import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
