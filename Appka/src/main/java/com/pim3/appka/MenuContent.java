package com.pim3.appka;

import android.os.Parcel;
import android.os.Parcelable;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by loucher on 11/8/13.
 */
public class MenuContent implements Parcelable {
    private int logoResource;
    private List<ButtonDefinition> buttonDefinitionList;

    public MenuContent(int logoResource, List<ButtonDefinition> buttonDefinitionList) {
        this.logoResource = logoResource;
        this.buttonDefinitionList = buttonDefinitionList;
    }

    public int getLogoResource() {
        return logoResource;
    }

    public List<ButtonDefinition> getButtonDefinitionList() {
        return buttonDefinitionList;
    }


    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {

    }
}