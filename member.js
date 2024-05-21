function skillsMember() {
    const member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        greet: function() {
            console.log('Hello, I am ' + this.name);
        }
    }
    return member;
}