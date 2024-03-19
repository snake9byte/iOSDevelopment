export const mergeTheme = (newTheme, baseTheme) => {
  let customTheme = {};
  const allKeys = [...Object.keys(newTheme), ...Object.keys(baseTheme)];

  allKeys.forEach(key => {
    customTheme[key] = {...baseTheme[key], ...newTheme[key]};
  });

  customTheme.name = newTheme.name ? newTheme.name : baseTheme.name ? baseTheme.name : "newTheme";
  
  return customTheme;
}