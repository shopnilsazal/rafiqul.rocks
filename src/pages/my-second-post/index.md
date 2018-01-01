---
path: second
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
tags:
  - gatsby
  - react
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

```python{12-16}
def is_palindrome_v3(s: str) -> bool:
    """
    Return True if the string s is palindrome otherwise return False

    >>> is_palindrome_v3('noon')
    True
    >>> is_palindrome_v3('racecar')
    True
    >>> is_palindrome_v3('hello')
    False
    """
    i = 0
    j = len(s) - 1
    while i <= j and s[i] == s[j]: # this is a comment
        i += 1
        j -= 1
    return j <= i
```

Yeah, I didn't either.
