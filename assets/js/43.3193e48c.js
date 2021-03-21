(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{560:function(v,_,t){"use strict";t.r(_);var P=t(16),a=Object(P.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("UDP属于传输层协议。根据定义，UDP是无连接的不可靠传输协议，只在IP数据报服务之上增加了很少一点的功能。既然UDP也是不可靠的，为什么不直接使用IP呢？每台主机上都运行着很多进程，虽然IP协议能够将数据报交给目标主机，但是如果仅靠IP协议，目标主机是不知道将解析后的数据报交给谁处理。所以通信的真正端点并不是主机而是主机中的进程，传输层使用端口来标识这些进程。")]),v._v(" "),t("h2",{attrs:{id:"udp概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp概述"}},[v._v("#")]),v._v(" UDP概述")]),v._v(" "),t("p",[v._v("由于IP协议是不可靠的，可能会出现丢包等，所谓不可靠不一定就是“不好的”，可靠不一定就是“好的”。可靠传输是要付出额外代价的，当这种代价太大时，可能进行不可靠传输更好一些。所以，为了不同的需求，传输层同时提供可靠与不可靠的协议，如UDP就是不可靠协议，TCP是可靠的协议。")]),v._v(" "),t("p",[v._v("UDP有下面几个特点：")]),v._v(" "),t("ul",[t("li",[v._v("UDP是无连接的，关于这个“连接”如何理解，后面讲TCP的文章中再分析。")]),v._v(" "),t("li",[v._v("UDP使用尽最大努力交付，即不可靠交互。")]),v._v(" "),t("li",[v._v("UDP是面向报文的，发送方对应用程序交下来的报文既不合并，也不拆分，就交给IP层了，保留了数据边界；同样地，接收方协议栈解析IP数据报后就包UDP报文交给上层应用了。所以，一般IP层的分片是对UDP的大报文进行处理。")]),v._v(" "),t("li",[v._v("UDP没有拥塞控制，关于拥塞控制也参考后面TCP的文章。")]),v._v(" "),t("li",[v._v("UDP支持一对一，一对多，多对一和多对多的通信。")]),v._v(" "),t("li",[v._v("UDP的首部开销小，只有8个字节。")])]),v._v(" "),t("h2",{attrs:{id:"udp报文首部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp报文首部"}},[v._v("#")]),v._v(" UDP报文首部")]),v._v(" "),t("p",[v._v("UDP的首部格式如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210119203914898.png",alt:"image-20210119203914898"}})]),v._v(" "),t("p",[v._v("UDP报文首部很简单，就四个字段：")]),v._v(" "),t("ul",[t("li",[v._v("源端口：在需要对方回信时使用，不需要时可用全0。")]),v._v(" "),t("li",[v._v("目的端口：报文交付时使用，当接收方发现UDP发现收到的报文中的目的端口号不正确（即不存在对应端口号的应用进程），就丢弃该报文。并由ICMP协议发送端口不可达差错报文给发送方。")]),v._v(" "),t("li",[v._v("长度：最小值为8，即只有首部。")]),v._v(" "),t("li",[v._v("检验和：检测UDP用户数据报在传输过程中是否有错，有错就丢弃。")])]),v._v(" "),t("p",[v._v("注意，上图中有一个伪首部。所谓的伪首部，是因为这部分数据并不是UDP真正的首部，是为了计算校验和，临时添加在UDP用户数据报前面，得到一个临时的UDP用户数据报。注意，这个伪首部，既不向上递送也不向下递交，而仅仅是为了计算校验和。")])])}),[],!1,null,null,null);_.default=a.exports}}]);