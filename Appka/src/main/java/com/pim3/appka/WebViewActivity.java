package com.pim3.appka;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.Display;
import android.view.WindowManager;
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
        url="file:///android_asset/"+url;
        //setup webView
        webView = (WebView) findViewById(R.id.webView1);
        WebSettings s = webView.getSettings();

//        s.setDomStorageEnabled(true);
        s.setJavaScriptEnabled(true);


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