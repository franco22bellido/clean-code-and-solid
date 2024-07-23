(() => {

    // Aplicando el principio de responsabilidad única.
    // Priorizar la composición frente a la herencia.

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
    }

    class User {
        public lastAccess: Date;
        public role: string;
        public email: string;

        constructor(
            { email, role }: UserProps,
        ) {
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true
        }
    }
    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }
    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingsProps) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthdate: Date;
        email: string;
        role: string;
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class UserSettings {
        public user: User;
        public person: Person;
        public settings: Settings;

        constructor(
            {
                email,
                role,
                birthdate,
                gender,
                lastOpenFolder,
                name,
                workingDirectory
            }: UserSettingsProps
        ) {
            this.user = new User({ email, role })
            this.person = new Person({ birthdate, gender, name })
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
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
    console.log(userSettings, userSettings.user.checkCredentials())
})();