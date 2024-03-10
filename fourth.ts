class Employee{
    id:number;
    name:string;
    dept:string;
    constructor(id:number,name:string,dept:string)
    {
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    display()
    {
        console.log('employee id is'+this.id);
    }
}

let emp1=new Employee(101,'raju','HR');
emp1.display();