'use client';
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef(null);



    interface TradingViewWidgetProps {
        title?: string;
        scriptUrl: string;
        config: Record<string, unknown>;
        height?: number;
        className?: string;
    }

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = ``;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Apple</span></a><span className="comma">,</span>&nbsp;<a href="https://www.tradingview.com/symbols/NASDAQ-GOOGL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Google</span></a><span className="comma">,</span><span className="and">&nbsp;and&nbsp;</span><a href="https://www.tradingview.com/symbols/NASDAQ-MSFT/" rel="noopener nofollow" target="_blank"><span className="blue-text">Microsoft stock price</span></a><span className="trademark">&nbsp;by TradingView</span></div>
        </div>
    );
}

export default memo(TradingViewWidget);
