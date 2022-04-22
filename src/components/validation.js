import * as yup from 'yup';


const validationSchema = yup.object({
    email: yup.
    string().email('Gecerli bir email giriniz!').required('Zorunlu alan!'),
    password: yup.
    string().min(5,'Parolaniz en az 5 karakter olmalidir.').required('Zorunlu alan!'),
    confirmPassword: yup.
    string().oneOf([yup.ref('password')],'Parolalar uyusmuyor.').required('Zorunlu alan')
  });

export default validationSchema;