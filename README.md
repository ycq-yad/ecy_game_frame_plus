# 特别说明  
这是ecy_game_framework项目的升级版本，增加了oppo,vivo,百度等平台的接入代码和相关配置信息，优化和调整了代码目录结构，以及相关命名，方便使用者快速接入小游戏平台。增加了blib库，方便使用者理解和使用相关通用工具代码。 旧版本任然可用，如果想使用旧版本请访问https://github.com/ycq-yad/ecy_game_framework
# 一.项目介绍
.H5小游戏框架  
.作者：小明太极-衍生内容部-成都游戏部  
.基础库完成时间:2020-04-20  
.封装内容  
     H5小游戏框架,用于laya开发小游戏，集成了签到，邀请，关卡选择，成功和失败的结算界面，游戏导出界面。集成平台接入管理类（微信，qq，字节跳动,oppo,vivo,百度等）。集成工具类（后台交互，音乐管理，和一些通用方法）。集成关卡实现的基类以及部分关卡逻辑 。  适用于二选一类型的探险小游戏。
   
# 二.使用说明 
  blib目录下是一些通用的工具代码，使用方法可以参考bLib.d.ts中的注释，也可以阅读bLib.js中的源码信息。  
  bin/js/bundle.js   完整编译后的文件  
  bin/configs		 通用配置，以及相关平台的特殊配置文件  
  platform			 该目录是不同平台的特殊接口描述。  
  弹窗类继承PopBaseScene，场景类继承BaseUIScene
  HttpMgr.ts   网络处理工具  
  GameData.ts  处理游戏通用数据  
  GameDataManager.ts 处理玩家游戏数据  
  SoundManager.ts   音效管理  
  ConfigManager.ts  游戏配置加载  
  ViewChangeManager.ts 游戏特殊界面切换  
  GamePreLoadingView.ts 游戏加载界面  
  AnimationManager.ts  通用动画处理文件  
  InviteManager.ts  邀请数据管理  
  LevelManager.ts   通用关卡切换逻辑  
  src\script\views\game\level 该目录下为关卡处理文件  
  src\script\views\game\wecat 该目录下为微信游戏导出的通用处理文件  
  AddPsView.ts 增加体力界面  
  CommonView.ts 货币显示界面  
  LevelView.ts 关卡选择界面  
  SignView.ts 签到界面  
  src\script\views\game\settlement 该目录为失败和成功的结算界面，增加了各个平台接入的特殊处理。  
  GameHomeView.ts 游戏主界面  
  GameView.ts 游戏界面  
  
 # 如有不明白的地方可以邮件咨询  
   .邮箱地址:525508243@qq.com  
   
  
  

