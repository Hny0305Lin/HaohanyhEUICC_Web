import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import GithubCardList from "../components/GithubCardList";
import AndroidDocsTeaser from "../components/AndroidDocsTeaser";
import SwiperBanner from "../components/SwiperBanner";
import zhCN from "../i18n/zh-CN.json";
import plans from "../data/plans.json";

export default function Home() {
  const dict = zhCN;
  return (
    <>
      <Header locale="cn" />
      <main>
        <SwiperBanner />
        <Hero dict={dict} />
        <FeatureGrid />
        <section id="plans" className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="text-xl font-bold mb-4">热门套餐</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <div key={p.name} className="rounded-lg border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold">{p.name}</h4>
                  <span className="text-sm">{p.price} {p.currency}</span>
                </div>
                <p className="text-sm text-foreground/80 mt-2">
                  地区：{p.region} · 流量：{p.data} · 有效期：{p.validDays}天
                </p>
                <p className="text-sm text-foreground/60 mt-1">
                  {p.physicalCard ? "支持实体卡" : "仅云卡"} · {p.groupDiscount ? "团体优惠" : ""}
                </p>
                <a className="text-sm mt-3 inline-block underline" href={p.link}>咨询购买</a>
              </div>
            ))}
          </div>
        </section>
        <GithubCardList />
        <AndroidDocsTeaser />
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="text-base font-semibold mb-2">隐私与合规简述</h3>
            <p className="text-sm text-foreground/80">隐私与合规详情见页脚的隐私政策与服务条款。</p>
          </div>
        </section>
      </main>
      <Footer showICP={true} />
    </>
  );
}
