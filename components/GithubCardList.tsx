import Link from "next/link";
import repos from "../data/github.json";

type Repo = {
    name: string;
    description: string;
    url: string;
};

async function fetchStars(fullName: string): Promise<number | null> {
    const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
        headers,
        next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const count = (data as any)?.stargazers_count;
    return typeof count === "number" ? count : null;
}

function getFullName(r: Repo): string | null {
    try {
        const u = new URL(r.url);
        const parts = u.pathname.split("/").filter(Boolean);
        if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    } catch { }
    if (r.name.includes("/")) return r.name;
    return null;
}

export default async function GithubCardList() {
    const list = repos as Repo[];
    const dynamic = await Promise.all(list.map((r) => {
        const full = getFullName(r);
        return full ? fetchStars(full) : Promise.resolve(null);
    }));
    return (
        <section id="github" className="mx-auto max-w-6xl px-4 py-10">
            <h3 className="text-xl font-bold mb-4">Github 开源项目</h3>
            <div className="grid gap-6 md:grid-cols-3">
                {list.map((r, i) => (
                    <div key={r.name} className="rounded-lg border border-white/10 p-6">
                        <div className="flex items-center justify-between">
                            <h4 className="text-base font-semibold">{r.name}</h4>
                            <span className="text-xs">★ {dynamic[i] ?? 0}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-2">{r.description}</p>
                        <Link className="text-sm mt-3 inline-block underline" href={r.url} target="_blank">
                            查看项目
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

