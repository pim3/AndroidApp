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

import java.util.ArrayList;
import java.util.List;

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

        //get content of menu
        menuContent = getIntent().getParcelableExtra("menuContent");

        if(menuContent==null){
        //this activity is main menu so we need to initialize menu tree structure
//            debugMenu();
            initMenu();
        }

        setContentView(R.layout.menu);

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

    private void debugMenu(){
        List<ButtonDefinition> temp2 = new ArrayList<ButtonDefinition>();
        temp2.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));
        temp2.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));
        temp2.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));

        List<ButtonDefinition> temp = new ArrayList<ButtonDefinition>();
        temp.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));
        temp.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));
        temp.add(new ButtonDefinition(R.string.hello_world,"file:///android_asset/test1.html"));
        menuContent = new MenuContent(R.drawable.logo, temp);
    }

    private void initMenu(){
        String testPage = "test1.html";
        String tlakomerMeranie = "tlakomer.html";

        List<ButtonDefinition> glukomerButtons = new ArrayList<ButtonDefinition>();
        glukomerButtons.add(new ButtonDefinition(R.string.kalibracia, testPage));
        glukomerButtons.add(new ButtonDefinition(R.string.meranie, testPage));
        glukomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent glukomerMenu = new MenuContent(R.drawable.logo, glukomerButtons);

        List<ButtonDefinition> vahaButtons = new ArrayList<ButtonDefinition>();
        vahaButtons.add(new ButtonDefinition(R.string.meranie, testPage));
        vahaButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent vahaMenu = new MenuContent(R.drawable.logo,vahaButtons);

        List<ButtonDefinition> tlakomerButtons = new ArrayList<ButtonDefinition>();
        tlakomerButtons.add(new ButtonDefinition(R.string.meranie, tlakomerMeranie));
        tlakomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent tlakomerMenu = new MenuContent(R.drawable.logo,tlakomerButtons);

        List<ButtonDefinition> zariadeniaButtons = new ArrayList<ButtonDefinition>();
        zariadeniaButtons.add(new ButtonDefinition(R.string.glukomer,glukomerMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.vaha,vahaMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.tlakomer,tlakomerMenu));
        MenuContent zariadeniaMenu = new MenuContent(R.drawable.logo,zariadeniaButtons);

        List<ButtonDefinition> mainMenuButtons = new ArrayList<ButtonDefinition>();
        mainMenuButtons.add(new ButtonDefinition(R.string.som_diabetikom,testPage));
        mainMenuButtons.add(new ButtonDefinition(R.string.zariadenia,zariadeniaMenu));
        mainMenuButtons.add(new ButtonDefinition(R.string.o_programe,testPage));
        menuContent = new MenuContent(R.drawable.logo, mainMenuButtons);
    }
}
