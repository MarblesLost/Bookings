import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'bearit-purple': {
          '50': '#faf4ff',
          '100': '#f3e5ff',
          '200': '#e9cfff',
          '300': '#d9aaff',
          '400': '#c173ff',
          '500': '#ab3eff',
          '600': '#9619ff',
          '700': '#820ae6',
          '800': '#660dad',
          '900': '#5b0d96',
          '950': '#3e0071',
        },
        'bearit-blue': {
          '50': '#e4f5ff',
          '100': '#cfebff',
          '200': '#a8d8ff',
          '300': '#74bcff',
          '400': '#3e8cff',
          '500': '#135cff',
          '600': '#0049ff',
          '700': '#0049ff',
          '800': '#0041e4',
          '900': '#002cb0',
          '950': '#00145a',
        },
        'bearit-pink': {
          '50': '#fff0fc',
          '100': '#ffe4fa',
          '200': '#ffc9f6',
          '300': '#ff9cee',
          '400': '#ff5fdf',
          '500': '#ff30cd',
          '600': '#f50dae',
          '700': '#e00095',
          '800': '#b00474',
          '900': '#920962',
          '950': '#5b0039',
        },
        'bearit-orange': {
          '50': '#fff3f1',
          '100': '#ffe5e1',
          '200': '#ffcec7',
          '300': '#ffaba0',
          '400': '#ff7866',
          '500': '#f8513b',
          '600': '#e5351d',
          '700': '#c12814',
          '800': '#a02414',
          '900': '#842518',
          '950': '#480f07',
        },
        'bearit-green': {
          '50': '#edfff8',
          '100': '#d5fff2',
          '200': '#aeffe4',
          '300': '#70ffd1',
          '400': '#2bfdb7',
          '500': '#00ea9c',
          '600': '#00c07b',
          '700': '#009664',
          '800': '#067551',
          '900': '#076045',
          '950': '#003725',
        },
        'bearit-gray': {
          '50': '#f5f7f9',
          '100': '#ebeff3',
          '200': '#d3dce4',
          '300': '#adbfcc',
          '400': '#809cb0',
          '500': '#608197',
          '600': '#4c677d',
          '700': '#3e5466',
          '800': '#364856',
          '900': '#313e49',
          '950': '#202831',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
