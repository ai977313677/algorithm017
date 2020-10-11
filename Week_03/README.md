学习笔记

### 递归

递归模板：

```javascript
function retrive(...param) {
    // 1. 递归出口
    if (condition) { return ; }

    // 2. 当前层处理
    // 3. 递归调用
    // 4. 清除当前层无用信息
}
```

递归的处理是找最近最简方法，将其拆解成可重复解决的问题（即重复子问题）
如二叉树的遍历，对于每一个子树的遍历，过程都是一样的，先遍历左子树，再遍历右子树。

形成数学归纳法的思维。

> 不要人肉递归，要学会自顶向下的编程方式

### 分治、回溯

分治是将一个问题拆解成多个问题，直到划分到指定大小的问题，对其进行计算解决。

代码模板：

```javascript
function divide(problem, ...param) {
    // 指定的问题大小
    if (problem == null) {
        // 计算结果返回
        return ;
    }

    // 问题划分（处理当前问题）
    subproblems = splitProblem(problem, param);
    sub1 = divide(subproblems[0], param[0]);
    sub2 = divide(subproblems[1], param[1]);
    sub3 = divide(subproblems[2], param[2]);
    ...

    // 合并子问题结果
    result = processResult(sub1, sub2, sub3, ...);

    return result;
}
```

从模板中可以看出来，分治和递归联系上是比较密切的，分治实际上也是在找一个重复的子问题。

在大数据中，经常会有拆分计算的问题，如Java中的MapReduce。

回溯依旧是递归思想，事实上，当某一层递归调用结束返回到上一层时，这就是回溯。

> 最典型的递归和回溯是DFS算法。N-皇后是一个经典的运用回溯法解决的问题。