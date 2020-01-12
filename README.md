# `install-linuxdeployqt-action`

Installing LinuxDeployQt on Github Actions workflows manually is the worst.

See linuxdeploy utility details on [LinuxDeployQt project](https://github.com/probonopd/linuxdeployqt) home.

You know what's easier than dealing with that? Just using this:
```yml
    - name: Install LinuxDeployQt
      uses: miurahr/install-linuxdeployqt-action@v0
```

All done.

## More info

The path where 'linuxdeployqt-continuous-x86_64.AppImage' located is added to your `path` environment variable.

This action is distributed under the [MIT license](LICENSE).

By using this action, you agree to the terms of linuxdeployqt and Qt's licensing.
See [Qt licensing](https://www.qt.io/licensing/) and [Licenses used by Qt](https://doc.qt.io/qt-5/licenses-used-in-qt.html). 
