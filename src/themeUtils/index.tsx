const THEME_KEY = 'appTheme';

export const saveThemePreference = (theme: 'light' | 'dark') => {
  localStorage.setItem(THEME_KEY, theme);
};

export const getThemePreference = (): 'light' | 'dark' => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === 'dark' ? 'dark' : 'light';
};