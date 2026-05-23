'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { getThemeBootstrapScript } from '@/lib/theme';

export default function ThemeBootstrap() {
  useServerInsertedHTML(() => (
    <script
      id="theme-bootstrap"
      dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }}
    />
  ));

  return null;
}
