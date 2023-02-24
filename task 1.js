const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let student = xmlDOM.querySelectorAll('student');
let list = [];
let result = {}

student.forEach(item => {
  let studentRes = {
      name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
      age: `${item.querySelector('age').textContent}`,
      prof: `${item.querySelector('prof').textContent}`,
      lang: `${item.querySelector('name').getAttribute("lang")}`
  }

  list.push(studentRes)
});

result['list'] = list;

console.log(result);



// Также хотела попробовать расписать более объемно, но не разобралась как вывксти второго человека. 
// Если бы был всего 1 человек, то все бы заработало ахахах

const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const studentNode = xmlDOM.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = studentNode.querySelector("first");
const secondNode = studentNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const studentNode1 = xmlDOM.querySelector("student");
const nameNode1 = studentNode1.querySelector("name");
const firstNode1 = studentNode1.querySelector("first");
const secondNode1 = studentNode1.querySelector("second");
const ageNode1 = studentNode1.querySelector("age");
const profNode1 = studentNode1.querySelector("prof");

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute("lang");
const langAttr1 = nameNode1.getAttribute("lang");

/* Этап 3. Запись данных в результирующий объект */
const result = {
  // first: firstNode.textContent,
  // second: secondNode.textContent,
  name: firstNode.textContent + secondNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr,

  name1: firstNode1.textContent + secondNode.textContent,
  age1: Number(ageNode1.textContent),
  prof1: profNode1.textContent,
  lang1: langAttr1
};
console.log("result", result);
