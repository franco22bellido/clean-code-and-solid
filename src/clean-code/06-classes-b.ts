(() => {

    // No aplicando el principio de responsabilidad única

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    type Gender = 'M' | 'F'
    class Person {
        public birthdate: Date;
        public name: string;
        public gender: Gender;
        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public role: string;
        public email: string;

        constructor(
            { email, role, name, gender, birthdate }: UserProps,
        ) {
            super({ name, birthdate, gender })
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true
        }
    }
    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }
    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({
            lastOpenFolder,
            workingDirectory,
            birthdate,
            email,
            gender,
            name,
            role
        }: UserSettingsProps) {
            super({ birthdate, email, gender, name, role })
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home', 
        email: 'fernando@google.com', 
        role: 'Admin', 
        name: 'Fernando', 
        gender: 'M', 
        birthdate: new Date('1985-10-21')
    })
    console.log(userSettings, userSettings.checkCredentials())
})();