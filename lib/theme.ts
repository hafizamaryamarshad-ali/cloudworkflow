export type ThemeMode = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'EaseWorkflow-theme';
export const DEFAULT_THEME: ThemeMode = 'light';

export function resolveStoredTheme(value: string | null | undefined): ThemeMode {
  return value === 'light' ? 'light' : 'dark';
}

export function applyTheme(theme: ThemeMode) {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.classList.toggle('dark', isDark);

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function getThemeBootstrapScript() {
  return `
    (function() {
      try {
        var themeKey = '${THEME_STORAGE_KEY}';
        var savedTheme = localStorage.getItem(themeKey);
        var theme = savedTheme === 'light' || savedTheme === 'dark'
          ? savedTheme
          : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        var root = document.documentElement;
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        root.classList.toggle('dark', theme === 'dark');
      } catch (error) {
        var fallbackRoot = document.documentElement;
        fallbackRoot.dataset.theme = '${DEFAULT_THEME}';
        fallbackRoot.style.colorScheme = '${DEFAULT_THEME}';
        fallbackRoot.classList.toggle('dark', '${DEFAULT_THEME}' === 'dark');
      }
    })();
  `;
}
