export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 mt-16 bg-[#80c9fe]">
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-4">
                <div>
                    <h4 className="text-sm font-semibold mb-3">合作与资质</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                        <li>后续替换真实资质</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-3">合规与隐私</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                        <li><a href="/legal/haohanyh-resources">Haohanyh 合规资源</a></li>
                        <li><a href="/legal/haohanyh-global">Haohanyh 面向海外</a></li>
                        <li><a href="/legal/privacy">隐私政策</a></li>
                        <li><a href="/legal/terms">服务条款</a></li>
                        <li><a href="/legal/cookie">Cookie 政策</a></li>
                        <li><a href="/legal/jubao">检举滥用行为</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-3">联系</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                        <li><a href="https://github.com/Hny0305Lin" target="_blank">Github</a></li>
                        <li><a href="https://www.haohanyh.ovh/" target="_blank">官方网站</a></li>
                    </ul>
                </div>
                <div className="text-sm text-foreground/80">
                    <div>备案号: 京ICP备00000000号-1</div>
                    <div className="mt-2">© 2019-{new Date().getFullYear()} <a href="https://www.haohanyh.ovh/" target="_blank" className="underline hover:opacity-80">Haohanyh</a></div>
                </div>
            </div>
        </footer>
    );
}

