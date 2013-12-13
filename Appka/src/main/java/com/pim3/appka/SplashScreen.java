package com.pim3.appka;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by loucher on 11/16/13.
 */
public class SplashScreen extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent i = new Intent(SplashScreen.this, MenuActivity.class);
                i.putExtra("menuContent", getMenuContent());
                i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(i);
                finish();
            }
        }, 3000);
    }

    //method called by "main menu" on onCreate event to initialize menu structure and buttons
    private MenuContent getMenuContent() {
        String testPage = "test1.html";

        //GLUKOMER MENU
        List<ButtonDefinition> glukomerButtons = new ArrayList<ButtonDefinition>();
        glukomerButtons.add(new ButtonDefinition(R.string.kalibracia, "glukomer_kalibracia/Glukomer_kalibracia.html"));
        glukomerButtons.add(new ButtonDefinition(R.string.meranie, "glukomer_meranie/glukomer-meranie.html"));
        glukomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, R.layout.glukomer_vyhodnotenie));
        MenuContent glukomerMenu = new MenuContent(R.drawable.glu_logo, R.string.glukomer, glukomerButtons);

        //VAHA MENU
        List<ButtonDefinition> vahaButtons = new ArrayList<ButtonDefinition>();
        vahaButtons.add(new ButtonDefinition(R.string.kalibracia, "vaha_nastavenie/vaha_nastavenie.html"));
        vahaButtons.add(new ButtonDefinition(R.string.meranie, "vaha_meranie/vaha_meranie.html"));
        vahaButtons.add(new ButtonDefinition(R.string.vyhodnotenie, R.layout.vaha_vyhodnotenie));
        MenuContent vahaMenu = new MenuContent(R.drawable.vaha_logo, R.string.vaha, vahaButtons);

        //TLAKOMER MENU
        List<ButtonDefinition> tlakomerButtons = new ArrayList<ButtonDefinition>();
        tlakomerButtons.add(new ButtonDefinition(R.string.meranie, "tlakomer/tlakomer.html"));
        tlakomerButtons.add(new ButtonDefinition(R.string.vyhodnotenie, R.layout.tlakomer_vyhodnotenie));
        MenuContent tlakomerMenu = new MenuContent(R.drawable.tlak_logo, R.string.tlakomer, tlakomerButtons);

        //ZARIADENIA MENU
        List<ButtonDefinition> zariadeniaButtons = new ArrayList<ButtonDefinition>();
        zariadeniaButtons.add(new ButtonDefinition(R.string.glukomer, glukomerMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.vaha, vahaMenu));
        zariadeniaButtons.add(new ButtonDefinition(R.string.tlakomer, tlakomerMenu));
        MenuContent zariadeniaMenu = new MenuContent(R.drawable.set_logo, R.string.zariadenia, zariadeniaButtons);

        //MAIN MENU
        List<ButtonDefinition> mainMenuButtons = new ArrayList<ButtonDefinition>();
        mainMenuButtons.add(new ButtonDefinition(R.string.som_diabetikom, R.layout.som_diabetikom_layout));
        mainMenuButtons.add(new ButtonDefinition(R.string.about_eHealth, "lekar/data_lekar.html"));
        mainMenuButtons.add(new ButtonDefinition(R.string.zariadenia, zariadeniaMenu));
        mainMenuButtons.add(new ButtonDefinition(R.string.o_programe_title, R.layout.o_programe_layout));
//        mainMenuButtons.add(new ButtonDefinition(R.string.exit));
        return new MenuContent(R.drawable.logo, -1, mainMenuButtons);//-1 no title resource
    }
}
