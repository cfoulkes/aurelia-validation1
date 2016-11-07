import { inject, NewInstance } from 'aurelia-dependency-injection';
import { ValidationController, validateTrigger, ValidationRules } from 'aurelia-validation';
import { Person } from './person';

@inject(NewInstance.of(ValidationController))
export class App {
    message = 'Hello World!';

    person: Person = new Person();

    constructor(public validationController: ValidationController) {
        this.validationController.validateTrigger = validateTrigger.manual;
        ValidationRules
            .ensure((p: Person) => p.firstName).required()
            .on(this.person);
    }


    submit() {
        console.log('submit');
        this.validationController.validate({ object: this.person });
        //console.log('errors:' + JSON.stringify(this.errors));
    }

}
