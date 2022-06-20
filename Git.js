Git     //"распределенная система контроля версий"
    win + r     //"запускаем командную строку и вводим cmd"
    git     //"информация про основные команды"
    copy null.gitconfig     //"если путь правильный(наш пользователь), тогда вводим"
    [user] 
        email=recruiterhrpartner4@gmail.com 
        user=MarikFrost     //"Открываем с помощью блокнота и вводим данные"
    gitconfig -list -global     //"проверяем сохранились ли наши параметры"
    cd C:\Users\MarikFrost\git      //"Создали репозиторий, создали папку для работы с git и переходим в нее"
    git clone http:.....        //"клонируем репозиторий на комп"
    git status      //"проверяем статус репозитория у нас. Он untracked"
    git add File.txt        //"даем понимание системе, что этот файл существуе"
    git status      //"Теперь он у нас modified"
    git commit -am "собщение про комит"     //"делаем коммит -m чтобы написать коммит. -a чтобы комитить все файлы"
    git commit File.txt -m "test"       //"Коммит только один файл"
    git status      //"теперь нет информации, этот файл закомичем"
    git push        //"закинули на удаленный репозиторий"
    git add .       //"добавляем все файлы в систему"
    git fetch       //"Если мы вносим изменение на удаленном репозитории" 
    git pull        //"для загрузки из удаленного репозитория"
    git log         //"информация про все логи, там информация про авторов и т.д"
    git log –author Dmitriy         //"посмотреть какие действия делал определенный автор"
    git show f961f7a37296bc749dfc8ae2d822d8a77870f8b        //"посмотреть содержание определенного коммита, нужен его хеш."
    git show        //"посмотреть последний коммит"
    git blame file1.txt         //"информация об авторе каждой  строки"
    git blame file1.txt | grep 1234         //"кто вносил изменение/автор строки 1234"
    git blame file1.txt | grep Dmitriy      //"какие изменения делал определенный автор"
    git diff        //"информация какие изменения были"
    git pull        //"если в удаленном репозитории отличаются файлы от локального необходимо перед git push сделать" 
    git checkout file1.txt      //"откатить изменение сохраненное в файле"
    git checkout .      //"откатить изменения в нескольких файлах"
    git stash       //"скрываем изменения, но мы можем вернуться к ним"
    git stash pop       //"возвращаем отмененные изменения"

GIT ветки:
    git branch first_branch         //"создание новой ветки"
    git branch      //"посмотреть какие есть ветки"
    git checkout first_branch       //"переходим на ветку git_branch , ветка на которой мы сейчас обозначается *"
    git push -u origin first_branch         //"если такой ветки не на удоченном репозитории, то будет конфликт и нужно ввести -u origin и название ветки. тогда мы ее сознаем."
    git merge first_branch      //"смердживаем ветку first_branch в ветку main. Сначала нужно перейти в main. Далее пушим"
    git branch -m first_branch second_branch        //"переименование веток"
    git branch -d second_branch         //"удаление ветки"