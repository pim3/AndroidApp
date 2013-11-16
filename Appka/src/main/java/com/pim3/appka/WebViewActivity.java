package com.pim3.appka;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewActivity extends Activity {

    private WebView webView;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview);

        //load webpage url
        String url = getIntent().getStringExtra("url");
        url="file:///android_asset/"+url;
        //setup webView
        webView = (WebView) findViewById(R.id.webView);
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                findViewById(R.id.loadingText).setVisibility(View.GONE);
                findViewById(R.id.webView).setVisibility(View.VISIBLE);
            }
        });
//        s.setDomStorageEnabled(true);



//        s.setUseWideViewPort(true);
//        s.setLoadWithOverviewMode(true);


//        s.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
//
//        WebChromeClient wcc = new WebChromeClient();
            //special settings for JB webview
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
//
//            s.setAllowUniversalAccessFromFileURLs(true);
//            s.setAllowFileAccessFromFileURLs(true);
//        }
//        s.setSupportZoom(false);
//        s.setBuiltInZoomControls(false);
//        webView.setPadding(0, 0, 0, 0);
//        webView.setInitialScale(100);

//        webView.setWebChromeClient(wcc);
        webView.loadUrl(url);
    }
}