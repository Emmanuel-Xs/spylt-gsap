import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Outlet } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Navbar } from "@/components/nav-bar";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
