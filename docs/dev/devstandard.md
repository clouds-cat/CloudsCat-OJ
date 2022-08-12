# OJ系统开发规范

## api的编写规范：
1. 针对某个controller为例：ProblemController
    - 统一访问路径：/api/problem
        + 单个获取：{id}
            + 请求方式：GET
        + 增加：/add
            + 请求方式：POST
        + 修改：/update
            + 请求方式：PUT
        + 删除：/delete
            + 请求方式：POST
            + 统一批量删除，请求参数用List
            + 分页查询：/findListPage
            + 请求方式：POST
            + 不分页查询：/findList
            + 请求方式：POST
2. 方法命名
    - 对于Controller以及对应sercice、mapper的命名，与请求的url保持一致。

## DTO的编写规范
1. 请求参数DTO类的定义统一用DTO结尾
2. 查询请求参数DTO类的定义统一用QueryDTO结尾
3. 分页查询请求参数DTO类的定义统一用PageQueryDTO结尾


## VO的编写规范
1. 返回VO类统一用VO结尾

## 业务层编写规范
1. 对于增、删、改接口的service的对应方法返回类型统一用void。如：
 ```
public void delete(Long id) {
        if (SqlConstant.SUCCESS != baseMapper.deleteById(id)) {
            throw new BusinessException("删除题目失败");
        }
    }
```
2. 对于增、删、改接口的service的对应方法执行需抛出自定义异常，且用SqlConstant.SUCCESS常量判断sql的执行成功与否，如：
 ```
public void add(ProblemDTO problemDTO) {
        Problem problem = new Problem();
        BeanUtils.copyProperties(problemDTO, problem);
        if (SqlConstant.SUCCESS != baseMapper.insert(problem)) {
            throw new BusinessException("新增题目失败");
        }
    }
```

## 项目全局代码编写规范

1. 判空统一用工具类
    - 字符串判空：StringUtils
    - 集合判空：CollectionUtils
    - 对象判空：Objects
              
  
