interface UserProps {
    firstName: string
    lastName: string
    username: string
    password: string
    cpf: string
    contact: string
    isAdmin: boolean
}

class User implements UserProps{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    cpf: string;
    contact: string;
    isAdmin: boolean;

    constructor(firstName: string, lastName: string, username: string, password: string, cpf: string, contact: string, isAdmin: boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin
    }

    getFirstName():string{
        return this.firstName;
    }
    setFirstName(firstName:string):void{
        this.firstName = firstName;
    }

    getLastName():string{
        return this.lastName;
    }
    setLastName(lastName:string):void{
        this.lastName = lastName;
    }

    getUsername():string{
        return this.username;
    }
    setUsername(username:string):void{
        this.username = username;
    }

    getPassword():string{
        return this.password;
    }
    setPassword(password:string):void{
        this.password = password;
    }

    getCpf():string{
        return this.cpf;
    }
    setCpf(cpf:string):void{
        this.cpf = cpf;
    }

    getContact():string{
        return this.contact;
    }
    setContact(contact:string):void{
        this.contact = contact;
    }

    getIsAdmin():boolean{
        return this.isAdmin;
    }
    setIsAdmin(isAdmin:boolean):void{
        this.isAdmin = isAdmin;
    }

}

var user10 = new User('Nathan', 'Silva', 'nathansilva', '123456', '123456789-09', 'nathan@mail', true)

console.log(user10)