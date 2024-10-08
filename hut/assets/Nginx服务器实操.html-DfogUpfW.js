import{_ as s,c as n,o as a,a as i}from"./app-DBosJvKb.js";const e={},l=i(`<blockquote><p>Nginx 是非同步框架的網頁伺服器，也可以用作反向代理、負載平衡器和 HTTP 快取。 总之 Nginx 非常 🐮</p></blockquote><h3 id="nginx-安装" tabindex="-1"><a class="header-anchor" href="#nginx-安装"><span>Nginx 安装</span></a></h3><p>首先在官网(http://nginx.org/)[http://nginx.org/] 下载压缩包,解压到文件夹即可</p><h3 id="启动-nginx" tabindex="-1"><a class="header-anchor" href="#启动-nginx"><span>启动 Nginx</span></a></h3><p>在文件夹下打开控制台 执行命令 (千万不要启动 nginx.exe! 千万不要启动 nginx.exe! 千万不要启动 nginx.exe!)</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开 (http://localhost)[http://localhost],如果可以看到 Welcome to nginx! 说明安装成功</p><h3 id="nginx-命令" tabindex="-1"><a class="header-anchor" href="#nginx-命令"><span>Nginx 命令</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>nginx            # 启动 nginx</span></span>
<span class="line"><span>nginx -s stop    # 快速关机</span></span>
<span class="line"><span>nginx -s quit    # 正常关机</span></span>
<span class="line"><span>nginx -s reload  # 重新加载配置</span></span>
<span class="line"><span>nginx -s reopen  # 重新打开日志文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件"><span>Nginx 配置文件</span></a></h4><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#user  nobody;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span># 进程的ID号</span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #keepalive_timeout  0;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span>    # 每个 server 相当于一个站点</span></span>
<span class="line"><span>    # server {</span></span>
<span class="line"><span>    # 监听端口</span></span>
<span class="line"><span>    #     listen       80;</span></span>
<span class="line"><span>    # 域名</span></span>
<span class="line"><span>    #     server_name  localhost;</span></span>
<span class="line"><span>    # 编码</span></span>
<span class="line"><span>    #     #charset koi8-r;</span></span>
<span class="line"><span>    # 日志存放路径</span></span>
<span class="line"><span>    #     #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span>    # 路由</span></span>
<span class="line"><span>    #     location / {</span></span>
<span class="line"><span>    #         root   html;</span></span>
<span class="line"><span>    #         index  index.html index.htm;</span></span>
<span class="line"><span>    #     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #     #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #     # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>    #     #</span></span>
<span class="line"><span>    #     error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    #     location = /50x.html {</span></span>
<span class="line"><span>    #         root   html;</span></span>
<span class="line"><span>    #     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #     # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>    #     #</span></span>
<span class="line"><span>    #     #location ~ \\.php$ {</span></span>
<span class="line"><span>    #     #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>    #     #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>    #     #</span></span>
<span class="line"><span>    #     #location ~ \\.php$ {</span></span>
<span class="line"><span>    #     #    root           html;</span></span>
<span class="line"><span>    #     #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>    #     #    fastcgi_index  index.php;</span></span>
<span class="line"><span>    #     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>    #     #    include        fastcgi_params;</span></span>
<span class="line"><span>    #     #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #     # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>    #     # concurs with nginx&#39;s one</span></span>
<span class="line"><span>    #     #</span></span>
<span class="line"><span>    #     #location ~ /\\.ht {</span></span>
<span class="line"><span>    #     #    deny  all;</span></span>
<span class="line"><span>    #     #}</span></span>
<span class="line"><span>    # }</span></span>
<span class="line"><span>    #############################################################################</span></span>
<span class="line"><span>    ################################# 代理 #######################################</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        # 监听的端口</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        # 域名</span></span>
<span class="line"><span>        server_name  a.localhost;</span></span>
<span class="line"><span>        # 编码</span></span>
<span class="line"><span>        charset utf-8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # root   html;</span></span>
<span class="line"><span>            # index  index.html index.htm;</span></span>
<span class="line"><span>            # 代理的 URL</span></span>
<span class="line"><span>            proxy_pass   http://127.0.0.1:3001;</span></span>
<span class="line"><span>            # 客户端真实域名和端口号</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            # 客户端真实IP</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            # 包含代理IP 真实IP</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>            proxy_set_header X-NginX-Proxy true;</span></span>
<span class="line"><span>            #给请求头中添加客户端的Cookie</span></span>
<span class="line"><span>            proxy_set_header Cookie $http_cookie;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ \\.php$ {</span></span>
<span class="line"><span>        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ \\.php$ {</span></span>
<span class="line"><span>        #    root           html;</span></span>
<span class="line"><span>        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>        #    fastcgi_index  index.php;</span></span>
<span class="line"><span>        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>        #    include        fastcgi_params;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>        # concurs with nginx&#39;s one</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ /\\.ht {</span></span>
<span class="line"><span>        #    deny  all;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  b.localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # root   html;</span></span>
<span class="line"><span>            # index  index.html index.htm;</span></span>
<span class="line"><span>            proxy_pass   http://127.0.0.1:3002;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  c.localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # root   html;</span></span>
<span class="line"><span>            # index  index.html index.htm;</span></span>
<span class="line"><span>            proxy_pass   http://127.0.0.1:3003;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  d.localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # root   html;</span></span>
<span class="line"><span>            # index  index.html index.htm;</span></span>
<span class="line"><span>            proxy_pass   http://127.0.0.1:3004;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ##################################负载均衡#######################################</span></span>
<span class="line"><span>    upstream mysvr {</span></span>
<span class="line"><span>        server 127.0.0.1:3001 weight=1;</span></span>
<span class="line"><span>        server 127.0.0.1:3002 weight=2;</span></span>
<span class="line"><span>        server 127.0.0.1:3003 weight=3;</span></span>
<span class="line"><span>        server 127.0.0.1:3004 weight=4;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  e.localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            # root   html;</span></span>
<span class="line"><span>            # index  index.html index.htm;</span></span>
<span class="line"><span>            proxy_pass   http://mysvr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ##############################################################################</span></span>
<span class="line"><span>    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #server {</span></span>
<span class="line"><span>    #    listen       8000;</span></span>
<span class="line"><span>    #    listen       somename:8080;</span></span>
<span class="line"><span>    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    location / {</span></span>
<span class="line"><span>    #        root   html;</span></span>
<span class="line"><span>    #        index  index.html index.htm;</span></span>
<span class="line"><span>    #    }</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HTTPS server</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #server {</span></span>
<span class="line"><span>    #    listen       443 ssl;</span></span>
<span class="line"><span>    #    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span>    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #    location / {</span></span>
<span class="line"><span>    #        root   html;</span></span>
<span class="line"><span>    #        index  index.html index.htm;</span></span>
<span class="line"><span>    #    }</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[l];function c(d,r){return a(),n("div",null,p)}const t=s(e,[["render",c],["__file","Nginx服务器实操.html.vue"]]),m=JSON.parse(`{"path":"/Nginx%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%9E%E6%93%8D.html","title":"Nginx服务器实操","lang":"zh-CN","frontmatter":{"title":"Nginx服务器实操","tags":["nginx","nginx 代理","nginx 安装","nginx 命令","windows"],"categories":["Nginx"],"copyright":true,"abbrlink":35107,"date":"2021/02/23 10:42:47","createTime":"2021/02/23 10:42:47","top":null,"description":"Nginx 是非同步框架的網頁伺服器，也可以用作反向代理、負載平衡器和 HTTP 快取。 总之 Nginx 非常 🐮 Nginx 安装 首先在官网(http://nginx.org/)[http://nginx.org/] 下载压缩包,解压到文件夹即可 启动 Nginx 在文件夹下打开控制台 执行命令 (千万不要启动 nginx.exe! 千万不要启...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/Nginx%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%9E%E6%93%8D.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"Nginx服务器实操"}],["meta",{"property":"og:description","content":"Nginx 是非同步框架的網頁伺服器，也可以用作反向代理、負載平衡器和 HTTP 快取。 总之 Nginx 非常 🐮 Nginx 安装 首先在官网(http://nginx.org/)[http://nginx.org/] 下载压缩包,解压到文件夹即可 启动 Nginx 在文件夹下打开控制台 执行命令 (千万不要启动 nginx.exe! 千万不要启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"nginx 代理"}],["meta",{"property":"article:tag","content":"nginx 安装"}],["meta",{"property":"article:tag","content":"nginx 命令"}],["meta",{"property":"article:tag","content":"windows"}],["meta",{"property":"article:published_time","content":"2021-02-23T02:42:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx服务器实操\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-23T02:42:47.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Nginx 安装","slug":"nginx-安装","link":"#nginx-安装","children":[]},{"level":3,"title":"启动 Nginx","slug":"启动-nginx","link":"#启动-nginx","children":[]},{"level":3,"title":"Nginx 命令","slug":"nginx-命令","link":"#nginx-命令","children":[]}],"readingTime":{"minutes":2.74,"words":823},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"Nginx服务器实操.md","categoryList":[]}`);export{t as comp,m as data};
