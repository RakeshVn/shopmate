import Validator from 'validator';

export default function Validations(data) {
    let errors = {}

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length > 0 ? false : true
    }
}