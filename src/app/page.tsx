
import BoxContainer from "@/components/BoxContainer";
import Choose from "@/components/Choose";
import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Upcomingwebinar from "@/components/Upcomingwebinar"
import Teacher from "@/components/Teacher"
export default function Home() {
  return (
  <>
<main className=" min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
 
  <HeroSection/>
  <FeatureCourses/>
  <Choose/>
  <BoxContainer/>
  <Upcomingwebinar/>
  <Teacher/>
</main>
  </>
  );
}
