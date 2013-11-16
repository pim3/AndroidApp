package com.pim3.appka;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by loucher on 11/8/13.
 */
public class ButtonDefinition implements Parcelable {
    private int stringResource = -1;
    private ButtonType buttonType = null;
    private String url = "error";
    private MenuContent menuContent = null;
    private int layoutResource = -1;

    public ButtonDefinition(int stringResource, String url) {
        this.stringResource = stringResource;
        this.url = url;
        buttonType = ButtonType.WEBVIEW;
    }

    public ButtonDefinition(int stringResource, int layoutResource) {
        this.layoutResource = layoutResource;
        buttonType = ButtonType.LAYOUT;
    }

    public ButtonDefinition(int stringResource, MenuContent menuContent) {
        this.stringResource = stringResource;
        this.menuContent = menuContent;
        buttonType = ButtonType.MENU;
    }

    public ButtonDefinition(int stringResource){
        this.stringResource = stringResource;
        buttonType = ButtonType.EXIT;
    }

    public int getStringResource() {
        return stringResource;
    }

    public ButtonType getButtonType() {
        return buttonType;
    }

    public String getUrl() {
        return url;
    }

    public MenuContent getMenuContent() {
        return menuContent;
    }

    public int getLayoutResource() {
        return layoutResource;
    }

    protected ButtonDefinition(Parcel in) {
        stringResource = in.readInt();
        buttonType = (ButtonType) in.readValue(null);
        url = in.readString();
        menuContent = in.readParcelable(MenuContent.class.getClassLoader());
        layoutResource = in.readInt();
    }

    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel dest, int flags) {
        dest.writeInt(stringResource);
        dest.writeValue(buttonType);
        dest.writeString(url);
        dest.writeParcelable(menuContent, flags);
        dest.writeInt(layoutResource);
    }

    public static final Parcelable.Creator<ButtonDefinition> CREATOR = new Parcelable.Creator<ButtonDefinition>() {
        public ButtonDefinition createFromParcel(Parcel in) {
            return new ButtonDefinition(in);
        }

        public ButtonDefinition[] newArray(int size) {
            return new ButtonDefinition[size];
        }
    };
}