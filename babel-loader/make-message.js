class test{
    constructor(){

    }
    async makeMessage(msg){
        const element = document.createElement('p');
        element.textContent = msg;
        return element;
    }
}

export default test;