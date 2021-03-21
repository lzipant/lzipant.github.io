(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{559:function(v,_,t){"use strict";t.r(_);var a=t(16),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("网络层位于经典计算机网络分层的第三层，封装传输层的数据然后递交给数据链路层进行处理。在数据链路层中，不管是集线器还是交换机，面对广播帧时，都会转发到所有的端口。如果所有的设备都运行在这样的网络中，估计数据链路上传送的全是广播帧了，可见这样的效率是非常低的。所以，可以使用路由器来隔绝广播，从而形成多个不同的广播域（子网）。")]),v._v(" "),t("h2",{attrs:{id:"ip地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[v._v("#")]),v._v(" IP地址")]),v._v(" "),t("p",[v._v("路由器可以连接多个子网，则需要一种机制来表示与哪个子网进行通信，目前采用的这种机制就是IP地址。当设备之间进行通信时，在网络层使用IP地址，发送方先判断接受方是否在同一个网络内，如果是，则直接发送给目标接收方；如果不是，则需要发送给网关。设备也需要一种策略来判断目标IP地址是否属于同一个网络，这种策略叫做"),t("strong",[v._v("子网掩码")]),v._v("。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("很多路由器除了拥有路由功能，同时扮演着链路层交换机的角色。")])]),v._v(" "),t("p",[v._v("目前IP地址分为IPv4地址和IPv6地址，分别由IPv4协议和IPv6协议使用。")]),v._v(" "),t("h3",{attrs:{id:"ipv4地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4地址"}},[v._v("#")]),v._v(" IPv4地址")]),v._v(" "),t("p",[v._v("IPv4地址由32位二进制组成，一般人类使用点分十进制来表示，即将32位等分为4部分，每部分采用十进制来表示，如192.168.0.1。"),t("strong",[v._v("IP地址由网络部分（网络号）和主机部分（主机号）组成")]),v._v("。"),t("strong",[v._v("子网掩码的作用就是计算IP地址的网络号")]),v._v("。当发送方发送数据时，首先根据子网掩码计算目标IP的主机号，然后再计算自己IP的主机号（将IP和子网掩码做逻辑与运算），若两者一致，说明接收方在同一个网络内，直接发送；否则，发送方发送给网关。")]),v._v(" "),t("p",[v._v("IPv4地址的分配由IANA机构管理，在早期将所有的IP地址分为A~E 5类，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210115001610855.png",alt:"image-20210115001610855"}})]),v._v(" "),t("p",[v._v("下面讨论一下特殊的IP地址：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("主机号全是0的地址，特指某个网段，不能用该IP表示某个设备。主机号全是1的地址，特指该网段的全部主机，用于广播，也不能用该IP表示某个设备。")])]),v._v(" "),t("li",[t("p",[v._v("对于A类地址，网络号全是0表示“本网络”；网络号十进制为127表示本地环回测试，所以这两类地址也不会使用来表示某个设备。")])])]),v._v(" "),t("p",[v._v("分类地址是早期的决定，后来发现这种方式不是很灵活，很多公司申请了地址后，没有完全使用这些地址；同时，导致整个地址空间很快就使用完了。所以后来使用一种无分类地址（CIDR）了，如128.14.35.7/20，20表示网络号部分是前20位。无分类地址同样使用子网掩码，只不过称作变长子网掩码（VLSM）。")]),v._v(" "),t("h3",{attrs:{id:"ipv6地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv6地址"}},[v._v("#")]),v._v(" IPv6地址")]),v._v(" "),t("p",[v._v("后面补充。")]),v._v(" "),t("h2",{attrs:{id:"相关协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关协议"}},[v._v("#")]),v._v(" 相关协议")]),v._v(" "),t("p",[v._v("网络层协议包括IPv4，IPv6，ARP，ICMP，IGMP等，在进行抓包分析时，要对各种协议的报文格式非常熟悉。")]),v._v(" "),t("h3",{attrs:{id:"ipv4报文格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4报文格式"}},[v._v("#")]),v._v(" IPv4报文格式")]),v._v(" "),t("p",[v._v("IPv4数据报的格式如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210115003528434.png",alt:"IPv4报文格式"}})]),v._v(" "),t("p",[v._v("和以太网帧格式类似，IP数据报也分为首部和数据部分。本文主要分析数据包的首部，对于每个数据包，必须设置固定的20个字节的首部，另外可以根据需求添加最多40字节的其他首部数据，所以首部最多60个字节。下面分析固定部分的各个字段的含义：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("版本：占4位，表示IP协议的版本。其他大多网络层协议报文头部中也有版本字段，IPv4报文头中该字段值为4，IPv6的为6。")])]),v._v(" "),t("li",[t("p",[v._v("首部长度：占4位，可表示的最大值为15。但是请注意，该字段的单位为4个字节，即最多可以表示60个字节，同时也说明IPv4的头部长度是4的倍数，如果不是则需要进行填充。")])]),v._v(" "),t("li",[t("p",[v._v("区分服务：占8位，用来区分服务类型。")])]),v._v(" "),t("li",[t("p",[v._v("总长度：占16位，指该数据报的首部加上数据部分的长度之和，可表示的最大长度为65535字节。但是注意，对于底层以太网协议，规定了MTU为1500字节，所以如果网络层数据长度超过了此长度，需要进行分片处理。")])]),v._v(" "),t("li",[t("p",[v._v("标识：占16位，该标识作为相同报文的标识符，当一个IP数据报进行分片后，这些分片的该标识值都一样，接收方才知道这些都属于同一个IP数据报。（书上说不是序号，但确实没看懂解释）")])]),v._v(" "),t("li",[t("p",[v._v("标志：占3位，目前只使用后两位。最低位标记为MF（More Fragment），值为1表示后面还有报文分片，否则表示这是若干数据报中的最后一个。中间一位为DF（Don't Fragment），表示不能分片，"),t("strong",[v._v("只有当DF=0时才能分片")]),v._v("。对于数据长度超过了链路层的MTU而DF值为1的数据报，链路层协议在处理这种报文时应该直接丢弃。")])]),v._v(" "),t("li",[t("p",[v._v("片偏移：占13位，表示当前报文中数据的第一个字节在原始报文数据中的字节偏移量。千万别误认为是第几个分片了。")])]),v._v(" "),t("li",[t("p",[v._v("生存时间（TTL）：占8位，表示该数据报在网络中最多能被转发多少次，每当被转发一次，TTL值减1，当路由器收到TTL为0的报文时就丢弃该数据报。")])]),v._v(" "),t("li",[t("p",[v._v("协议：占8位，表示该数据报携带的数据使用的哪种协议，以便IP层知道应该将数据部分上交给哪个协议处理。常用协议和对应的协议字段值如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210115010708096.png",alt:"image-20210115010708096"}})])]),v._v(" "),t("li",[t("p",[v._v("首部检验和：占16位，这个字段只检验数据报的首部。")])]),v._v(" "),t("li",[t("p",[v._v("源和目的地址：分别占32位。")])])]),v._v(" "),t("p",[v._v("暂时不讨论可变部分的首部字段。")]),v._v(" "),t("h3",{attrs:{id:"icmp报文格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icmp报文格式"}},[v._v("#")]),v._v(" ICMP报文格式")]),v._v(" "),t("p",[v._v("ICMP协议允许主机或路由器报告差错情况和提供有关异常情况的报告。尽管ICMP报文被封装在IP数据报中，但是它不是高层协议。ICMP报文作为IP层数据报的数据，加上IP数据报的首部，组成IP数据报，ICMP报文格式如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210117175942297.png",alt:"image-20210117175942297"}})]),v._v(" "),t("p",[v._v("ICMP报文种类有两种，即ICMP差错报告报文和ICMP询问报文。ICMP报文的前4个字节是固定的，后面四个字节的内容与ICMP的类型有关，最后是数据部分。下表是几种常见的ICMP报文类型：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.harrisonlee.net/image-20210117193323343.png",alt:"image-20210117193323343"}})]),v._v(" "),t("p",[v._v("ICMP标准在不断更新，说不定不久的将来上图中的类型就会发生变化。下面解释一下几种差错报告的含义：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("当路由器收到生存时间（TTL）为0的的数据包时，除了丢弃该数据报以外，还要向源点发送时间超过报文。以及当重点在预先规定的时间内不能收到一个数据报的全部数据报时，就把迟到到达的数据报片都丢弃，并向源点发送时间超过报文。")])]),v._v(" "),t("li",[t("p",[v._v("参数问题是指数据报的首部中的字段值存在不正确的情况，需要丢弃该数据报并回发参数问题报文。")])]),v._v(" "),t("li",[t("p",[v._v("改变路由是指路由器把改变路由报文发送给主机，让主机知道下次应将数据报发送给另外的路由器。")])])]),v._v(" "),t("p",[v._v("假如现在要对IP数据报A进行差错报告，那么所要报告的ICMP报文的内容包括A数据报的首部以及A数据报内容的前8个字节。")]),v._v(" "),t("p",[v._v("下面是几种不再发送差错报告的情况：")]),v._v(" "),t("ul",[t("li",[v._v("对ICMP差错报文报告不再发送ICMP差错报告。")]),v._v(" "),t("li",[v._v("对第一个分片的数据报片的所有后序数据报片，都不发送ICMP差错报告报文。")]),v._v(" "),t("li",[v._v("对具有多播地址的数据报，都不发送ICMP差错报告报文。")]),v._v(" "),t("li",[v._v("对具有特殊地址的数据报，不发送ICMP差错报告报文。")])]),v._v(" "),t("p",[v._v("下面解释一下询问类型的ICMP数据报：")]),v._v(" "),t("ul",[t("li",[v._v("ICMP回送请求报文是主机或路由器向一个特定的目的主机发出的询问。收到此报文的主机必须给源主机或路由器发送ICMP会送回答报文。")]),v._v(" "),t("li",[v._v("ICMP时间戳请求报文是请某台主机或路由器回答当前的日期和时间。")])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("对于常见的网络层数据报的格式要十分请求，对每种报文的首部字段要熟记于心，这样才能在抓包分析时得心应手。")])])}),[],!1,null,null,null);_.default=s.exports}}]);