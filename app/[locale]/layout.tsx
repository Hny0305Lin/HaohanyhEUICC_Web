import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ComplianceNotice from "../../components/ComplianceNotice";
import "../globals.css";

export const metadata: Metadata = {
    title: "Haohanyh/EUICC: a fully LPA implementation for Android by Haohanyh",
    description: "浩瀚银河EUICC网站——芯网互联，全球互通",
};

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    return (
        <>
            <Header locale={locale} />
            <ComplianceNotice />
            {children}
            <Footer showICP={locale === "cn"} />
        </>
    );
}

