# Git

## Use per-directory Git configuration

If you want to have different Git configurations based on directory where Git repository is located, use `includeIf`

```sh
[includeIf "gitdir:~/personal/"]
  path = ~/.gitconfig_extra
[includeIf "gitdir:~/company/"]
  path = ~/.gitconfig_extra_company
```

## References

* https://stackoverflow.com/questions/8801729/is-it-possible-to-have-different-git-config-for-different-projects/43884702#43884702
