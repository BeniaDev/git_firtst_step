# Инструкция по GIT и Linux командам


## Работа с индексом
* `git add filename` добавляет файл в индекс
* `git rm filename` удаляет файл из индекса
* `git rm --cached` удаление файла из индекса, НО **оставляет** в рабочей директории

## Работа в git Bash

* `mkdir folder_name` # создает папку
* `git config -l or --list` # пользовательские настройки
* `git init` # создание гит репозитория
* `git add file_name.extension` #добавление файлов в индекс
* `git commit -m "Message with your commit"` # коммит изменений в файлах проекта
* `git status` #Отображает список изменённых файлов, вместе с файлами которые ещё не были добавлены в индекс или ожидают коммита
* `git push origin master` # Перемещает изменения в главную ветку связанную с рабочим каталогом
* `command git checkout -b <name_of_brunch>`# создание brunch или переключение
* `git remote -v` #подключение к удаленному репозиторию
*  **^<>^**
* P.S **Markdown** - это язык разметки на котором написана данная документация.
## Работа в VIM
* *ВСЕГДА* СМОТРИ НА СВОЮ РАСКЛАДКУ
* Список
  + Первый элемент
  + Второй элемент
  - Третий элемент
## Example of code
    print('Hello from python3!')

### Helpful links:
* [Here](https://gist.github.com/Jekins/2bf2d0638163f1294637) You can find some interesting info about work with Vim + Markdown

## Work with branches
* `git checkout -b <new_brunch_name> ` создание новой ветки **new_branch_name**
* `git checkout brach_name` переключение на branch-name
* `git merge branch_name` Включение изменений из другой ветки в текущую(**замерджить**) 
