const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, role, github = '') {
        super(name, email, role);
        this.github = github;
    };

    getGitHub() {
        return this.github;
    };
};

module.exports = Engineer;