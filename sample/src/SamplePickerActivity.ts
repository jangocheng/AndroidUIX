
///<reference path="../../dist/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module sample.app {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;
    import R = sample.app.R;

    export class SamplePickerActivity extends ActionBarActivity {
        onCreate():void {
            super.onCreate();
            this.setTitle('Picker');
            this.setContentView(R.layout.sample_picker);
        }
    }
}