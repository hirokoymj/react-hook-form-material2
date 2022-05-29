import { createTheme } from "@mui/material/styles";

export const commonTheme = createTheme({
  palette: {
    primary: {
      main: "#00008F",
    },
    secondary: {
      main: "#00ADC6",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "sans-serif",
      "Titillium Web",
      "Noto Sans JP",
      "Lato",
      "游ゴシック Medium",
      "游ゴシック体",
      "Yu Gothic Medium",
      "YuGothic",
      "ヒラギノ角ゴ ProN",
      "Hiragino Kaku Gothic ProN",
      "メイリオ",
      "Meiryo",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
    ].join(","),
  },
});
