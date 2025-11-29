export interface Car {
    id: string;
    make: string;
    model: string;
    price: number;
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
    images: string[];
    description: string;
    features: string[];
    engineSize?: string;
    power?: string;
    sold?: boolean;
}

export const cars: Car[] = [
    {
        id: "mercedes-amg-gt-63-s",
        make: "Mercedes-Benz",
        model: "AMG GT 63 S E Performance",
        price: 229950,
        year: 2023,
        mileage: 12500,
        fuel: "Hybride (Benzine)",
        transmission: "Automaat",
        images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622199553659-3382c759495c?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "De Mercedes-AMG GT 63 S E Performance is het absolute topmodel van de GT 4-Door Coupé reeks. Met zijn gecombineerde vermogen van 843 pk is dit een van de krachtigste productieauto's die Mercedes-AMG ooit heeft gebouwd. Deze auto combineert brute kracht met ultieme luxe en comfort.",
        features: [
            "AMG Keramisch remsysteem",
            "Burmester High-End 3D Surround Sound",
            "Panoramadak",
            "Head-up Display",
            "360 graden camera",
            "AMG Performance stoelen",
            "Carbon interieur afwerking",
            "21 inch AMG velgen"
        ],
        engineSize: "4.0 V8",
        power: "843 PK",
        sold: false
    },
    {
        id: "audi-rs6-avant",
        make: "Audi",
        model: "RS6 Avant Performance",
        price: 189950,
        year: 2023,
        mileage: 8900,
        fuel: "Benzine",
        transmission: "Automaat",
        images: [
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1614200187524-dc411c82b141?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600712242805-5f78671d24da?q=80&w=2574&auto=format&fit=crop"
        ],
        description: "De ultieme stationwagen: de Audi RS6 Avant Performance. Een icoon dat prestaties combineert met dagelijkse bruikbaarheid. Voorzien van het RS Dynamic Package Plus en keramische remmen.",
        features: [
            "RS Dynamic Package Plus",
            "Keramische remmen",
            "Bang & Olufsen Advanced Sound System",
            "RS Sportuitlaat",
            "HD Matrix LED koplampen",
            "Valcona lederen bekleding",
            "Assistentiepakket Tour",
            "22 inch wielen"
        ],
        engineSize: "4.0 V8",
        power: "630 PK",
        sold: false
    },
    {
        id: "porsche-911-gt3",
        make: "Porsche",
        model: "911 GT3 (992)",
        price: 249950,
        year: 2022,
        mileage: 4500,
        fuel: "Benzine",
        transmission: "PDK",
        images: [
            "https://images.unsplash.com/photo-1611821064430-0d4104948c03?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1597687210387-e45e74d4da4f?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "Puur rijplezier. De Porsche 911 GT3 is ontwikkeld op het circuit voor de openbare weg. Deze uitvoering in Shark Blue is voorzien van het Clubsport pakket en keramische remmen.",
        features: [
            "Clubsport Pakket",
            "PCCB (Keramische remmen)",
            "Kuipstoelen volledig carbon",
            "Lift systeem vooras",
            "Sport Chrono Pakket",
            "Bose Surround Sound",
            "LED Matrix koplampen (PDLS+)",
            "Achterasbesturing"
        ],
        engineSize: "4.0 Boxer",
        power: "510 PK",
        sold: false
    },
    {
        id: "bmw-m5-cs",
        make: "BMW",
        model: "M5 CS",
        price: 195000,
        year: 2022,
        mileage: 15000,
        fuel: "Benzine",
        transmission: "Automaat",
        images: [
            "https://images.unsplash.com/photo-1623961990059-28356e22bc8e?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "De krachtigste BMW M5 ooit: de CS (Competition Sport). Lichter, sterker en exclusiever. Uitgevoerd in Frozen Deep Green Metallic met gouden accenten.",
        features: [
            "M Carbon keramische remmen",
            "M Carbon kuipstoelen",
            "Laserlight koplampen",
            "Harman Kardon Surround Sound",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "Gouden 20 inch velgen",
            "Alcantara stuurwiel"
        ],
        engineSize: "4.4 V8",
        power: "635 PK",
        sold: false
    },
    {
        id: "mercedes-g63-amg",
        make: "Mercedes-Benz",
        model: "G 63 AMG",
        price: 265000,
        year: 2023,
        mileage: 5000,
        fuel: "Benzine",
        transmission: "Automaat",
        images: [
            "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=2670&auto=format&fit=crop"
        ],
        description: "De iconische G-Klasse in zijn sterkste vorm. Deze G 63 AMG is voorzien van alle denkbare opties en uitgevoerd in Obsidiaanzwart metallic met een Designo interieur.",
        features: [
            "G Manufaktur pakket",
            "Burmester Surround Sound",
            "Schuifdak",
            "Standkachel",
            "Massage stoelen",
            "Night Pakket",
            "22 inch gesmede velgen",
            "Trekhaak"
        ],
        engineSize: "4.0 V8",
        power: "585 PK",
        sold: false
    },
    {
        id: "ferrari-roma",
        make: "Ferrari",
        model: "Roma",
        price: 285000,
        year: 2022,
        mileage: 3200,
        fuel: "Benzine",
        transmission: "F1-DCT",
        images: [
            "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=2668&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2662&auto=format&fit=crop"
        ],
        description: "La Nuova Dolce Vita. De Ferrari Roma is een toonbeeld van elegantie en prestaties. Uitgevoerd in Grigio Silverstone met een Bordeaux lederen interieur.",
        features: [
            "Magneride Dual Mode vering",
            "Carbon LED stuurwiel",
            "JBL Premium Audio",
            "Surround View Camera",
            "Volledig elektrisch verstelbare stoelen",
            "Scuderia Ferrari schilden",
            "20 inch gesmede velgen",
            "Apple CarPlay"
        ],
        engineSize: "3.9 V8",
        power: "620 PK",
        sold: false
    }
];
