(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{273:function(t,e,_){"use strict";_.r(e);var v=_(13),i=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数据库解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库解析"}},[t._v("#")]),t._v(" 数据库解析")]),t._v(" "),e("h2",{attrs:{id:"数据库关系图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库关系图"}},[t._v("#")]),t._v(" 数据库关系图")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("…")])]),t._v(" "),e("h2",{attrs:{id:"数据库表分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库表分析"}},[t._v("#")]),t._v(" 数据库表分析")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("表名")]),t._v(" "),e("th",[t._v("作用")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("user")]),t._v(" "),e("td",[t._v("用户信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("role")]),t._v(" "),e("td",[t._v("角色信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("permission")]),t._v(" "),e("td",[t._v("权限信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("role_user")]),t._v(" "),e("td",[t._v("用户-角色 关联表")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("role_permission")]),t._v(" "),e("td",[t._v("角色-权限 关联表")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("team")]),t._v(" "),e("td",[t._v("团队信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("problem")]),t._v(" "),e("td",[t._v("题目信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("tag")]),t._v(" "),e("td",[t._v("标签信息")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("user_time")]),t._v(" "),e("td",[t._v("用户-团队 关联表")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("problem_tag")]),t._v(" "),e("td",[t._v("题目-标签 关联表")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("solution")]),t._v(" "),e("td",[t._v("运行结果表")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("source_code")]),t._v(" "),e("td",[t._v("源代码")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("news")]),t._v(" "),e("td",[t._v("新闻（摘要）表")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"数据库表详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库表详解"}},[t._v("#")]),t._v(" 数据库表详解")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("user")]),t._v("  用户信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("user_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户id、用户名（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("password")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("密码（md5 + salt）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("salt")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("盐值（uuid）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("nick")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("昵称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("email")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("60")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("邮箱")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("char")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用（Y/N）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自我介绍")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("solved")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("通过题目数（具体 solved 的题目可通过 solution查询，设立该字段的目的是为了方便排名）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("submit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码提交次数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("create_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("role")]),t._v("  角色信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("role_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("角色id、角色名（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("permission")]),t._v(" 权限信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("权限id（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("p_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("父权限")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("权限名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("path")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("图标")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("role_user")]),t._v(" 用户-角色 关联表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("user_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户id、用户名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("role_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("角色id、角色名")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("role_permission")]),t._v(" 角色-权限 关联表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("role_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("角色id、角色名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("permission_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("权限id")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("team")]),t._v(" 团队信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("team_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("团队id、团队名（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("invite_code")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("100")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("邀请码（教师可手动生成，也可随机生成），明文")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("join_status")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("char")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否开放加入（Y/N）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户数量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("description")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("团队描述")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("create_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("user_team")]),t._v(" 用户团队表（多对多 → 中间关系表）")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("user_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("联合主键")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("team_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("联合主键")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("role")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户在团队中的等级：0-学生，1-老师，2-班主任")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("join_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("加入时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("problem")]),t._v(" 题目信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("problem_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("题目编号（主键），从 1000 开始自增")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",[t._v("50")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("题目标题")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("content")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("题目描述、输入描述、输出描述、样例、数据范围均由写入该字段，前端需集成 markdown 编辑器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("level")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("题目难度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("time_limit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("时间限制(ms)，默认为c/c++限制,其它语言为2倍")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("memory_limit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("空间限制(mb)，默认为c/c++限制,其它语言为2倍")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否可见（Y/N）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ac")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("通过（Accepted）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wa")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("错误（Wrong Answer）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tle")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("超时（Time Limit Exceeded）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mle")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("内存超限（Memory Limit Exceeded）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("re")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("越界（Runtime Error）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ce")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编译错误（Compilation Error）的提交数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("submit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("总提交次数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("author")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("作者")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("create_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("tag")]),t._v(" 标签信息表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tag_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("标签id、标签名（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("标签颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("create_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("problem_tag")]),t._v(" 题目标签表（多对多 → 中间关系表）")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("problem_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("联合主键")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tag_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("联合主键")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("solution")]),t._v(" 运行结果表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("solution_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")]),t._v(" "),e("td",[t._v("18")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("评测id（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("problem_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("题目编号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("user_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户id、用户名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行内存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("result")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行结果")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("socre")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("分数（通过百分比）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("language")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码语言")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("code_length")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码长度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("visible")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("char")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否可见（Y/N）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("submit_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提交时间")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("source_code")]),t._v(" 源代码")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("solution_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("评测 id（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("code")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("源代码")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("news")]),t._v(" 新闻（公告）表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否允许为空")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("news_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新闻 id（主键）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("60")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新闻标题")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("abstract")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新闻摘要")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("context")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新闻内容")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("picture")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("varchar")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新闻封面")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("create_date")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("datetime")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建时间")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Waiting for update...")])])])}),[],!1,null,null,null);e.default=i.exports}}]);