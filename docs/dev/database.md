# 数据库解析

## 数据库关系图

:::warning

…

:::

## 数据库表分析

| 序号 | 表名        | 作用             | 备注 |
| ---- | ----------- | ---------------- | ---- |
| 1    | user        | 用户信息         |      |
| 2    | team        | 团队信息         |      |
| 3    | problem     | 题目信息         |      |
| 4    | tag         | 标签信息         |      |
| 5    | user_time   | 用户-团队 关联表 |      |
| 6    | problem_tag | 题目-标签 关联表 |      |
| 7    | solution    | 运行结果表       |      |
| 8    | source_code | 源代码           |      |



## 数据库表详解

+ `user`  用户信息表

|   字段名    |   类型   | 长度 | 是否允许为空 |                             备注                             |
| :---------: | :------: | :--: | :----------: | :----------------------------------------------------------: |
|   user_id   | varchar  |  20  |      N       |                    用户id、用户名（主键）                    |
|  password   | varchar  | 100  |      N       |                      密码（md5 + salt）                      |
|    salt     | varchar  | 100  |      N       |                         盐值（uuid）                         |
|    nick     | varchar  |  30  |      N       |                             昵称                             |
|    email    | varchar  |  60  |      N       |                             邮箱                             |
|   status    |   char   |  1   |      N       |                       是否禁用（Y/N）                        |
| description |   text   |  -   |      Y       |                           自我介绍                           |
|   solved    |   int    |  11  |      Y       | 通过题目数（具体 solved 的题目可通过 solution查询，设立该字段的目的是为了方便排名） |
|   submit    |   int    |  11  |      Y       |                         代码提交次数                         |
| create_time | datetime |  -   |      Y       |                           创建时间                           |

+ `team` 团队信息表

|   字段名    |   类型   | 长度 | 是否允许为空 |                     备注                     |
| :---------: | :------: | ---: | :----------: | :------------------------------------------: |
|   team_id   | varchar  |   20 |      N       |            团队id、团队名（主键）            |
| invite_code | varchar  |  100 |      N       | 邀请码（教师可手动生成，也可随机生成），明文 |
| join_status |   char   |    1 |      N       |             是否开放加入（Y/N）              |
|   number    |   int    |   11 |      Y       |                   用户数量                   |
| description |   text   |    - |      Y       |                   团队描述                   |
| create_time | datetime |    - |      Y       |                   创建时间                   |

+ `user_team` 用户团队表（多对多 → 中间关系表）

|  字段名   |   类型   | 长度 | 是否允许为空 |                     备注                     |
| :-------: | :------: | :--: | :----------: | :------------------------------------------: |
|  user_id  | varchar  |  20  |      N       |                   联合主键                   |
|  team_id  | varchar  |  20  |      N       |                   联合主键                   |
|   role    |   int    |  11  |      N       | 用户在团队中的等级：0-学生，1-老师，2-班主任 |
| join_time | datetime |  -   |      Y       |                   加入时间                   |

+ `problem` 题目信息表

|    字段名    |   类型   | 长度 | 是否允许为空 |                             备注                             |
| :----------: | :------: | ---- | :----------: | :----------------------------------------------------------: |
|  problem_id  |   int    | 11   |      N       |              题目编号（主键），从 1000 开始自增              |
|    title     | varchar  | 50   |      N       |                           题目标题                           |
|   content    |   text   | -    |      N       | 题目描述、输入描述、输出描述、样例、数据范围均由写入该字段，前端需集成 markdown 编辑器 |
|    level     |   int    | 11   |      N       |                           题目难度                           |
|  time_limit  |   int    | 11   |      N       |         时间限制(ms)，默认为c/c++限制,其它语言为2倍          |
| memory_limit |   int    | 11   |      N       |         空间限制(mb)，默认为c/c++限制,其它语言为2倍          |
|    status    |          | 1    |      N       |                       是否可见（Y/N）                        |
|      ac      |   int    | 11   |      Y       |                   通过（Accepted）的提交数                   |
|      wa      |   int    | 11   |      Y       |                 错误（Wrong Answer）的提交数                 |
|     tle      |   int    | 11   |      Y       |             超时（Time Limit Exceeded）的提交数              |
|     mle      |   int    | 11   |      Y       |          内存超限（Memory Limit Exceeded）的提交数           |
|      re      |   int    | 11   |      Y       |                越界（Runtime Error）的提交数                 |
|      ce      |   int    | 11   |      Y       |            编译错误（Compilation Error）的提交数             |
|    submit    |   int    | 11   |      Y       |                          总提交次数                          |
|    author    | varchar  | 20   |      Y       |                             作者                             |
| create_time  | datetime | -    |      Y       |                           创建时间                           |

+ `tag` 标签信息表

|   字段名    |   类型   | 长度 | 是否允许为空 |          备注          |
| :---------: | :------: | ---- | :----------: | :--------------------: |
|   tag_id    | varchar  | 20   |      N       | 标签id、标签名（主键） |
|    color    | varchar  | 20   |      Y       |        标签颜色        |
| create_time | datetime | -    |      Y       |        创建时间        |

+ `problem_tag` 题目标签表（多对多 → 中间关系表）

|   字段名   |  类型   | 长度 | 是否允许为空 |   备注   |
| :--------: | :-----: | :--: | :----------: | :------: |
| problem_id |   int   |  11  |      N       | 联合主键 |
|   tag_id   | varchar |  20  |      N       | 联合主键 |

+ `solution` 运行结果表

|   字段名    |   类型   | 长度 | 是否允许为空 |        备注        |
| :---------: | :------: | ---- | :----------: | :----------------: |
| solution_id |   long   | 18   |      N       |   评测id（主键）   |
| problem_id  |   int    | 11   |      N       |      题目编号      |
|   user_id   | varchar  | 20   |      N       |   用户id、用户名   |
|    time     |   int    | 11   |      N       |      运行时间      |
|   memory    |   int    | 11   |      N       |      运行内存      |
|   result    |   int    | 6    |      N       |      运行结果      |
|    socre    |   int    | 11   |      N       | 分数（通过百分比） |
|  language   |   int    | 11   |      N       |      代码语言      |
| code_length |   int    | 11   |      N       |      代码长度      |
|   visible   |   char   | 1    |      N       |  是否可见（Y/N）   |
| submit_time | datetime | -    |      Y       |      提交时间      |

+ `source_code` 源代码

|   字段名    | 类型 | 长度 | 是否允许为空 |      备注       |
| :---------: | :--: | :--: | :----------: | :-------------: |
| solution_id | long |  18  |      N       | 评测 id（主键） |
|    code     | text |  -   |      N       |     源代码      |



::: warning

Waiting for update...

:::

  