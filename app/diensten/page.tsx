import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export default function DienstenPage() {
    return (
        <main>
            <PageHeader
                title="Onze Diensten"
                subtitle="Full Service Autobedrijf"
                image="https://images.unsplash.com/photo-1486262715619-01b8c22976f5?q=80&w=2600&auto=format&fit=crop"
            />
            <Services />
        </main>
    );
}
