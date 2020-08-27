# star-light

## info
用于制作web，h5的canvas动画、电影等，其中主要包含场景和物件，通过场景来控制物件，通过切换场景来形成
动画。每个场景和物件都具有自己的生命周期，包含enterEvent,actionEvent,leaveEvent 分别为进入事件
、持续事件、离开事件。一个场景下可以包含多个物件并定义不同的事件行为形成复杂的视觉盛宴。

## start

```
yarn install 

yarn run dev
```

## warn

1. 进入下一个场景时通常不关注，上一个场景物体是否退出完毕。