"use client";

import { useState } from "react";
import { Car, Camera, Send, ChevronRight, Check, Upload, AlertCircle, ChevronDownIcon } from "lucide-react";
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
        <main className="pt-24 min-h-screen bg-white">
            <section className="py-12 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="neon-glow top-[10%] left-1/2 -translate-x-1/2 opacity-30" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* New Header Section */}
                        <div className="text-center mb-8">
                            <TradeInAnimation />
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 uppercase tracking-tight">
                                Auto <span className="text-silver-sheen">Inruilen</span>
                            </h1>
                            <p className="text-xl text-gray-600">Ontvang een passend voorstel</p>
                        </div>

                        {/* Progress Steps */}
                        <div className="flex items-center justify-center mb-8 space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div
                                        className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-0",
                                            step >= i
                                                ? "bg-silver-sheen-dark text-black shadow-lg scale-110"
                                                : "bg-white border-2 border-gray-200 text-gray-400"
                                        )}
                                    >
                                        {step > i ? <Check className="w-5 h-5" /> : i}
                                    </div>
                                    {i < 3 && (
                                        <div
                                            className={cn(
                                                "w-12 h-1 mx-2 transition-all duration-300 rounded-full",
                                                step > i ? "bg-silver-sheen-dark" : "bg-gray-200"
                                            )}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
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
                                        <div className="text-center mb-10">
                                            <h2 className="text-3xl font-bold text-black mb-3">Wat is uw wens?</h2>
                                            <p className="text-gray-500 font-medium">Maak een keuze om te beginnen</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <button
                                                onClick={() => setFormData({ ...formData, type: "inruil" })}
                                                className={cn(
                                                    "relative p-8 rounded-2xl border-0 text-left group overflow-hidden transition-all duration-300",
                                                    formData.type === "inruil"
                                                        ? "bg-silver-sheen shadow-2xl scale-[1.02]"
                                                        : "bg-gray-50 hover:bg-gray-100 hover:scale-[1.01]"
                                                )}
                                            >
                                                {/* Overlay for better text readability if texture is too strong, optional but good for polish */}
                                                <div className={cn(
                                                    "absolute inset-0 transition-opacity duration-300",
                                                    formData.type === "inruil" ? "bg-white/0" : "opacity-0"
                                                )} />

                                                <div className="relative z-10 flex flex-col h-full justify-between">
                                                    <div className="mb-6">
                                                        <div className={cn(
                                                            "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all shadow-sm",
                                                            formData.type === "inruil" ? "bg-black/10 backdrop-blur-sm" : "bg-white"
                                                        )}>
                                                            <Car className={cn("w-7 h-7 transition-colors", formData.type === "inruil" ? "text-black" : "text-gray-600")} />
                                                        </div>
                                                        <h3 className={cn("text-2xl font-bold mb-2 transition-colors", formData.type === "inruil" ? "text-black" : "text-black")}>
                                                            Auto Inruilen
                                                        </h3>
                                                        <p className={cn("text-sm leading-relaxed transition-colors", formData.type === "inruil" ? "text-black/80 font-medium" : "text-gray-500")}>
                                                            Ruil uw huidige auto in en ontvang direct een eerlijke inruilwaarde op een auto uit onze voorraad.
                                                        </p>
                                                    </div>
                                                    <div className={cn(
                                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                                        formData.type === "inruil" ? "bg-black text-white shadow-lg" : "bg-gray-200 text-gray-400"
                                                    )}>
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => setFormData({ ...formData, type: "verkoop" })}
                                                className={cn(
                                                    "relative p-8 rounded-2xl border-0 text-left group overflow-hidden transition-all duration-300",
                                                    formData.type === "verkoop"
                                                        ? "bg-silver-sheen shadow-2xl scale-[1.02]"
                                                        : "bg-gray-50 hover:bg-gray-100 hover:scale-[1.01]"
                                                )}
                                            >
                                                <div className={cn(
                                                    "absolute inset-0 transition-opacity duration-300",
                                                    formData.type === "verkoop" ? "bg-white/0" : "opacity-0"
                                                )} />

                                                <div className="relative z-10 flex flex-col h-full justify-between">
                                                    <div className="mb-6">
                                                        <div className={cn(
                                                            "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all shadow-sm",
                                                            formData.type === "verkoop" ? "bg-black/10 backdrop-blur-sm" : "bg-white"
                                                        )}>
                                                            <Send className={cn("w-7 h-7 transition-colors", formData.type === "verkoop" ? "text-black" : "text-gray-600")} />
                                                        </div>
                                                        <h3 className={cn("text-2xl font-bold mb-2 transition-colors", formData.type === "verkoop" ? "text-black" : "text-black")}>
                                                            Auto Verkopen
                                                        </h3>
                                                        <p className={cn("text-sm leading-relaxed transition-colors", formData.type === "verkoop" ? "text-black/80 font-medium" : "text-gray-500")}>
                                                            Verkoop uw auto zorgeloos aan ons zonder dat u direct een nieuwe hoeft aan te schaffen.
                                                        </p>
                                                    </div>
                                                    <div className={cn(
                                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                                        formData.type === "verkoop" ? "bg-black text-white shadow-lg" : "bg-gray-200 text-gray-400"
                                                    )}>
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        {/* Conditional Stock Selection */}
                                        {formData.type === "inruil" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, y: 10 }}
                                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                                className="pt-8"
                                            >
                                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                                    <label className="block text-sm font-bold text-black uppercase tracking-wider mb-3">Welke auto heeft u op het oog?</label>
                                                    <div className="relative">
                                                        <select
                                                            name="targetCar"
                                                            value={formData.targetCar}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-white border-0 p-4 pr-10 text-black font-medium shadow-sm rounded-xl appearance-none cursor-pointer focus:ring-2 focus:ring-black/5 transition-all"
                                                        >
                                                            <option value="">Selecteer een auto uit onze voorraad...</option>
                                                            {MOCK_STOCK.map((car) => (
                                                                <option key={car} value={car}>{car}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="flex justify-end pt-8">
                                            <button
                                                onClick={nextStep}
                                                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                Volgende Stap
                                                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                                    <ChevronRight className="w-4 h-4" />
                                                </span>
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
                                            <h2 className="text-3xl font-bold text-black mb-4">Voertuiggegevens</h2>
                                            <p className="text-gray-500">Vul de details van uw huidige auto in.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.kenteken ? "text-red-500" : "text-gray-500")}>
                                                    Kenteken <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="kenteken"
                                                    value={formData.kenteken}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl uppercase placeholder:text-gray-300",
                                                        errors.kenteken ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                    )}
                                                    placeholder="XX-XX-XX"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.kilometerstand ? "text-red-500" : "text-gray-500")}>
                                                    Kilometerstand <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="kilometerstand"
                                                    value={formData.kilometerstand}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300",
                                                        errors.kilometerstand ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                    )}
                                                    placeholder="0 km"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.transmissie ? "text-red-500" : "text-gray-500")}>
                                                    Transmissie <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="transmissie"
                                                        value={formData.transmissie}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl appearance-none",
                                                            errors.transmissie ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                        )}
                                                    >
                                                        <option value="">Maak een keuze...</option>
                                                        <option value="Automaat">Automaat</option>
                                                        <option value="Handgeschakeld">Handgeschakeld</option>
                                                    </select>
                                                    <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.onderhoud ? "text-red-500" : "text-gray-500")}>
                                                    Onderhoudshistorie <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="onderhoud"
                                                        value={formData.onderhoud}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl appearance-none",
                                                            errors.onderhoud ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                        )}
                                                    >
                                                        <option value="">Maak een keuze...</option>
                                                        <option value="Aantoonbaar">Aantoonbaar door middel van facturen</option>
                                                        <option value="Aanwezig_ingevuld">Aanwezig ingevuld</option>
                                                        <option value="Aanwezig_niet_ingevuld">Aanwezig niet ingevuld</option>
                                                        <option value="Niet_aanwezig">Niet aanwezig</option>
                                                    </select>
                                                    <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.laatsteBeurtKm ? "text-red-500" : "text-gray-500")}>
                                                    Kilometerstand laatste beurt <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="laatsteBeurtKm"
                                                    value={formData.laatsteBeurtKm}
                                                    onChange={handleInputChange}
                                                    className={cn(
                                                        "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300",
                                                        errors.laatsteBeurtKm ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                    )}
                                                    placeholder="Bijv. 120.000 km"
                                                />
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Opmerkingen / Staat van de auto</label>
                                                <textarea
                                                    name="opmerkingen"
                                                    value={formData.opmerkingen}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300 resize-none"
                                                    placeholder="Beschrijf eventuele schades, opties of bijzonderheden..."
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8">
                                            <button
                                                onClick={prevStep}
                                                className="text-gray-400 hover:text-black transition-colors font-bold uppercase text-sm tracking-wider"
                                            >
                                                Terug
                                            </button>
                                            <button
                                                onClick={nextStep}
                                                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                Naar Foto's
                                                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                                    <ChevronRight className="w-4 h-4" />
                                                </span>
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
                                            <h2 className="text-3xl font-bold text-black mb-4">Foto's & Afronden</h2>
                                            <p className="text-gray-500">Upload foto's voor een nauwkeurige taxatie.</p>
                                        </div>

                                        {/* Photo Upload Area */}
                                        <div className="space-y-6">
                                            <label
                                                className={cn(
                                                    "block bg-gray-50 border-2 border-dashed rounded-2xl p-10 text-center transition-all group cursor-pointer relative overflow-hidden",
                                                    fileError ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-black hover:bg-gray-100"
                                                )}
                                            >
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />

                                                <div className="relative z-10 space-y-4">
                                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                        <Camera className="w-10 h-10 text-black" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-black uppercase">Sleep foto's hierheen</h3>
                                                    <p className="text-gray-500 max-w-md mx-auto">
                                                        Of klik om te bladeren. Maximaal 10 foto's (max 8MB per stuk).
                                                    </p>

                                                    <div className="mt-6 inline-block px-8 py-3 bg-black text-white rounded-full text-sm font-bold uppercase shadow-lg group-hover:shadow-xl transition-all">
                                                        Selecteer Foto's
                                                    </div>
                                                </div>
                                            </label>

                                            {/* Error Message */}
                                            {fileError && (
                                                <div className="flex items-center justify-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {fileError}
                                                </div>
                                            )}

                                            {/* File Previews */}
                                            {files.length > 0 && (
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {files.map((file, index) => (
                                                        <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt={`Preview ${index}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    removeFile(index);
                                                                }}
                                                                className="absolute top-2 right-2 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white shadow-lg transform scale-90 group-hover:scale-100"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact Info for Submission */}
                                        <div className="pt-8 border-t border-gray-100">
                                            <h3 className="text-xl font-bold text-black uppercase mb-6">Uw Contactgegevens</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.naam ? "text-red-500" : "text-gray-500")}>
                                                        Naam <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="naam"
                                                        value={formData.naam}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300",
                                                            errors.naam ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                        )}
                                                        placeholder="Uw naam"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.telefoon ? "text-red-500" : "text-gray-500")}>
                                                        Telefoon <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="telefoon"
                                                        value={formData.telefoon}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300",
                                                            errors.telefoon ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                        )}
                                                        placeholder="06 1234 5678"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className={cn("text-xs font-bold uppercase tracking-wider flex items-center gap-1 ml-1", errors.email ? "text-red-500" : "text-gray-500")}>
                                                        E-mail <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={cn(
                                                            "w-full bg-gray-50 border-0 p-4 text-black font-medium focus:ring-2 focus:bg-white transition-all rounded-xl placeholder:text-gray-300",
                                                            errors.email ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-black/5"
                                                        )}
                                                        placeholder="naam@voorbeeld.nl"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8">
                                            <button
                                                onClick={prevStep}
                                                className="text-gray-400 hover:text-black transition-colors font-bold uppercase text-sm tracking-wider"
                                            >
                                                Terug
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                Verstuur Aanvraag
                                                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                                    <Send className="w-4 h-4" />
                                                </span>
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
