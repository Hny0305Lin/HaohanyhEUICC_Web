type TDict = {
    enTitle: string;
    zhTitle: string;
    subtitle: string;
    ctaConsult: string;
    ctaPlans: string;
    ctaDocs: string;
};

export default function Hero({ dict }: { dict: TDict }) {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-20 relative">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    {dict.enTitle}
                </h1>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    {dict.zhTitle}
                </h2>
                <p className="text-base md:text-lg text-foreground/80 max-w-2xl mb-8">
                    {dict.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                    <a className="rounded-full bg-[#0052d9] text-background px-5 py-2 text-sm" href="#contact">
                        {dict.ctaConsult}
                    </a>
                    <a className="rounded-full border border-foreground/20 px-5 py-2 text-sm" href="#plans">
                        {dict.ctaPlans}
                    </a>
                    <a className="rounded-full border border-foreground/20 px-5 py-2 text-sm" href="/docs">
                        {dict.ctaDocs}
                    </a>
                </div>
            </div>
        </section>
    );
}

