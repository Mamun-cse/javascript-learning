function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.display = function(){
        document.write(this.name+" ");
        document.write(this.age+" ");
        document.write(this.cgpa+" ");
        document.write(this.lang);
        document.write("</br>");
    }
}

var student1 = new Student("Mamun",25,3.50,["Bangla","Hindi","Englis"]);
var student2 = new Student("Abir",24,3.75,["Bangla","Hindi","Englis"]);
student1.display();
student2.display();