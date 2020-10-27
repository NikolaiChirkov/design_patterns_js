Типы паттернов:
1. Структурные
2. Порождающие
3. Поведенческие

------------------------------
------------------------------

Singleton(Порождающий паттерн)

Singleton - объект в одном экземпляре. Имеет глобальную точку доступа.

Когда нужен: 
    Необходим объект в одном экземпляре, к которому нужен доступ из разных частей программы

Примеры использования:
    E-Commerce - корзина, карта клиента
    Мультимедиа - экземпляр плеера

------------------------------

Factory Method(Порождающий паттерн)

Factory Method - создает класс, помогающий создавать определенные объекты на основе входных данных

Когда нужен:
    Необходимо множество однотипных объектов, т.е. с одинаковой структурой, но разными данными

Минус:
    Много опций - фабрика разрастётся

------------------------------

Abstract Factory(Порождающий паттерн)

Abstract Factory - интерфейс группирующий другие фабрики, которые логически связанны друг с другом. Простыми словами - это абстракция для фабрики и фабричного метода

Когда нужем:
    Нужна адаптивность в фабрике. 

------------------------------

Prototype(Порождающий паттерн)

Prototype - позволяет копировать объекты, не вдаваясь в особенности их реализации

Когда нужен:
    В случае необходимости изменить структуру объекта и заточить под выполнение определенных задач

------------------------------

Builder(Структурный паттерн)

Builder - используется для создания объектов со сложными состояниями. Может иметь доп. слой абстракций

Когда нужен:
    Если свойства в конструкторе начинают зависить от различных факторов, а также инициализироваться из-за различных условий, что приводит к разрастанию конструктора.

------------------------------

Decorator(Структурный паттерн)

Decorator - используется для добавления объектам новых свойств и методов. По факту, оборачивает исходный объект, чтобы дать ему новый функционал. 

Когда нужен:
    Необходимо добавить функционал, которого ранее не было

------------------------------

Facade(Структурный паттерн)

Facade - Скрывает сложную логику за простым фосадом

Когда нужен:
    Когда нужны различные сложные структуры, которым нужно простое объединение и способ манипуляции

------------------------------

Proxy(Структурный паттерн)

Proxy - вместо реальных объектов представляет объекты-заменители. Перехватывают данные для оригиналов и позволяют совершить операции до того, как данные дойдут до оригинала.

Когда нужен:
    Когда нужна прослойка, выполняющая доп. манипуляции

------------------------------

Adapter(Структурный паттерн)

Adapter - оборачивает несовместимый объект и делает его совместимым, не изменяя оригинальный код

Когда нужен:
    Когда нужно шаблонизировать интерфейсы взаимодействия или сами объекты