package com.mynewapp3

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return ReactActivityDelegate(this, mainComponentName)
    }

    override fun getMainComponentName(): String {
        return "MyNewApp3"
    }
}
