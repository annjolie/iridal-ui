import light from './light';
declare const untypedThemes: {
    light: any;
};
export declare type Theme = typeof light;
export declare type ThemeKey = keyof typeof untypedThemes;
export declare type ThemeColor = keyof Theme['colors'];
declare const themes: {
    [k in ThemeKey]: Theme;
};
export default themes;
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
}
