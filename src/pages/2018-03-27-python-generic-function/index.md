---
title: Generic Function in Python with Singledispatch
path: generic-function-in-python-with-singledispatch
date: "2018-03-27"
tags:
  - python
---

Imagine, you can write different implementations of a function of the same name in the same scope, depending on the types of arguments. Wouldn’t it be great? Of course, it would be. There is a term for this. It is called “Generic Function”. Python recently added support for generic function in Python 3.4 (<a href="https://www.python.org/dev/peps/pep-0443/" target="_blank">PEP 443</a>). They did this to the `functools` module by adding `@singledispatch` decorator.

## What is Singledispatch?

At this point, you may be wondering what is `singledispatch`. Okay, let’s go with generic function again.

> A generic function is composed of multiple functions implementing the same operation for different types. Which implementation should be used during a call is determined by the dispatch algorithm. When the implementation is chosen based on the type of a single argument, this is known as single dispatch.

In Python, implementation is chosen based on the type of the first argument of function. So in simple, you define a default function and then register additional versions of that functions depending on the type of the first argument.

## Singledispatch in Action

Let’s see `singledispatch` in action. There are few steps for writing a generic function with `singledispatch`.

* Import `singledispatch` from `functools`.
* Define an default or fallback function with `@singledispatch` decorator. It’s our generic function.
* Then, Register additional implementations by passing the type in `register()` attribute of the generic function. It’s a decorator, so you decorate your implementations like this `@function_name.register(type)`. You can also register lambdas and pre-existing functions.

Now, we will implement a generic function called `fprint`, which will print something in a formatted way based on the type. For `list` it will print index and value along with type of value and for `dict` it will print key-value pair along with their type etc. By default it will print the passed argument along with it’s type. Let’s define our default function first.

```python
from functools import singledispatch


@singledispatch
def fprint(data):
    print(f'({type(data).__name__}) {data}')
```

I am not going to explain the implementation. It’s fairly basic. It’s the default or fallback implementation of our generic function. We define a function and decorate it with `@singledispatch` decorator. If there is no registered implementation for a specific type, its method resolution order is used to find a more generic implementation. The original function decorated with `@singledispatch` is registered for the base object type, which means it is used if no better implementation is found.

Remember the next step? Now, it’s time for registering the overloaded implementations. Let’s implement for `list` first.

```python
@fprint.register(list)
def _(data):
    formatted_header = f'{type(data).__name__} -> index : value'
    print(formatted_header)
    print('-' * len(formatted_header))
    for index, value in enumerate(data):
        print(f'{index} : ({type(value).__name__}) {value}')
```

In case you are wondering why I am using `_` as name. It’s because, I want only one generic function. If you give it a name, you will get the option to use this specific function independently. Assume that we gave a name to the above function `list_print` and didn’t decorate with `@fprint.register(list)`. Now, we can use `fprint.register()` as function like this `fprint.register(list, list_print)`. We can also stack more than one decorator for multiple type just like this.

```python{1-3}
@fprint.register(list)
@fprint.register(set)
@fprint.register(tuple)
def _(data):
    formatted_header = f'{type(data).__name__} -> index : value'
    print(formatted_header)
    print('-' * len(formatted_header))
    for index, value in enumerate(data):
        print(f'{index} : ({type(value).__name__}) {value}')
```

We almost finished our generic function except for `dict` type. Here is our full code along with implementation for `dict` type.

```python
from functools import singledispatch


@singledispatch
def fprint(data):
    print(f'({type(data).__name__}) {data}')


@fprint.register(list)
@fprint.register(set)
@fprint.register(tuple)
def _(data):
    formatted_header = f'{type(data).__name__} -> index : value'
    print(formatted_header)
    print('-' * len(formatted_header))
    for index, value in enumerate(data):
        print(f'{index} : ({type(value).__name__}) {value}')


@fprint.register(dict)
def _(data):
    formatted_header = f'{type(data).__name__} -> key : value'
    print(formatted_header)
    print('-' * len(formatted_header))
    for key, value in data.items():
        print(f'({type(key).__name__}) {key}: ({type(value).__name__}) {value}')

# >>> fprint('hello')
# (str) hello

# >>> fprint(21)
# (int) 21

# >>> fprint(3.14159)
# (float) 3.14159

# >>> fprint([2, 3, 5, 7, 11])
# list -> index : value
# ---------------------
# 0 : (int) 2
# 1 : (int) 3
# 2 : (int) 5
# 3 : (int) 7
# 4 : (int) 11

# >>> fprint({2, 3, 5, 7, 11})
# set -> index : value
# --------------------
# 0 : (int) 2
# 1 : (int) 3
# 2 : (int) 5
# 3 : (int) 7
# 4 : (int) 11

# >>> fprint((13, 17, 23, 29, 31))
# tuple -> index : value
# ----------------------
# 0 : (int) 13
# 1 : (int) 17
# 2 : (int) 23
# 3 : (int) 29
# 4 : (int) 31

# >>> fprint({'name': 'John Doe', 'age': 32, 'location': 'New York'})
# dict -> key : value
# -------------------
# (str) name: (str) John Doe
# (str) age: (int) 32
# (str) location: (str) New York
```

## Summing It Up

As you can see, Python provides a clear way to define and extend generic functions. It opens some interesting possibilities to refactor your code. If you are interested to learn more about `singledispatch`, you should check out <a href="https://www.python.org/dev/peps/pep-0443/" target="_blank">PEP 443</a> and `functools` <a href="https://docs.python.org/3/library/functools.html#functools.singledispatch" target="_blank">docs</a>.
