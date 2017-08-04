# Daily 日.常
一个结合单向历 + DaysMaster 的日历 WebApp

### [DEMO](http://zhangbinliu.me/2017-07-12-to-myhz/)

### Preview
<img src="screenshot.png" height="500" align="center"/>

## Design:

- 整体颜色可以正能量一点，需要找到好一点的 colorset.
  - [Colors.co](https://coolors.co/)
  - [Marvel](https://marvelapp.com/styleguide/design/color-scheme)
  - [Ego Icon](http://ego-icons.com/)

- 以后可以更换整体颜色 colorset?
- 简单点的话，可以背景都是预设的纯色, 字体也是预设的中英文字体
- 可以配置背景图片，每日数据
- DatePicker: [airbnb-react-date](https://github.com/airbnb/react-dates/blob/0eb0d046171239dd5efa06da7909c7fc34eb0b6f/src/components/SingleDatePickerInput.jsx) or [react-day-picker](http://react-day-picker.js.org/) (试了下这个，对于移动端兼容性比较低...)
- [x] 图片背景可以上传到 七牛云 进行 cdn 加速
- [ ] 根据不同的图片尺寸微调样式，达到最好的显示效果
- [ ] 渐变的图片背景，可以考虑 P2

### Header
Daily  日常

- 日期 — 点击放大

跳到那天

规则：
- [ ] 特定日期 `*.12` 特殊显示
- [x] 2.12 开始，之前的基本灰掉
- [ ] 未到的显示灿烂的明天

### Body

- [x] 显示日期，当天的事情或者照片，现在暂时放前端

- [ ] 之后可以 服务端显示更新数据

- [ ] 可以考虑 4sqi API，统计一下 with 数据；

- [ ] 如果引用的话字数超了，clamp(4) 点击再上滑放大; 或者字体根据字数多少变小

### Footer

- [x] Made with ❤️ by ZBL


### Techstack
- [ ] Consider using `redux` to store data, like bg_img_url, quotes, days, etc...


---
# Notes

```css
display: flex;
flex-flow: column/row wrap;
justify-content: center; // row: horizontal center | column: veritical center
align-items: center; // row: vertical center | column: horizontal center
```


