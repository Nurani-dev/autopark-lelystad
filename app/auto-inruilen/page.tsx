"use client";

import { useState } from "react";
import { Car, Camera, Send, ChevronRight, Check, Upload, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TradeInAnimation } from "@/components/TradeInAnimation";

// Mock Stock Data for Inruil Selection
const MOCK_STOCK = [
    "BMW 3-serie M-Sport (2023) - € 45.950",
    "Audi RS6 Avant (2021) - € 112.500",
    "Mercedes-Benz G63 AMG (2022) - € 215.000",
    "Porsche 911 GT3 (2023) - € 245.000",
    "Volkswagen Golf R (2024) - € 52.000",
];

export default function AutoInruilenPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: "inruil", // 'inruil' or 'verkoop'
        targetCar: "",
        kenteken: "",
        kilometerstand: "",
        transmissie: "",
        onderhoud: "",
        laatsteBeurtKm: "",
        opmerkingen: "",
        naam: "",
        telefoon: "",
        email: "",
    });
    const [files, setFiles] = useState<File[]>([]);
    const [fileError, setFileError] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);

            // Validation
            if (files.length + newFiles.length > 10) {
                setFileError("Maximaal 10 foto's toegestaan.");
                return;
            }

            const invalidFiles = newFiles.filter(file => file.size > 8 * 1024 * 1024);
            if (invalidFiles.length > 0) {
                setFileError("Foto's mogen maximaal 8 MB per stuk zijn.");
                return;
            }

            setFileError(null);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const validateStep2 = () => {
        const newErrors: Record<string, boolean> = {};
        let isValid = true;

        const requiredFields = ['kenteken', 'kilometerstand', 'transmissie', 'onderhoud', 'laatsteBeurtKm'];

        requiredFields.forEach(field => {
            if (!formData[field as keyof typeof formData]) {
                newErrors[field] = true;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const validateStep3 = () => {
        const newErrors: Record<string, boolean> = {};
        let isValid = true;

        // Validate Photos
        if (files.length === 0) {
            setFileError("Minimaal 1 foto is verplicht.");
            isValid = false;
        } else {
            setFileError(null); // Clear file error if files are present
        }

        // Validate Contact Fields
        if (!formData.naam.trim()) {
            newErrors.naam = true;
            isValid = false;
        }

        // Validate Phone (Dutch format or general international, min 10 digits)
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!formData.telefoon.trim() || !phoneRegex.test(formData.telefoon.replace(/\s/g, '')) || formData.telefoon.replace(/\D/g, '').length < 10) {
            newErrors.telefoon = true;
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = true;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateStep3()) {
            // Handle submission logic here (e.g., API call)
            console.log("Form submitted:", { ...formData, files });
            alert("Aanvraag verstuurd! (Demo)");
        }
    };

    const nextStep = () => {
        if (step === 2) {
            if (!validateStep2()) return;
        }
        setStep((prev) => prev + 1);
    };
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <main className="pt-24 min-h-screen bg-black">
            <section className="py-12 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="neon-glow top-[10%] left-1/2 -translate-x-1/2 opacity-30" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* New Header Section */}
                        <div className="text-center mb-8">
                            <TradeInAnimation />
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tight">
                                Auto <span className="text-gold-gradient">Inruilen</span>
                            </h1>
                            <p className="text-xl text-gray-400">Ontvang een passend voorstel</p>
                        </div>

                        {/* Progress Steps */}
                        <div className="flex items-center justify-center mb-8 space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div
                                        className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2",
                                            step >= i
                                                ? "bg-gold border-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                                : "bg-transparent border-white/20 text-gray-500"
                                        )}
                                    >
                                        {step > i ? <Check className="w-5 h-5" /> : i}
                                    </div>
                                    {i < 3 && (
                                        <div
                                            className={cn(
                                                "w-12 h-0.5 mx-2 transition-all duration-300",
                                                step > i ? "bg-gold" : "bg-white/10"
                                            )}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {/* STEP 1: CHOICE */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Wat wilt u doen?</h2>
                                            <p className="text-gray-400">Kies of u uw auto wilt inruilen op een nieuwe auto of direct wilt verkopen.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <button
                                                onClick={() => setFormData({ ...formData, type: "inruil" })}
                                                className={cn(
                                                    "p-8 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden",
                                                    formData.type === "inruil"
                                                        ? "border-gold bg-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                                                        : "border-white/10 hover:border-gold/50 bg-black/40"
                                                )}
                                            >
                                                <div className="relative z-10">
                                                    <Car className={cn("w-10 h-10 mb-4 transition-colors", formData.type === "inruil" ? "text-gold" : "text-gray-400 group-hover:text-gold")} />
                                                    <h3 className="text-xl font-bold text-white mb-2">Auto Inruilen</h3>
                                                    <p className="text-sm text-gray-400">Ik wil mijn huidige auto inruilen op een auto uit jullie voorraad.</p>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => setFormData({ ...formData, type: "verkoop" })}
                                                className={cn(
                                                    "p-8 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden",
                                                    formData.type === "verkoop"
                                                        ? "border-gold bg-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                                                        : "border-white/10 hover:border-gold/50 bg-black/40"
                                                )}
                                            >
                                                <div className="relative z-10">
                                                    <Send className={cn("w-10 h-10 mb-4 transition-colors", formData.type === "verkoop" ? "text-gold" : "text-gray-400 group-hover:text-gold")} />
                                                    <h3 className="text-xl font-bold text-white mb-2">Auto Verkopen</h3>
                                                    <p className="text-sm text-gray-400">Ik wil mijn auto verkopen zonder een nieuwe aan te schaffen.</p>
                                                </div>
                                            </button>
                                        </div>

                                        {/* Conditional Stock Selection */}
                                        {formData.type === "inruil" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="pt-6 border-t border-white/10"
                                            >
                                                <label className="block text-sm font-medium text-gold uppercase mb-3">Welke auto heeft u op het oog?</label>
                                                <select
                                                    name="targetCar"
                                                    value={formData.targetCar}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-gold focus:outline-none transition-colors rounded-xl appearance-none cursor-pointer hover:border-gold/50"
                                                >
                                                    <option value="">Selecteer een auto uit onze voorraad...</option>
                                                    {MOCK_STOCK.map((car) => (
                                                        <option key={car} value={car}>{car}</option>
                                                    ))}
                                                </select>
                                            </motion.div>
                                        )}

                                        <div className="flex justify-end pt-8">
                                            <button
                                                onClick={nextStep}
                                                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:bg-gold hover:text-white transition-all duration-300"
                                            >
                                                Volgende Stap <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 2: DETAILS */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Voertuiggegevens</h2>
                                            <p className="text-gray-400">Vul de details van uw huidige auto in.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.kenteken ? "text-red-500" : "text-gold")}>
                                                    Kenteken <span className={cn("text-lg leading-none", errors.kenteken ? "text-red-500" : "text-gold")}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="kenteken"
                                                    value={formData.kenteken}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg uppercase",
                                                        errors.kenteken ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                    )}
                                                    placeholder="XX-XX-XX"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.kilometerstand ? "text-red-500" : "text-gold")}>
                                                    Kilometerstand <span className={cn("text-lg leading-none", errors.kilometerstand ? "text-red-500" : "text-gold")}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="kilometerstand"
                                                    value={formData.kilometerstand}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg",
                                                        errors.kilometerstand ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                    )}
                                                    placeholder="0 km"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.transmissie ? "text-red-500" : "text-gold")}>
                                                    Transmissie <span className={cn("text-lg leading-none", errors.transmissie ? "text-red-500" : "text-gold")}>*</span>
                                                </label>
                                                <select
                                                    name="transmissie"
                                                    value={formData.transmissie}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg appearance-none",
                                                        errors.transmissie ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                    )}
                                                >
                                                    <option value="">Maak een keuze...</option>
                                                    <option value="Automaat">Automaat</option>
                                                    <option value="Handgeschakeld">Handgeschakeld</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.onderhoud ? "text-red-500" : "text-gold")}>
                                                    Onderhoudshistorie <span className={cn("text-lg leading-none", errors.onderhoud ? "text-red-500" : "text-gold")}>*</span>
                                                </label>
                                                <select
                                                    name="onderhoud"
                                                    value={formData.onderhoud}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg appearance-none",
                                                        errors.onderhoud ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                    )}
                                                >
                                                    <option value="">Maak een keuze...</option>
                                                    <option value="Aantoonbaar">Aantoonbaar door middel van facturen</option>
                                                    <option value="Aanwezig_ingevuld">Aanwezig ingevuld</option>
                                                    <option value="Aanwezig_niet_ingevuld">Aanwezig niet ingevuld</option>
                                                    <option value="Niet_aanwezig">Niet aanwezig</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.laatsteBeurtKm ? "text-red-500" : "text-gold")}>
                                                    Kilometerstand laatste beurt <span className={cn("text-lg leading-none", errors.laatsteBeurtKm ? "text-red-500" : "text-gold")}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="laatsteBeurtKm"
                                                    value={formData.laatsteBeurtKm}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg",
                                                        errors.laatsteBeurtKm ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                    )}
                                                    placeholder="Bijv. 120.000 km"
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-xs font-bold text-gold uppercase tracking-wider">Opmerkingen / Staat van de auto</label>
                                                <textarea
                                                    name="opmerkingen"
                                                    value={formData.opmerkingen}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors rounded-lg"
                                                    placeholder="Beschrijf eventuele schades, opties of bijzonderheden..."
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8">
                                            <button
                                                onClick={prevStep}
                                                className="text-gray-400 hover:text-white transition-colors font-medium uppercase text-sm"
                                            >
                                                Terug
                                            </button>
                                            <button
                                                onClick={nextStep}
                                                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:bg-gold hover:text-white transition-all duration-300"
                                            >
                                                Naar Foto's <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: PHOTOS & FINISH */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Foto's & Afronden</h2>
                                            <p className="text-gray-400">Upload foto's voor een nauwkeurige taxatie.</p>
                                        </div>

                                        {/* Photo Upload Area */}
                                        <div className="space-y-6">
                                            <label
                                                className={cn(
                                                    "block bg-black/40 border-2 border-dashed rounded-2xl p-8 text-center transition-colors group cursor-pointer relative overflow-hidden",
                                                    fileError ? "border-red-500" : "border-gold/30 hover:border-gold/60"
                                                )}
                                            >
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                                <div className="relative z-10 space-y-4">
                                                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                        <Camera className="w-8 h-8 text-gold" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white uppercase">Vergeet niet uw foto's toe te voegen</h3>
                                                    <p className="text-gray-400 max-w-md mx-auto">
                                                        Kunt u ons van maximaal 10 foto's voorzien? Graag duidelijke foto's van binnen en buitenkant!
                                                    </p>

                                                    <div className="flex flex-col gap-2 text-xs text-gold/80 bg-gold/5 p-4 rounded-lg max-w-md mx-auto border border-gold/10">
                                                        <div className="flex items-center gap-2 justify-center">
                                                            <AlertCircle className="w-4 h-4" />
                                                            <span className="font-bold">LET OP!</span>
                                                        </div>
                                                        <p>Zonder duidelijke foto's is een inruiltaxatie niet mogelijk.</p>
                                                        <p>De foto's mogen maximaal 8 mb zijn.</p>
                                                    </div>

                                                    <div className="mt-4 inline-block px-6 py-2 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-bold uppercase group-hover:bg-gold group-hover:text-black transition-all">
                                                        Selecteer Foto's
                                                    </div>
                                                </div>
                                            </label>

                                            {/* Error Message */}
                                            {fileError && (
                                                <div className="text-red-500 text-center text-sm font-medium">
                                                    {fileError}
                                                </div>
                                            )}

                                            {/* File Previews */}
                                            {files.length > 0 && (
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {files.map((file, index) => (
                                                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group">
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt={`Preview ${index}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <button
                                                                onClick={() => removeFile(index)}
                                                                className="absolute top-2 right-2 bg-black/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                                                            >
                                                                <div className="w-4 h-4 flex items-center justify-center">×</div>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact Info for Submission */}
                                        <div className="pt-8 border-t border-white/10">
                                            <h3 className="text-xl font-bold text-white uppercase mb-6">Uw Contactgegevens</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.naam ? "text-red-500" : "text-gold")}>
                                                        Naam <span className={cn("text-lg leading-none", errors.naam ? "text-red-500" : "text-gold")}>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="naam"
                                                        value={formData.naam}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg",
                                                            errors.naam ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                        )}
                                                        placeholder="Uw naam"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.telefoon ? "text-red-500" : "text-gold")}>
                                                        Telefoon <span className={cn("text-lg leading-none", errors.telefoon ? "text-red-500" : "text-gold")}>*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="telefoon"
                                                        value={formData.telefoon}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg",
                                                            errors.telefoon ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                        )}
                                                        placeholder="06 1234 5678"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1", errors.email ? "text-red-500" : "text-gold")}>
                                                        E-mail <span className={cn("text-lg leading-none", errors.email ? "text-red-500" : "text-gold")}>*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-black border p-3 text-white focus:outline-none transition-colors rounded-lg",
                                                            errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold"
                                                        )}
                                                        placeholder="naam@voorbeeld.nl"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8">
                                            <button
                                                onClick={prevStep}
                                                className="text-gray-400 hover:text-white transition-colors font-medium uppercase text-sm"
                                            >
                                                Terug
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-bold uppercase hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                                            >
                                                Verstuur Aanvraag <Send className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
