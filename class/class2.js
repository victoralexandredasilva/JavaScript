class Dev {
    constructor( name, age, area, mainLanguage ) {
        this.name = name; 
        this.age = age;
        this.area = area;
        this.language = mainLanguage;
    }

    speak() {
        console.log(`Olá sou desenvolvedor, trabalho com ${this.language} e me chamo ${this.name}`)
    }
}
class FrontendDev extends Dev { // Com o extends eu adquiro elementos da classe pai 
    constructor( name, age, area, mainLanguage, framework ) {
        super(name, age, area, mainLanguage) // Com o super() pode-se herdar propriedades da classe pai, sem precisar colocar na classe filha
        this.framework = framework
    }

    speak() {
        console.log(`Olá sou desenvolvedor FrontEnd, trabalho com ${this.language} e me chamo ${this.name}`);
    }
}
class BackendDev extends Dev {
    constructor( name, age, area, mainLanguage, database ) {
        super(name, age, area, mainLanguage)
        this.database = database;
    }

    speak() {
        console.log(`Olá sou desenvolvedor BackEnd, trabalho com ${this.language} e me chamo ${this.name}`);
    }
}

const fronEnd1 = new FrontendDev( 'Victor', 17, 'Frontend', 'JavaScript', 'ReactJS');
const backEnd1 = new BackendDev( 'Pedro', 29, 'Backend', 'Python', 'SQL Server');

fronEnd1.speak()  ;
console.log(fronEnd1,'\n');

backEnd1.speak();
console.log(backEnd1);
