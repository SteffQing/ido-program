import FAQ from "@/views/FAQ";
import Hero from "@/views/Hero";
import HowTo from "@/views/HowTo";
import Launch from "@/views/Launch";
import WhyUs from "@/views/WhyUs";

export default function Home() {
	return <main className="pt-14">
		<Hero />
		<WhyUs />
		<HowTo />
		<FAQ />
		<Launch />
	</main>;
}
