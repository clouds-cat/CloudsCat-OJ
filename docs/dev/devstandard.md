# OJ系统开发规范

## api的编写规范：
1. 针对某个 `controller` 为例：`ProblemController`
    - 统一访问路径`/api/problem
        + 单个获取：{id}
            + 请求方式：`GET`
            
        + 增加：/add
            + 请求方式：`POST`
            
        + 修改：/update
            + 请求方式：`PUT`
            
        + 删除：/delete
            + 请求方式：`POST`
            + 统一批量删除，请求参数用List
            
        + 分页查询：/findListPag
            + 请求方式：`POST`
            
         + 非分页查询：/findList
            + 请求方式：`POST`
    
2. 方法命名
    - 对于 `Controller` 以及对应 `sercice`、`mapper` 的命名，与请求的url保持一致。

## DTO的编写规范

1. 请求参数 `DTO` 类的定义统一用 `DTO` 结尾
2. 查询请求参数 `DTO` 类的定义统一用 `QueryDTO` 结尾
3. 分页查询请求参数 `DTO` 类的定义统一用 `PageQueryDTO` 结尾

## VO的编写规范

1. 返回 VO 类统一用 VO 结尾

## 业务层编写规范

1. 对于增、删、改接口的 `service` 的对应方法返回类型统一用 void。如：
 ```java
public void delete(Long id) {
        if (SqlConstant.SUCCESS != baseMapper.deleteById(id)) {
            throw new BusinessException("删除题目失败");
        }
    }
 ```
2. 对于增、删、改接口的 `service` 的对应方法执行需抛出自定义异常，且用 `SqlConstant.SUCCESS` 常量判断 sql 的执行成功与否，如：
 ```java
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
              

