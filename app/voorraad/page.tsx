import { PageHeader } from "@/components/PageHeader";
import { FeaturedCars } from "@/components/FeaturedCars";

export default function VoorraadPage() {
    return (
        <main>
            <PageHeader
                title="Onze Voorraad"
                subtitle="Exclusieve Occasions"
                image="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop"
            />
            <FeaturedCars />
        </main>
    );
}
