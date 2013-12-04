package com.pim3.appka;

import android.app.Activity;
import android.os.Bundle;

/**
 * Created by loucher on 11/8/13.
 */
public class LayoutActivity extends Activity {

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_left);
        int layoutResource = getIntent().getIntExtra("layoutResource", -1);
        setContentView(layoutResource);
    }

    //setting up transition animation when current intent is paused ( pressed Back button)
    @Override
    protected void onPause() {
        super.onPause();
        //show transition animation only when this is not main menu
        overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_right);
    }
}
