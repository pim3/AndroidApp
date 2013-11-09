package com.pim3.appka;

import android.os.Parcel;
import android.os.Parcelable;

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

    protected MenuContent(Parcel in) {
        logoResource = in.readInt();
        buttonDefinitionList = new ArrayList<ButtonDefinition>();
        in.readList(buttonDefinitionList, null);
    }

    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel dest, int flags) {
        dest.writeInt(logoResource);
        dest.writeList(buttonDefinitionList);
    }

    public static final Parcelable.Creator<MenuContent> CREATOR = new Parcelable.Creator<MenuContent>() {
        public MenuContent createFromParcel(Parcel in) {
            return new MenuContent(in);
        }

        public MenuContent[] newArray(int size) {
            return new MenuContent[size];
        }
    };
}