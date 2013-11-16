package com.pim3.appka;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.InflateException;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import static android.view.View.OnClickListener;

/**
 * Created by loucher on 11/8/13.
 */
public class MenuActivity extends Activity {
    private Context context;
    private MenuContent menuContent;
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = getApplicationContext();
        if (context == null) {
            throw new ExceptionInInitializerError("unable to get application context");
        }
        //set slide animation on creation
        overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_left);
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        //GET MENU CONTENT SETTINGS
        menuContent = getIntent().getParcelableExtra("menuContent");
        //SETUP TITLE
        setContentView(R.layout.menu);
        TextView title = (TextView) findViewById(R.id.title);
        ImageView logo = (ImageView) findViewById(R.id.logo);
        logo.setImageResource(menuContent.getLogoResource());
        if (menuContent.getTitleResource() == -1) {
            // no title text, we need to change title layout a bit
            // removing textView
            LinearLayout titleContainer = (LinearLayout) findViewById(R.id.title_container);
            titleContainer.removeView(title);
            //scaling logo to fit whole title container
            LinearLayout.LayoutParams logoParams = new LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT);
            logo.setLayoutParams(logoParams);
            //increasing title height
            ViewGroup.LayoutParams containerParams = titleContainer.getLayoutParams();
            if (containerParams == null)
                throw new AssertionError("titleContainer has no layout parameters.");
            containerParams.height = (int) TypedValue.applyDimension(
                    TypedValue.COMPLEX_UNIT_DIP,
                    getResources().getDimension(R.dimen.no_text_title_height),
                    getResources().getDisplayMetrics());
            titleContainer.setLayoutParams(containerParams);
        } else {
            title.setText(menuContent.getTitleResource());
        }

        //POPULATE BUTTON CONTAINER WITH BUTTONS
        LinearLayout root = (LinearLayout) findViewById(R.id.root);
        LinearLayout buttonContainer = (LinearLayout) findViewById(R.id.buttonContainer);
        for (ButtonDefinition bd : menuContent.getButtonDefinitionList()) {
            Button button = (Button) inflater.inflate(R.layout.button, root, false);
            if (button == null) throw new InflateException("Unable to inflate menu button.");
            button.setText(bd.getStringResource());

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
                case EXIT:
                    button.setOnClickListener(new ExitListener());
                    break;
            }
            buttonContainer.addView(button);
        }
    }

    //custom onClick listener creating webView intent
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

    //custom onClick listener creating webView intent
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

    //custom onClick listener creating new menu intent
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

    private class ExitListener implements OnClickListener {

        @Override
        public void onClick(View v) {
        }
    }
    //setting up transition animation when current intent is paused ( pressed Back button)
    @Override
    protected void onPause() {
        super.onPause();
        //show transition animation only when this is not main menu
        if (menuContent.getTitleResource() != -1) {
            overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_right);
        }
    }
}
