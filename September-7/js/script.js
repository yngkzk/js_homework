// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    setRadius(value) {
        this.radius = value;
    }
    getRadius() {
        return this.radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getAreaOfCircle() {
        return Math.round(Math.PI * Math.pow(this.radius, 2));
    }
    getLengthOfCircle() {
        return Math.round(2 * Math.PI * this.radius);
    }
}

// const myCircle = new Circle()
// myCircle.setRadius(4)
// console.log(myCircle.getRadius())
// console.log(myCircle.getDiameter())
// console.log(myCircle.getDiameter())
// console.log(myCircle.getAreaOfCircle())
// console.log(myCircle.getLengthOfCircle())


// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// 2
// Домашнее задание №4
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().


class HtmlElement {
    tagName;
    ownClosed = false;
    text;
    attrs = [];
    styles = [];
    subTags = [];
    // constructor (tagname, text = null, style = null, attr = null, subTag = null) {
    //     this.tagName = tagname;
    //     this.text = text;
    //     this.styles.push(style);
    //     this.attrs.push(attr);
    //     this.subTags.push(subTag);
    // }
    createElement() {
        return this.ownClosed ? `<${this.tagName}></${this.tagName}>` : `<${this.tagName}/>`;
    }
    setAttr(value) {

    }
    getHtml() {

    }
}

const html1 = new HtmlElement()
html1.tagName = "div";
html1.ownClosed = true;
// html1.text = "Обратите внимание.";
// html1.attrs = ['style', 'src', 'target', 'href'];
// html1.styles = [
//     {selector: "margin", value: "10px"},
//     {selector: "color", value: "green"},
//     {selector: "width", value: "100%"},
//     {selector: "text-align", value: "justify"}
// ]

console.log(html1.createElement())
