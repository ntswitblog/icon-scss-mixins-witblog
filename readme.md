# WIT Icon Mixins(SCSS)

Collection of SCSS icon mixins.
See [blog article](http://wit.nts-corp.com/2017/10/31/4972)

## SAMPLE
* Basic Sample
    * https://ntswitblog.github.io/icon-scss-mixins-witblog/sample/sample.html
* If your css file includes `*, *:before, *:after { box-sizing: border-box }` code (ex. bootstrap.css), refer to this sample.
    * https://ntswitblog.github.io/icon-scss-mixins-witblog/sample/sample_ver_border_box.html


## ICON Mixin Lists

### ICON not required parent DOM

* X ICON
* Triangle ICON
* Angle ICON
* Arrow ICON

HTML example :
```
<i role="img" class="icon_cancel" aria-label="cancel icon"></i>
```

### ICON required parent DOM

* Menu ICON
* More ICON

HTML example :
```
<button type="button" class="button_menu" aria-label="menu">
    <i class="icon_menu"></i>
</button>
```

## SCSS Mixin File

If you don't need to change icon's css property values, import the following files.
* Basic Sample :
```
@import "[path]/icons_basic";
```

* If your css file includes `*, *:before, *:after { box-sizing: border-box }` code :
```
@import "[path]/icons_basic_ver_border_box";
```

If you want icons to change icon's size or color, import the following files.
* Basic Sample :
```
@import "[path]/icons_default";
@import "[path]/icons_for_change_size";
@import "[path]/icons_for_change_color";
```

* If your css file includes `*, *:before, *:after { box-sizing: border-box }` code :
```
@import "[path]/icons_default_ver_border_box";
@import "[path]/icons_for_change_size";
@import "[path]/icons_for_change_color";
```

## INSTALLATION

You can install it via npm:
```
npm install --save-dev icon-scss-mixins-witblog
```
Then, add the following code to your scss file.
```
@import '../../node_modules/icon-scss-mixins-witblog/mixins/[scss mixin file name]'
```

## LICENSE

LICENSE MIT
See [LICENSE.md](https://github.com/ntswitblog/icon-scss-mixins-witblog/blob/master/LICENSE.md)

## CHANGELOG

See [releases](https://github.com/ntswitblog/icon-scss-mixins-witblog/releases)
