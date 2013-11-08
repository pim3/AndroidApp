package com.pim3.appka;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;

import static android.view.View.OnClickListener;

/**
 * Created by loucher on 11/8/13.
 */
public class MenuActivity extends Activity {

    private Context context;
    private MenuContent menuContent;

    public void onCreate(Bundle savedInstanceState) {
        context = getApplicationContext();
        setContentView(R.layout.menu);

        //get content of menu
        menuContent = getIntent().getParcelableExtra("menuContent");

        //get logo resource
        ImageView logo = (ImageView) findViewById(R.id.logo);
        logo.setImageResource(menuContent.getLogoResource());

        //populate button container with buttons
        LinearLayout buttonContainer = (LinearLayout) findViewById(R.id.buttonContainer);
        for (ButtonDefinition bd : menuContent.getButtonDefinitionList()) {
            Button button = new Button(context);
            button.setLayoutParams(new ActionBar.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            button.setText(bd.getStringResource());
            OnClickListener listener;
            switch (bd.getButtonType()) {
                case WEBVIEW:
                    button.setOnClickListener(new WebViewListener(bd.getUrl()));
                    break;
                case LAYOUT:
                    button.setOnClickListener(new LayoutListener(bd.getLayoutResource()));
                    break;
                case MENU:
                    button.setOnClickListener(new MenuListener(bd.getMenuContent()));
                    break;
            }
            buttonContainer.addView(button);
        }
    }

    private class WebViewListener implements OnClickListener {
        private String url;

        private WebViewListener(String url) {
            this.url = url;
        }

        @Override
        public void onClick(View v) {
            Intent intent = new Intent(context, WebViewActivity.class);
            intent.putExtra("url", url);
            startActivity(intent);
        }
    }

    private class LayoutListener implements OnClickListener {
        private int layoutResource;

        private LayoutListener(int layoutResource) {
            this.layoutResource = layoutResource;
        }

        @Override
        public void onClick(View v) {
            Intent intent = new Intent(context, LayoutActivity.class);
            intent.putExtra("layoutResource", layoutResource);
            startActivity(intent);
        }
    }

    private class MenuListener implements OnClickListener {
        private MenuContent menuContent;

        private MenuListener(MenuContent menuContent) {
            this.menuContent = menuContent;
        }

        @Override
        public void onClick(View v) {
            Intent intent = new Intent(context, MenuActivity.class);
            intent.putExtra("menuContent", menuContent);
            startActivity(intent);
        }
    }
}
