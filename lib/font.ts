import localFont from "next/font/local";

export const pretendard = localFont({ src: "./fonts/PretendardVariable.woff2" });

export const maruburi = localFont({
  src: [
    {
      path: "./fonts/maruburi/MaruBuri-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/maruburi/MaruBuri-SemiBold.woff2",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "./fonts/maruburi/MaruBuri-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/maruburi/MaruBuri-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/maruburi/MaruBuri-ExtraLight.woff2",
      weight: "200",
      style: "extra-light",
    },
  ],
});
