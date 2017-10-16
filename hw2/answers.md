Part1

 1.1: Looking at the page containing the table, what are the differences between the DOM as shown by the DOM inspector and the HTML source code? Why would you use the DOM inspector? When is the HTML source useful?

DOM inspector содержит в себе большое количество инструментов для дебага.

1.2: Below we have partially reproduced the first lines from the table's dataset. What piece of software generates this table? Where are the original data stored?

Библиотека d3, предварительно фильтруя данные (json), записывает их в массив, после чего создает в документе html-теги для отображения данных в браузере.
Изначально эти данные хранились в countries_2012.json и countries_1995_2012.json.

Part2

2.1 Would you filter other columns from the table the same way? E.g. would you use checkboxes or any other HTML widget?

Т.к. в других колонках значения для каждой из стран уникальны, то такая фильтрация не имеет смысла. Повторяющиеся значения присутствуют только в колонке years и в данной лабораторной работе уже используется виджет years для данных из файла countries_1995_2012.json.

Part3

3.1 Could you aggregate the table using other columns? If you think yes, explain which ones and how you would group values. Which HTML widgets would be appropriate?

Т.к. повторяющиеся значения также содержатся в колонке years, то и аггрегировать имеет смысл по году (используем файл countries_1995_2012.json).
Можно было бы добавить среднее значение "life_expectancy", разницу между минимальными и максимальными значениями GDP, среднее значение GDP на душу населения (разделить population и GDP).

4.1 Use this dataset countries_1995_2012.json as input for the previously created table. What does the new attribute years hold?

Years является массивом, в котором содержатся объекты, которые в свою очередь состоят из gdp, life_expectancy, top_partners, year и population.

Part5

5.1 What are the pros and cons of using HTML vs. SVG? Give some examples in the context of creating visualizations.

1) Графика SVG  векторная, а HTML - растровая.
2) Графика SVG всегда отображается с наилучшим разрешением. В отличае от графики HTML, она опирается на множества опорных точек и изображение описывается математическими формулами. Вследствие чего сколько ни увеличивай масштаб векторного изображения, пикселей никогда не будет видно.
3)Работать с растровыми изображениями проще, т.к. механизмы её создания и редактирования более привычны и распространены. Однако чем больше пикселей, тем больше размер изображения.
4) Векторные изображения содержат в себе малое кол-во информации. Следовательно, они занимают малый объем памяти. Однако не каждая графическая сцена может быть представлена в векторном виде: для сложного изображения с широкой цветовой гаммой может потребоваться огромное количество точек и кривых, что сведёт «на нет» все преимущества векторной графики. (SVG применяется для создания различных фигур и линий).

Part7

7.1 Give an example of a situation where visualization is appropriate, following the arguments discussed in lecture and in the textbook (the example cannot be the same as mentioned in either lecture or textbook).
http://lenagroeger.com/datagifs/#/
Load quickly
Let you combine multiple images/ideas
You can embed them easily and everywhere
Fun!

7.2 Which limitations of static charts can you solve using interactivity?

1) Динамическая графика позволяет более наглядно и понятно продемонстрировать определенные изменения, которые произошли с той или иной составляющей в течении того же времени/с добавлением новых критериев и т.д.
2) Фильтрация данных по признакам

7.3 What are the limitations of visualization?

1) Data visualization tools show but don’t explain
2) Data visualization provides a false sense of security because sometimes we need to express a complex situation, sentences and phrases and that are required along with a system that is smart enough to article its reasoning process.

7.4 Why are data semantics important for data?

Без определенный предметных знаний можно совершить ошибки при визуализации данных, которая повлечет за собой их неправильное восприятие.

7.5 Which relationships are defined for two attributes of ( a ) quantitative, ( b ) categorical, or ( c ) ordinal scale?

a) Сравнивать и сортировать значения
b) Группировать, сортировать и сравнивать значения
c) группировать и сортировать значения

7.6 Which visual variables are associative (i.e., allow grouping)?

1) Пол
2) Возраст
3) Страна
4) Город

7.7 Which visual variables are quantitative (i.e., allow to judge a quantitative difference between two data points)?

1) Рост
2) Вес
3) ВВП
4) Численность населения
