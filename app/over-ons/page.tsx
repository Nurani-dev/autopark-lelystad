import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";

export default function OverOnsPage() {
    return (
        <main>
            <PageHeader
                title="Over Ons"
                subtitle="Autopark Lelystad"
                image="https://images.unsplash.com/photo-1562141961-b5d1855d7f30?q=80&w=2568&auto=format&fit=crop"
            />
            <About />
        </main>
    );
}
