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

// CLASSROOM

// class HtmlElement {
//     tagName;
//     ownClosed = false;
//     text;
//     attrs = [];
//     styles = [];
//     subTags = [];
//     // constructor (tagname, text = null, style = null, attr = null, subTag = null) {
//     //     this.tagName = tagname;
//     //     this.text = text;
//     //     this.styles.push(style);
//     //     this.attrs.push(attr);
//     //     this.subTags.push(subTag);
//     // }
//     createElement() {
//         return this.ownClosed ? `<${this.tagName}></${this.tagName}>` : `<${this.tagName}/>`;
//     }
//     setAttr(value) {

//     }
//     getHtml() {

//     }
// }

// const html1 = new HtmlElement()
// html1.tagName = "div";
// html1.ownClosed = true;
// // html1.text = "Обратите внимание.";
// // html1.attrs = ['style', 'src', 'target', 'href'];
// // html1.styles = [
// //     {selector: "margin", value: "10px"},
// //     {selector: "color", value: "green"},
// //     {selector: "width", value: "100%"},
// //     {selector: "text-align", value: "justify"}
// // ]

// console.log(html1.createElement())

// CHATGPT

// class HtmlElement {
//     constructor(tagName, isSelfClosing = false) {
//     this.tagName = tagName;
//     this.isSelfClosing = isSelfClosing;
//     this.attributes = {};
//     this.styles = {};
//     this.children = [];
//     this.textContent = '';
//     }
    
//     setAttribute(name, value) {
//     this.attributes[name] = value;
//     }
    
//     setStyle(name, value) {
//     this.styles[name] = value;
//     }
    
//     appendChild(child) {
//     this.children.push(child);
//     }
    
//     prependChild(child) {
//     this.children.unshift(child);
//     }
    
//     getHtml() {
//     let html = `<${this.tagName}`;
    
//     for (let attr in this.attributes) {
//     html += ` ${attr}="${this.attributes[attr]}"`;
//     }
    
//     if (Object.keys(this.styles).length > 0) {
//     html += ' style="';
//     for (let style in this.styles) {
//     html += `${style}: ${this.styles[style]}; `;
//     }
//     html += '"';
//     }
    
//     if (this.isSelfClosing) {
//     html += '/>';
//     } else {
//     html += '>';
    

//     html += this.textContent;

//     for (let child of this.children) {
//     html += child.getHtml();
//     }
    
//     html += ``;
//     }
    
//     return html;
//     }
//     }
    
//     const block = new HtmlElement('div');
//     const h1 = new HtmlElement('h1');
//     h1.textContent = 'Заголовок';
//     const p = new HtmlElement('p');
//     p.textContent = 'Текст параграфа';
//     const a = new HtmlElement('a');
//     a.textContent = 'Ссылка';
//     a.setAttribute('href', 'https://example.com');
//     block.appendChild(h1);
//     block.appendChild(p);
//     block.appendChild(a);
    
//     document.write(block.getHtml());

// CHATGPT

class CssClass {
    constructor(className) {
    this.className = className;
    this.styles = {};
    }
    
    setStyle(property, value) {
    this.styles[property] = value;
    }
    
    removeStyle(property) {
    delete this.styles[property];
    }
    
    getCss() {
    let css = `.${this.className} {`;
    
    for (let property in this.styles) {
    css += `${property}: ${this.styles[property]}; `;
    }
    
    css += '}';
    
    return css;
    }
    }
    
    // Пример использования класса CssClass
    const myClass = new CssClass('my-class');
    myClass.setStyle('color', 'red');
    myClass.setStyle('font-size', '16px');
    myClass.setStyle('background-color', 'blue');
    myClass.removeStyle('font-size');
    
    console.log(myClass.getCss());