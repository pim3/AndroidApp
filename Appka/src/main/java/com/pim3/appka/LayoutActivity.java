package com.pim3.appka;

import android.app.Activity;
import android.os.Bundle;

/**
 * Created by loucher on 11/8/13.
 */
public class LayoutActivity extends Activity{

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        int layoutResource = getIntent().getIntExtra("layoutResource",-1);
        setContentView(layoutResource);
    }
}
