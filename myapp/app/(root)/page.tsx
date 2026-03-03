import TradingViewWidget from "@/components/TradingViewWidget";

const Home = () => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js`;

    return (
        <div className="flex min-h-screen home-wrapper">
        <section className="grid w-full gap-8 home-section">
            <div className="md:col-span-1 xl:col-span-1">
                <TradingViewWidget
                    title="Market Overview"
                    scriptUrl={`${scriptUrl}market-overview.js`}
                    // config={MARKET_OVERVIEW_WIDGET_CONFIG}
                    className="custom-chart"
                    height={600}
                />
            </div>
        </section>
        </div>
    )
}
export default Home
