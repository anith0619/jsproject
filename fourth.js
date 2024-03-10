var Employee = /** @class */ (function () {
    function Employee(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    Employee.prototype.display = function () {
        console.log('employee id is' + this.id);
    };
    return Employee;
}());
var emp1 = new Employee(101, 'raju', 'HR');
emp1.display();
