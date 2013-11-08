package com.pim3.appka;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class WebViewActivity extends Activity {

    private WebView webView;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview);

        //load webpage url
        String url = getIntent().getStringExtra("url");

        //setup webView
        webView = (WebView) findViewById(R.id.webView1);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setJavaScriptEnabled(true);
        WebChromeClient wcc = new WebChromeClient();

        //special settings for JB webview
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            WebSettings s = webView.getSettings();
            s.setAllowUniversalAccessFromFileURLs(true);
            s.setAllowFileAccessFromFileURLs(true);
        }

        //aply settings and load url
        webView.setWebChromeClient(wcc);
        webView.loadUrl(url);
    }
}