
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Box } from './ContactForm.styled'
import { StyleForm, ButtonAdd, StyleError, InputStyle, Box } from './ContactForm.styled';



const phonebookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
    number: Yup.number().min(6, 'Too short!').required('This field is required'),

});


export const ContactForm = ({ onAdd }) => {
    return (
        <Box>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}

                validationSchema={phonebookSchema}
                onSubmit={(values, actions) => {

                    onAdd(values);
                    actions.resetForm();
                }}

            >

                <StyleForm>
                    <label htmlFor="name">Name</label>
                    <InputStyle id="name" name="name" />
                    <StyleError name="name" component="div" />


                    <label type="tel" htmlFor="number">Number</label>
                    <InputStyle id="s" name="number" />
                    <StyleError name="number" component="div" />

                    <ButtonAdd type="submit">Add contact</ButtonAdd>
                </StyleForm>

            </Formik>
        </Box>
    );
};
