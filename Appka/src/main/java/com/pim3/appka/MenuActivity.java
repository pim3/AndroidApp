package com.pim3.appka;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
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
        if (context == null)
            throw new ExceptionInInitializerError("unable to get application context");
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        //set slide animation on creation
        overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_left);

        //GET MENU CONTENT SETTINGS
        menuContent = getIntent().getParcelableExtra("menuContent");
        // when menuContent is null it means that this is main menu
        // and we need to initialize setting
        if (menuContent == null) {
            initMenu();
        }

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

        //test
//        List<Integer> colors = new ArrayList<Integer>();
//        colors.add(R.color.button_blue);
//        colors.add(R.color.button_green);
//        colors.add(R.color.button_red);
//        colors.add(R.color.button_yellow);

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

    //method called by "main menu" on onCreate event to initialize menu structure and buttons
    private void initMenu() {
        String testPage = "test1.html";
        String tlakomerMeranie = "tlakomer.html";

        //GLUKOMER MENU
        List<ButtonDefinition> glukomerButtons = new ArrayList<ButtonDefinition>();
        glukomerButtons.add(new ButtonDefinition(R.string.kalibracia, testPage));
        glukomerButtons.add(new ButtonDefinition(R.string.meranie, testPage));
        glukomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent glukomerMenu = new MenuContent(R.drawable.abc_ic_search, R.string.glukomer, glukomerButtons);

        //VAHA MENU
        List<ButtonDefinition> vahaButtons = new ArrayList<ButtonDefinition>();
        vahaButtons.add(new ButtonDefinition(R.string.meranie, testPage));
        vahaButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent vahaMenu = new MenuContent(R.drawable.abc_ic_search, R.string.vaha, vahaButtons);

        //TLAKOMER MENU
        List<ButtonDefinition> tlakomerButtons = new ArrayList<ButtonDefinition>();
        tlakomerButtons.add(new ButtonDefinition(R.string.meranie, tlakomerMeranie));
        tlakomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, testPage));
        MenuContent tlakomerMenu = new MenuContent(R.drawable.abc_ic_search, R.string.tlakomer, tlakomerButtons);

        //ZARIADENIA MENU
        List<ButtonDefinition> zariadeniaButtons = new ArrayList<ButtonDefinition>();
        zariadeniaButtons.add(new ButtonDefinition(R.string.glukomer, glukomerMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.vaha, vahaMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.tlakomer, tlakomerMenu));
        MenuContent zariadeniaMenu = new MenuContent(R.drawable.abc_ic_search, R.string.zariadenia, zariadeniaButtons);

        //MAIN MENU
        List<ButtonDefinition> mainMenuButtons = new ArrayList<ButtonDefinition>();
        mainMenuButtons.add(new ButtonDefinition(R.string.som_diabetikom, testPage));
        mainMenuButtons.add(new ButtonDefinition(R.string.zariadenia, zariadeniaMenu));
        mainMenuButtons.add(new ButtonDefinition(R.string.o_programe, testPage));
        menuContent = new MenuContent(R.drawable.logo, -1, mainMenuButtons);//-1 no title resource
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
