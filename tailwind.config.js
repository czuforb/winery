module.exports = {
  theme: {
    extend: {
      spacing: {
        "320": "320px",
        "500": "500px",
      },
      minHeight: {
        "320": "320px",
        "500": "500px",
      },
      backgroundColor: {
        backdrop: "hsla(120,100%,25%,0.6)",
      },
      fontFamily: {
        display: ["Playfair Display, serif"],
        body: ["Roboto, sans-serif"],
      },
      colors: {
        lgray: {
          100: "#FAFAF9",
          200: "#F2F2F0",
          300: "#EAEAE7",
          400: "#DBDBD6",
          500: "#CBCBC4",
          600: "#B7B7B0",
          700: "#7A7A76",
          800: "#5B5B58",
          900: "#3D3D3B",
        },
        szolo: {
          100: "#E8EEED",
          200: "#C5D5D2",
          300: "#A1BCB7",
          400: "#5B8A80",
          500: "#15584A",
          600: "#134F43",
          700: "#0D352C",
          800: "#092821",
          900: "#061A16",
        },
        homok: {
          100: "#F7F6F2",
          200: "#EAE9DF",
          300: "#DDDBCB",
          400: "#C4C0A5",
          500: "#AAA57E",
          600: "#999571",
          700: "#66634C",
          800: "#4D4A39",
          900: "#333226",
        },
        zold: {
          100: "#E9EBEB",
          200: "#C7CDCD",
          300: "#A5AFAF",
          400: "#627272",
          500: "#1F3636",
          600: "#1C3131",
          700: "#132020",
          800: "#0E1818",
          900: "#091010",
        },
      },
    },
  },
  variants: {
    backgroundColor: ["disabled", "even"],
  },
  plugins: [],
}
