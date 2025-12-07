"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header({ locale }: { locale: string }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const items = [
        { href: `/${locale}#new`, label: "最新方案" },
        { href: `/${locale}#plans`, label: "产品与服务" },
        { href: `/${locale}#solutions`, label: "解决方案" },
        { href: `/${locale}#pricing`, label: "定价" },
        { href: `/${locale}#docs`, label: "文档与学习" },
        { href: `/${locale}#github`, label: "开发者生态" },
        { href: `/${locale}#contact`, label: "支持与客服" },
        { href: `/${locale}#github`, label: "Github" },
        { href: `/${locale}#haohanyh`, label: "了解我们" },
    ];
    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-background/70">
            <div className="w-full px-4 md:px-6 py-3 flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="HaohanyhEUICC Logo" width={32} height={32} />
                    <span className="text-sm font-semibold tracking-wide text-[#0052d9]">浩瀚银河</span>
                </div>
                <nav className="hidden xl:flex items-center gap-6 text-sm">
                    {items.map((item) => (
                        <Link key={`${item.href}-${item.label}`} href={item.href}>{item.label}</Link>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-3">
                    <button
                        className="xl:hidden inline-flex rounded-full border border-white/10 px-3 py-1 text-xs"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        菜单
                    </button>
                    <Link href={`/${locale}#contact`} className="hidden xl:inline-flex rounded-full bg-[#0052d9] text-background px-4 py-1 text-sm">控制台</Link>
                    <SiteDropdownWrapper locale={locale} />
                </div>
            </div>
            {mobileOpen && (
                <div id="mobile-menu" className="xl:hidden border-t border-white/10 bg-background/95 backdrop-blur max-h-[70vh] overflow-y-auto">
                    <ul className="px-4 py-2 text-sm">
                        {items.map((item) => (
                            <li key={`${item.href}-${item.label}`}>
                                <Link href={item.href} className="block px-2 py-2" onClick={() => setMobileOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href={`/${locale}#contact`} className="block px-2 py-2" onClick={() => setMobileOpen(false)}>
                                控制台
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}



function SiteDropdown({ current }: { current: string }) {
    const sites = [
        { code: "cn", label: "中国大陆", icon: "🇨🇳", desc: "国内业务, 服务中国大陆" },
        { code: "hk", label: "国际 港澳台", icon: "🇭🇰", desc: "中国港澳台地区商贸旅游首选" },
        { code: "en", label: "国际 English", icon: "🌐", desc: "English for global users" },
    ];
    const currentLabel = sites.find((s) => s.code === current)?.label ?? "中国大陆";
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<number>(() => sites.findIndex((s) => s.code === current));
    const ref = useRef<HTMLDivElement>(null);
    const hoverTimer = useRef<number | null>(null);
    const cancelTimer = () => {
        if (hoverTimer.current !== null) {
            clearTimeout(hoverTimer.current);
            hoverTimer.current = null;
        }
    };
    const openNow = () => {
        cancelTimer();
        setOpen(true);
    };
    const closeDelayed = () => {
        cancelTimer();
        hoverTimer.current = window.setTimeout(() => setOpen(false), 200);
    };
    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        }
        function onKey(e: KeyboardEvent) {
            if (!open) return;
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onDoc);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDoc);
            document.removeEventListener("keydown", onKey);
            cancelTimer();
        };
    }, [open]);
    return (
        <div className="relative hidden xl:block" ref={ref} onMouseEnter={openNow} onMouseLeave={closeDelayed}>
            <button
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs"
                onClick={() => { cancelTimer(); setOpen((v) => !v); }}
                onFocus={openNow}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="site-switcher-menu"
            >
                <span>{currentLabel}</span>
                <span>▾</span>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg border border-white/10 bg-background/90 backdrop-blur shadow-lg" role="menu" id="site-switcher-menu">
                    <div className="px-3 pt-3 text-[11px] text-foreground/60">站点选择</div>
                    <ul className="py-2 text-xs">
                        {sites.map((s, i) => (
                            <li key={s.code}>
                                <Link
                                    href={`/${s.code}`}
                                    className={`flex items-start gap-2 px-3 py-2 ${current === s.code ? "bg-[#0052d9] text-background" : "hover:bg-white/5"}`}
                                    onClick={() => setOpen(false)}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    role="menuitem"
                                    aria-current={current === s.code ? "true" : undefined}
                                >
                                    <span className="mt-[1px]">{s.icon}</span>
                                    <span className="flex-1">
                                        <span className="block text-[12px] font-medium">{s.label}</span>
                                        <span className="block text-[11px] opacity-70">{s.desc}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function SiteDropdownWrapper({ locale }: { locale: string }) {
    // keep dropdown hidden on smaller screens; no-op wrapper helps readability
    return <SiteDropdown current={locale} />;
}
