class Engineer {
    constructor() {
        this.gitHub = this.getGitHub();
    };

    getGitHub() {
        const gitHub = 'testGitHub';
        return gitHub;
    };
};

module.exports = Engineer;