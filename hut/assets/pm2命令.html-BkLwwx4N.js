import{_ as t,c as e,o as n,b as a}from"./app-Cmr-zA4R.js";const o={},l=a(`<p>pm2 命令 速查</p><p>用法:</p><pre><code>pm2 [cmd] app
</code></pre><p>选项:</p><pre><code>-V, --version                                                输出版本号
-v --version                                                 打印PM2版本
-s --silent                                                  隐藏所有消息
--ext &lt;extensions&gt;                                           仅监视此文件扩展
-n --name &lt;name&gt;                                             在进程列表中设置一个名称
-m --mini-list                                               显示无格式化的压缩列表
--interpreter &lt;interpreter&gt;                                  设置用于执行应用程序的特定解释器，默认为：node
--interpreter-args &lt;arguments&gt;                               设置传递给解释器的参数（--node-args的别名） 
--node-args &lt;node_args&gt;                                      要传递给节点的空间分隔的参数
-o --output &lt;path&gt;                                           为stdout指定日志文件
-e --error &lt;path&gt;                                            为stderr指定日志文件
-l --log [path]                                              指定记录文件，该文件会收集stdout和stderr
--filter-env [envs]                                          过滤掉输出包含提供字符串的全局值
</code></pre><p>(默认: )</p><pre><code>--log-type &lt;type&gt;                                            指定日志输出样式（默认情况下，JSON可选）        
--log-date-format &lt;date format&gt;                              将自定义前缀时间戳添加到日志
--time                                                       启用时间日志记录
--disable-logs                                               禁用所有日志存储
--env &lt;environment_name&gt;                                     指定必须注入生态系统文件的哪些环境变量
-a --update-env                                              使用重新启动/重新加载更新环境 (-A &lt;=&gt; Apply)
-f --force                                                   强迫行动
-i --instances &lt;number&gt;                                      启动[编号]实例（对于网络应用程序）（负载平衡）    
--parallel &lt;number&gt;                                          并行操作的数量（用于重启/重新加载）
--shutdown-with-message                                      使用process.send（&#39;shutdown&#39;）而不是process.kill（pid，sigint）的应用程序
-p --pid &lt;pid&gt;                                               指定PID文件
-k --kill-timeout &lt;delay&gt;                                    在发送最终的Sigkill信号之前延迟到过程
--listen-timeout &lt;delay&gt;                                     聆听应用程序重新加载时的超时
--max-memory-restart &lt;memory&gt;                                如果超出了存储量（以字节为单位），则重新启动应用程序
--restart-delay &lt;delay&gt;                                      在重新启动之间指定延迟（以毫秒为单位）
--exp-backoff-restart-delay &lt;delay&gt;                          在重新启动之间指定延迟（以毫秒为单位）
-x --execute-command                                         使用Fork系统执行程序
--max-restarts [count]                                       只重新启动脚本计数时间
-u --user &lt;username&gt;                                         生成启动脚本时定义用户
--uid &lt;uid&gt;                                                  使用&lt;uid&gt;权限运行目标脚本
--gid &lt;gid&gt;                                                  使用&lt;gid&gt;权限运行目标脚本
--namespace &lt;ns&gt;                                             在指定的命名空间中启动应用程序
--cwd &lt;path&gt;                                                 从路径&lt;cwd&gt;运行目标脚本
--hp &lt;home path&gt;                                             生成启动脚本时定义主路径
--wait-ip                                                    覆盖Systemd脚本等待完全互联网连接启动PM2
--service-name &lt;name&gt;                                        生成启动脚本时定义服务名称
-c --cron &lt;cron_pattern&gt;                                     基于Cron模式重新启动运行过程
-c --cron-restart &lt;cron_pattern&gt;                             （别名）根据Cron模式重新启动运行进程
-w --write                                                   在本地文件夹中写入配置
--no-daemon                                                  如果它不存在，请在前台运行PM2守护程序
--source-map-support                                         强制源地图支持
--only &lt;application-name&gt;                                    使用JSON声明，允许仅在一个应用程序上行动
--disable-source-map-support                                 强制源地图支持
--wait-ready                                                 询问PM2等待您的应用程序的准备好事件
--merge-logs                                                 合并来自不同实例的日志，但保持错误和分开
--watch [paths]                                              监视更改的应用程序文件夹(默认值:)
--ignore-watch &lt;folders|files&gt;                               忽略（名称或正则表达式）的路径列表
--watch-delay &lt;delay&gt;                                        更改文件后指定重启延迟 (--watch-delay 4 (in sec) or 4000ms)
--no-color                                                   跳过颜色
--no-vizion                                                  启动不带Vizion功能的应用程序（版本控制控制）
--no-autorestart                                             在没有自动重启的情况下启动应用程序
--no-treekill                                                只杀死主要过程，而不是独立的孩子
--no-pmx                                                     在没有PMX的情况下启动一个应用程序
--no-automation                                              在没有PMX的情况下启动一个应用程序
--trace                                                      启用与KM的交易跟踪
--disable-trace                                              用KM禁用交易跟踪
--sort &lt;field_name:sort&gt;                                     根据字段的名称排序过程
--attach                                                     启动/重启/停止/重新加载后附加日志记录
--v8                                                         启用V8数据收集
--event-loop-inspector                                       在PMX中启用事件循环检查器转储
--deep-monitoring                                            启用所有监控工具(equivalent to --v8 --event-loop-inspector --trace)
-h, --help                                                   输出使用信息
</code></pre><p>命令:</p><pre><code>start [options] [name|namespace|file|ecosystem|id...]        启动和守护到应用程序
trigger &lt;id|proc_name|namespace|all&gt; &lt;action_name&gt; [params]  触发过程动作
deploy &lt;file|environment&gt;                                    部署您的JSON.
startOrRestart &lt;json&gt;                                        启动或重新启动JSON文件
startOrReload &lt;json&gt;                                         开始或优雅地重新加载JSON文件
pid [app_name]                                               返回[app_name]或全部的pid
create                                                       返回[app_name]或全部的pid
startOrGracefulReload &lt;json&gt;                                 开始或优雅地重新加载JSON文件
stop [options] &lt;id|name|namespace|all|json|stdin...&gt;         停止一个过程
restart [options] &lt;id|name|namespace|all|json|stdin...&gt;      重新启动一个过程
scale &lt;app_name&gt; &lt;number&gt;                                    取决于Total_Numbe的群集模式中的过程上/下降r param
profile:mem [time]                                           样本PM2堆内存
profile:cpu [time]                                           个人资料PM2 CPU.
reload &lt;id|name|namespace|all&gt;                               重新加载流程（请注意其用于应用http / https的应用程序）
id &lt;name&gt;                                                    按名称获取进程ID
inspect &lt;name&gt;                                               检查一个过程
delete|del &lt;name|id|namespace|script|all|json|stdin...&gt;      停止并删除PM2进程列表的进程
sendSignal &lt;signal&gt; &lt;pm2_id|name&gt;                            向目标过程发送系统信号
ping                                                         ping pm2守护进程 - 如果不是，它将推出它
updatePM2                                                    使用本地PM2更新内存中PM2
update                                                       (别名)使用本地PM2更新内存中PM2
install|module:install [options] &lt;module|git:/&gt;              安装或更新模块并永久运行它
module:update &lt;module|git:/&gt;                                 更新模块并永久运行它
module:generate [app_name]                                   在当前文件夹中生成示例模块
uninstall|module:uninstall &lt;module&gt;                          停止并卸载模块
package [target]                                             检查和包焦油类型模块
publish|module:publish [options] [folder]                    发布您目前的模块
set [key] [value]                                            设置指定的Config &lt;key&gt; &lt;value&gt;
multiset &lt;value&gt;                                             Multiset Eg例如“key1 Val1键2 Val2
get [key]                                                    获取&lt;key&gt;的值
conf [key] [value]                                           获取/设置模块配置值
config &lt;key&gt; [value]                                         获取/设置模块配置值
unset &lt;key&gt;                                                  清除指定的Config &lt;key&gt;
report                                                       为https://github.com/unitech/pm2/issues提供完整的PM2报告   
link [options] [secret] [public] [name]                      链接PM2监控仪表板
unlink                                                       与PM2监控仪表板取消链接
monitor [name]                                               监控目标过程
unmonitor [name]                                             未解释目标过程
open                                                         打开PM2监控仪表板
plus|register [options] [command] [option]                   启用PM2 Plus
login                                                        登录PM2 Plus Logout
logout                                                       从PM2 Plus退出
dump|save [options]                                          转储稍后将其复活的所有流程
cleardump                                                    创建空转储文件
send &lt;pm_id&gt; &lt;line&gt;                                          将 stdin 发送到&lt;pm_id&gt;
attach &lt;pm_id&gt; [comman]                                      将 stdin / stdout  附加到由&lt;pm_id&gt;标识的应用程序
resurrect                                                    复活以前倾倒的流程
unstartup [platform]                                         禁用PM2启动钩子
startup [platform]                                           启用PM2启动挂钩
logrotate                                                    复制默认的Logotate配置
ecosystem|init [mode]                                        生成流程conf文件。 （mode = null或简单）
reset &lt;name|id|all&gt;                                          重置过程的计数器
describe &lt;name|id&gt;                                           描述一个过程的所有参数
desc &lt;name|id&gt;                                               (别名)描述一个过程的所有参数
info &lt;name|id&gt;                                               (别名)描述一个过程的所有参数
show &lt;name|id&gt;                                               (别名)描述一个过程的所有参数
env &lt;id&gt;                                                     列出进程ID的所有环境变量
list|ls                                                      列出所有进程
l                                                            (别名)列出所有进程
ps                                                           (别名)列出所有进程
status                                                       (别名)列出所有进程
jlist                                                        列出JSON格式的所有进程
sysmonit                                                     启动系统监控守护程序
slist|sysinfos [options]                                     列出JSON中的系统信息
prettylist                                                   打印json在一个接驳的json中
monit                                                        启动终端监测
imonit                                                       启动遗留终端监测
dashboard|dash                                               使用监控和日志启动仪表板
flush [api]                                                  冲洗日志
</code></pre><p><a href="https://github.com/Unitech/pm2" target="_blank" rel="noopener noreferrer">Github Pm2</a></p>`,10),s=[l];function i(r,p){return n(),e("div",null,s)}const d=t(o,[["render",i],["__file","pm2命令.html.vue"]]),c=JSON.parse(`{"path":"/posts/pm2%E5%91%BD%E4%BB%A4.html","title":"pm2命令","lang":"zh-CN","frontmatter":{"title":"pm2命令","tags":["pm2","守护进程"],"categories":["备忘录"],"copyright":true,"abbrlink":18509,"date":"2021-03-20T13:59:07.000Z","top":null,"description":"pm2 命令 速查 用法: 选项: (默认: ) 命令: Github Pm2","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/posts/pm2%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"pm2命令"}],["meta",{"property":"og:description","content":"pm2 命令 速查 用法: 选项: (默认: ) 命令: Github Pm2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"pm2"}],["meta",{"property":"article:tag","content":"守护进程"}],["meta",{"property":"article:published_time","content":"2021-03-20T13:59:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pm2命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T13:59:07.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":6.3,"words":1891},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"_posts/pm2命令.md","categoryList":[{"id":"e2a2ff","sort":10000,"name":"_posts"}]}`);export{d as comp,c as data};
