export default function FeatureGrid() {
    const features = [
        { title: "全球互通覆盖", desc: "多区域/国家/全球套餐，随时可用" },
        { title: "极速激活", desc: "扫码下载配置文件，秒级开通" },
        { title: "实体卡可选", desc: "支持云卡与实体卡，灵活组合" },
        { title: "7x24H 支持", desc: "常见问题与知识库，随时响应" },
    ];
    return (
        <section className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
                {features.map((f) => (
                    <div key={f.title} className="rounded-lg border border-white/10 p-6">
                        <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                        <p className="text-sm text-foreground/80">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
