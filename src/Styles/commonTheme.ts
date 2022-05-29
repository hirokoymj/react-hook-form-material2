import { createTheme } from "@mui/material/styles";

export const commonTheme = createTheme({
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
