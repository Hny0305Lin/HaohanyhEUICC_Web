export default function AndroidDocsTeaser() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-10">
            <h3 className="text-xl font-bold mb-4">Android 应用使用入门</h3>
            <div className="grid gap-6 md:grid-cols-3">
                {["设备兼容与准备", "扫码下载配置文件", "激活与网络测试"].map((t) => (
                    <div key={t} className="rounded-lg border border-white/10 p-6">
                        <h4 className="text-base font-semibold">{t}</h4>
                        <p className="text-sm text-foreground/80 mt-2">点击查看详情与步骤说明</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

